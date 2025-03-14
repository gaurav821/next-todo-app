import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcrypt';
import { gql } from 'graphql-request';
import { hygraphClient } from '../../../lib/hygraph';

const GetNextAuthUserByEmail = gql`
  query GetNextAuthUserByEmail($email: String!) {
    user: nextAuthUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

const CreateNextAuthUserByEmail = gql`
  mutation CreateNextAuthUserByEmail($email: String!, $password: String!) {
    newUser: createNextAuthUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: 'jwt',
  },
  debug: true,
  pages: {
    signIn: '/login',
    signOut: '/auth/signout',
    error: '/login',
    newUser: '/signup',
  },
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'support@hygraph.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      authorize: async ({ email, password }) => {
        const { user } = await hygraphClient.request(GetNextAuthUserByEmail, {
          email,
        });
        if (!user) {
          const { newUser } = await hygraphClient.request(
            CreateNextAuthUserByEmail,
            {
              email,
              password: await hash(password, 12),
            }
          );
          return {
            id: newUser.id,
            username: email,
            email,
          };
        }
        const isValid = await compare(password, user.password);
        if (!isValid) {
          throw new Error('Wrong credentials. Try again.');
        }
        return {
          id: user.id,
          username: email,
          email,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.includes('/signup')) {
        return `${baseUrl}`;
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      session.userId = token.sub;
      return session;
    },
  },
  
});
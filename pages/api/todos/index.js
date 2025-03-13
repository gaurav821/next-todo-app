import { gql } from 'graphql-request';
import { getSession } from 'next-auth/react';
import { hygraphClient } from '../../../lib/hygraph';

export const GetAllTodosByUser = gql`
  query GetAllTodosByUser($userId: ID!) {
    todos(where: { nextAuthUser: { id: $userId } }, orderBy: createdAt_ASC) {
      id
      description
      completed
      dueDate
    }
  }
`;

const CreateNewTodoForUser = gql`
  mutation CreateNewTodoForUser(
    $description: String!
    $completed: Boolean
    $userId: ID!
    $dueDate: DateTime!
  ) {
    todo: createTodo(
      data: {
        description: $description
        completed: $completed
        dueDate: $dueDate
        nextAuthUser: { connect: { id: $userId } }
      }
    ) {
      id
      description
      completed
      dueDate
    }
  }
`;

export default async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({
      error: 'Unauthorized',
    });
  }
  
  try {
    switch (req.method.toLowerCase()) {
      case 'get': {
        const { todos } = await hygraphClient.request(GetAllTodosByUser, {
          userId: session.userId,
        });
        return res.status(200).json(todos);
      }
      case 'post': {
        const { description, completed, dueDate } = req.body;
        
        const todoData = {
          description,
          completed: completed || false,
          userId: session.userId
        };
        
        if (dueDate) {
          todoData.dueDate = dueDate;
        }
        
        const { todo } = await hygraphClient.request(CreateNewTodoForUser, todoData);
        return res.status(201).json(todo);
      }
      default: {
        return res.status(405).send({ error: 'Method not allowed' });
      }
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
};
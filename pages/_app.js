
import { SessionProvider } from 'next-auth/react';
import i18n from '../i18n';
import 'tailwindcss/tailwind.css';
import "../styles/globale.css";
import { I18nextProvider } from 'react-i18next';
import Header from '../components/header';
import { useRouter } from 'next/router';
import Head from 'next/head';


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';
  
  return (
    <I18nextProvider i18n={i18n}>
      <SessionProvider session={session}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className={`flex-1 flex items-center justify-center ${isAuthPage ? "bg-gray-50" : ""}`}>
          <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
        />
      </Head>
            <Component {...pageProps} />
          </main>
        </div>
      </SessionProvider>
    </I18nextProvider>
  );
}
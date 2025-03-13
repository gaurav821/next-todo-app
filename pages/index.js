import { useSession } from 'next-auth/react';
import Header from '../components/header';
import Todos from '../components/todos';
import { useTranslation } from 'react-i18next';

export default function IndexPage() {
  const { data } = useSession();
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="max-w-3xl w-full px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">{t("myTodos")}</h1>
        {data ? <Todos /> : <p>{t("loginToManageTodos")}</p>}
      </div>
    </div>
  );
}
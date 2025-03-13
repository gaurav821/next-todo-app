import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Header() {
  const { data: session, status } = useSession();
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const loading = status === 'loading';
  
  if (loading) return null;
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };
  
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-3 md:px-6">
        <div className="flex items-center space-x-4 text-indigo-600 hover:text-indigo-800 font-bold">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800">
            {t('myTodos')}
          </Link>
          {/* Language Switcher Dropdown */}
          <div className="relative text-gray-600">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border border-gray-300 rounded px-3 py-1 bg-gray-100"
            >
              {t('language')}
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => changeLanguage('en')}>
                  English
                </button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => changeLanguage('fr')}>
                  Français
                </button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => changeLanguage('es')}>
                  Español
                </button>
              </div>
            )}
          </div>
        </div>
        {session ? (
          <div className="space-x-3">
            <button 
              onClick={() => signOut({ callbackUrl: '/' })} 
              className="text-indigo-600 hover:text-indigo-800 font-bold"
            >
              {t('signOut')}
            </button>
          </div>
        ) : (
          <button 
            onClick={() => signIn()} 
            className="text-indigo-600 hover:text-indigo-800 font-bold"
          >
            {t('signIn')}
          </button>
        )}
      </div>
    </header>
  );
}
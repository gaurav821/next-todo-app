import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    form: ''
  });
  const {t} = useTranslation()
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    
    setErrors(prev => ({
      ...prev,
      [name]: '',
      form: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {
      email: '',
      password: '',
      form: ''
    };
    
    if (!credentials.email) {
      newErrors.email = t('emailRequired');
    } else if (!validateEmail(credentials.email)) {
      newErrors.email = t('invalidEmail');
    }
    
    if (!credentials.password) {
      newErrors.password = t('passwordRequired');
    }
    
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password
      });

      if (result.error) {
        setErrors({ ...newErrors, form: result.error });
      } else {
        router.push(router.query.callbackUrl || '/');
      }
    } catch (error) {
      setErrors({ ...newErrors, form: t('unexpectedError') });
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">{t('loginTitle')}</h1>
        <p className="text-gray-500 mt-2">
          {t('loginSubtitle')}
        </p>
      </div>
      
      {errors.form && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errors.form}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              value={credentials.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="password"
              name="password"
              placeholder={t("passwordPlaceholder")}
              value={credentials.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {t("loginTitle")}
        </button>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          {t('noAccount')} 
          <Link href="/signup" className="ml-1 text-indigo-600 hover:text-indigo-500">
            <span className='cursor-pointer'>{t('signupNow')}</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
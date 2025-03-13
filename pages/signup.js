import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Signup() {
  const { t } = useTranslation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    form: "",
  });
  const router = useRouter();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", form: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      form: "",
    };

    if (!credentials.email) {
      newErrors.email = t("signup.error_email_required");
    } else if (!validateEmail(credentials.email)) {
      newErrors.email = t("signup.error_email_invalid");
    }

    if (!credentials.password) {
      newErrors.password = t("signup.error_password_required");
    } else if (!validatePassword(credentials.password)) {
      newErrors.password = t("signup.error_password_invalid");
    }

    if (!credentials.confirmPassword) {
      newErrors.confirmPassword = t("signup.error_confirm_password_required");
    } else if (credentials.password !== credentials.confirmPassword) {
      newErrors.confirmPassword = t("signup.error_password_mismatch");
    }

    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
        callbackUrl: "/",
      });

      if (result.error) {
        setErrors({ ...newErrors, form: result.error });
      } else {
        router.push("/");
      }
    } catch (error) {
      setErrors({ ...newErrors, form: t("signup.error_form") });
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">
          {t("signup.title")}
        </h1>
        <p className="text-gray-500 mt-2">{t("signup.subtitle")}</p>
      </div>

      {errors.form && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errors.form}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder={t("signup.email_placeholder")}
            value={credentials.email}
            onChange={handleChange}
            className={`w-full pl-3 pr-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder={t("signup.password_placeholder")}
            value={credentials.password}
            onChange={handleChange}
            className={`w-full pl-3 pr-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder={t("signup.confirm_password_placeholder")}
            value={credentials.confirmPassword}
            onChange={handleChange}
            className={`w-full pl-3 pr-3 py-2 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {t("signup.submit")}
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          {t("signup.login_prompt")}{" "}
          <Link
            href="/login"
            className="ml-1 text-indigo-600 hover:text-indigo-500"
          >
            {t("signup.login_link")}
          </Link>
        </p>
      </div>
    </div>
  );
}

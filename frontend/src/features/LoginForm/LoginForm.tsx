import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLoginMutation } from '../../entities/user/userApi';

const validation = yup.object().shape({
  username: yup
    .string()
    .max(20, 'formErrors.max20')
    .required('formErrors.required'),
  password: yup
    .string()
    .min(5, 'formErrors.min6')
    .required('formErrors.required'),
});

function LoginForm() {
  const [authFailed, setAuthFailed] = useState(false);
  const [authMes, setAuthMes] = useState('');
  const [login] = useGetLoginMutation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const f = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      try {
        const userData = await login(JSON.stringify(values)).unwrap();
        const { accessToken, username } = userData;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('username', username);
        navigate('/');
      } catch (err) {
        if (err.status === 404 || err.status === 401) {
          setAuthMes(err.data.message);
        } else {
          setAuthMes('network error');
        }
        setAuthFailed(true);
      }
    },
  });

  return (
    <form onSubmit={f.handleSubmit} className="flex flex-col gap-5">
      <div className="relative">
        <input
          className={`${
            f.errors.username && f.touched.username ? 'border-red-500 ' : ''
          }floating-input peer`}
          name="username"
          type="text"
          id="floating-username"
          placeholder=" "
          ref={userRef}
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.username}
        />
        <label htmlFor="floating-username" className="floating-label">
          {t('authLoginForm.nickname')}
        </label>
      </div>
      {f.errors.username && f.touched.username ? (
        <p className="text-red-500">{t(f.errors.username)}</p>
      ) : null}

      <div className="relative">
        <input
          className={`${
            f.errors.password && f.touched.password ? 'border-red-500 ' : ''
          }floating-input peer`}
          name="password"
          type="password"
          id="floating-pass"
          placeholder=" "
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.password}
        />
        <label htmlFor="floating-pass" className="floating-label">
          {t('authLoginForm.password')}
        </label>
      </div>
      {f.touched.password && f.errors.password ? (
        <p className="text-red-500">{t(f.errors.password)}</p>
      ) : null}

      {authFailed ? <p className="text-red-500">{t(authMes)}</p> : null}
      <button
        type="submit"
        disabled={!(f.isValid && f.dirty) || f.isSubmitting}
        className="disabled:bg-slate-500 bg-blue-350 hover:bg-green-350 rounded-xl text-xl p-3 text-white mt-2"
      >
        {t('login')}
      </button>
    </form>
  );
}

export default LoginForm;

import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validation } from './validation';
import { useAuth } from '../../entities/user/Auth/authContext';
import {
  useGetSignupMutation,
  useGetLoginMutation,
} from '../../entities/user/Auth/loginApi';
import Preloader from '../../shared/IU/Preloader';
import SelectForm from '../../shared/IU/SelectForm';
import normalizeUserData from '../../shared/lib/authHelper';
import { days, months, years } from './lib/datePickerData';
import { normalizeDate } from './lib/normalizeData';

function AuhtForm() {
  const { t } = useTranslation();
  const userRef = useRef<HTMLInputElement>(null);
  const [authMes, setAuthMes] = useState('');
  const navigate = useNavigate();
  const [auth] = useGetSignupMutation();
  const [login] = useGetLoginMutation();
  const goAuth = useAuth();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const f = useFormik({
    initialValues: {
      name: '',
      birthday: {
        day: '',
        month: '',
        year: '',
      },
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      try {
        const birthday = normalizeDate(values.birthday);
        await auth(JSON.stringify({ ...values, birthday })).unwrap();
        const { username, password } = values;
        const userData = await login(
          JSON.stringify({ username, password })
        ).unwrap();
        goAuth?.logIn(normalizeUserData(userData));
        navigate('/');
      } catch (err) {
        if (err.status === 400) {
          setAuthMes(err.data.message);
        } else {
          setAuthMes('network error');
        }
      }
    },
  });

  return (
    <form onSubmit={f.handleSubmit} className="flex flex-col gap-5">
      <div className="relative">
        <input
          className={`${
            f.errors.name && f.touched.name ? 'border-red-500 ' : ''
          }floating-input peer`}
          name="name"
          type="text"
          id="floating-name"
          placeholder=" "
          ref={userRef}
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.name}
        />
        <label htmlFor="floating-name" className="floating-label">
          {t('authLoginForm.name')}
        </label>
      </div>
      {f.errors.name && f.touched.name ? (
        <p className="text-red-500">{t(f.errors.name)}</p>
      ) : null}

      <div className="relative">
        <input
          className={`${
            f.errors.username && f.touched.username ? 'border-red-500 ' : ''
          }floating-input peer`}
          name="username"
          type="text"
          id="floating-username"
          placeholder=" "
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
            f.errors.email && f.touched.email ? 'border-red-500 ' : ''
          }floating-input peer`}
          name="email"
          type="text"
          id="floating-email"
          placeholder=" "
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.email}
        />
        <label htmlFor="floating-email" className="floating-label">
          {t('authLoginForm.email')}
        </label>
      </div>
      {f.touched.email && f.errors.email ? (
        <p className="text-red-500">{t(f.errors.email)}</p>
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

      <div className="relative">
        <input
          className={`${
            f.errors.confirmPassword && f.touched.confirmPassword
              ? 'border-red-500 '
              : ''
          }floating-input peer`}
          name="confirmPassword"
          type="password"
          id="floating-confpass"
          placeholder=" "
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.confirmPassword}
        />
        <label htmlFor="floating-confpass" className="floating-label">
          {t('authLoginForm.confirmPassword')}
        </label>
      </div>
      {f.touched.confirmPassword && f.errors.confirmPassword ? (
        <p className="text-red-500">{t(f.errors.confirmPassword)}</p>
      ) : null}

      <p className="text-center">{t('authLoginForm.birthday')}</p>

      <div className="flex gap-1">
        <SelectForm
          onChange={(value) => f.setFieldValue('birthday.day', value.value)}
          placeholder="datePicker.day"
          options={days}
          className="w-1/4 4/4"
        />

        <SelectForm
          onChange={(value) => f.setFieldValue('birthday.month', value.value)}
          placeholder="datePicker.month"
          options={months}
          className="w-2/4 4/4"
        />

        <SelectForm
          onChange={(value) => f.setFieldValue('birthday.year', value.value)}
          placeholder="datePicker.year"
          className="w-1/4 4/4"
          options={years()}
        />
      </div>

      {authMes && <p className="text-red-500">{t(authMes)}</p>}
      {f.isSubmitting && <Preloader />}

      <button
        type="submit"
        disabled={!(f.isValid && f.dirty) || f.isSubmitting}
        className="disabled:bg-slate-500 bg-blue-350  hover:bg-green-350 rounded-xl text-xl p-2 text-white"
      >
        {t('authLoginForm.registration')}
      </button>
    </form>
  );
}

export default AuhtForm;

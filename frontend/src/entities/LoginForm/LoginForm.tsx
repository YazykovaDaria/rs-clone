import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

const validation = yup.object().shape({
  username: yup
    .string()
    .max(20, 'formErrors.max20')
    .required('formErrors.required'),
  password: yup
    .string()
    .min(6, 'formErrors.min6')
    .required('formErrors.required'),
});

function LoginForm() {
  const { t } = useTranslation();

  const f = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={f.handleSubmit} className="flex flex-col gap-5">
      <input
        className={
          f.errors.username && f.touched.username
            ? 'border-red-500 rounded-xl'
            : 'rounded-xl'
        }
        id="username"
        name="username"
        type="text"
        placeholder={t('authLoginForm.nickname')}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        value={f.values.username}
      />
      {f.errors.username && f.touched.username ? (
        <p className="text-red-500">{t(f.errors.username)}</p>
      ) : null}

      <input
        className={
          f.errors.password && f.touched.password
            ? 'border-red-500 rounded-xl'
            : 'rounded-xl'
        }
        id="password"
        name="password"
        type="password"
        placeholder={t('authLoginForm.password')}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        value={f.values.password}
      />
      {f.touched.password && f.errors.password ? (
        <p className="text-red-500">{t(f.errors.password)}</p>
      ) : null}

      <button
        type="submit"
        disabled={!(f.isValid && f.dirty)}
        className="disabled:bg-slate-500 bg-blue-350  hover:bg-green-350 rounded-xl text-xl p-2 text-white"
      >
        {t('login')}
      </button>
    </form>
  );
}

export default LoginForm;

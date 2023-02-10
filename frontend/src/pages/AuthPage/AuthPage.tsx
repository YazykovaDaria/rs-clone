import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const validation = yup.object().shape({
  name: yup
    .string()
    .max(20, 'formErrors.max20')
    .required('formErrors.required'),
  login: yup
    .string()
    .max(20, 'formErrors.max20')
    .required('formErrors.required'),
  email: yup.string().email('formErrors.email').required('formErrors.required'),
  password: yup
    .string()
    .min(6, 'formErrors.min6')
    .required('formErrors.required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'formErrors.samePassword')
    .required('formErrors.required'),
});

function Auth() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h2>{t('createAccount')}</h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t('authLoginForm.name')}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="text-red-500">{t(formik.errors.name)}</div>
        ) : null}

        <input
          id="login"
          name="login"
          type="text"
          placeholder={t('login')}
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        {formik.errors.login ? (
          <div className="text-red-500">{t(formik.errors.login)}</div>
        ) : null}

        <input
          id="email"
          name="email"
          type="email"
          placeholder={t('authLoginForm.email')}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="text-red-500">{t(formik.errors.email)}</div>
        ) : null}

        <input
          id="password"
          name="password"
          type="password"
          placeholder={t('authLoginForm.password')}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="text-red-500">{t(formik.errors.password)}</div>
        ) : null}

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder={t('authLoginForm.confirmPassword')}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword ? (
          <div className="text-red-500">{t(formik.errors.confirmPassword)}</div>
        ) : null}

        <button type="submit">{t('authLoginForm.registration')}</button>
      </form>
    </>
  );
}

export default Auth;

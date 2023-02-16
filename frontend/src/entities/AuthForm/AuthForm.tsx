import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

const validation = yup.object().shape({
  name: yup
    .string()
    .max(20, 'formErrors.max20')
    .required('formErrors.required'),
  birthday: yup.string().required('formErrors.required'),
  username: yup
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

function AuhtForm() {
  const { t } = useTranslation();

  const f = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   <div class="relative z-0 w-full mb-6 group">
  //   <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

  //   <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  // </div>

  return (
    <form onSubmit={f.handleSubmit} className="flex flex-col gap-5">
      <input
        className={
          f.errors.name && f.touched.name
            ? 'border-red-500 rounded-xl px-2 py-1'
            : 'rounded-xl px-2 py-1'
        }
        id="floating_name"
        name="name"
        type="text"
        placeholder={t('authLoginForm.name')}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        value={f.values.name}
      />

      {f.errors.name && f.touched.name ? (
        <p className="text-red-500">{t(f.errors.name)}</p>
      ) : null}

      <input
        className={
          f.errors.birthday && f.touched.birthday
            ? 'border-red-500 rounded-xl px-2 py-1'
            : 'rounded-xl px-2 py-1'
        }
        id="birthday"
        name="birthday"
        type="date"
        placeholder={t('authLoginForm.birthday')}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        value={f.values.birthday}
      />
      {f.errors.birthday && f.touched.birthday ? (
        <p className="text-red-500">{t(f.errors.birthday)}</p>
      ) : null}

      <input
        className={
          f.errors.username && f.touched.username
            ? 'border-red-500 rounded-xl px-2 py-1'
            : 'rounded-xl px-2 py-1'
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
          f.errors.email && f.touched.email
            ? 'border-red-500 rounded-xl px-2 py-1'
            : 'rounded-xl px-2 py-1'
        }
        id="email"
        name="email"
        type="email"
        placeholder={t('authLoginForm.email')}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        value={f.values.email}
      />
      {f.touched.email && f.errors.email ? (
        <p className="text-red-500">{t(f.errors.email)}</p>
      ) : null}

      <input
        className={
          f.errors.password && f.touched.password
            ? 'border-red-500 rounded-xl px-2 py-1'
            : 'rounded-xl px-2 py-1'
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

      <input
        className={
          f.errors.confirmPassword && f.touched.confirmPassword
            ? 'border-red-500 rounded-xl px-2 py-1'
            : 'rounded-xl px-2 py-1'
        }
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder={t('authLoginForm.confirmPassword')}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        value={f.values.confirmPassword}
      />
      {f.touched.confirmPassword && f.errors.confirmPassword ? (
        <p className="text-red-500">{t(f.errors.confirmPassword)}</p>
      ) : null}

      <button
        type="submit"
        disabled={!(f.isValid && f.dirty)}
        className="disabled:bg-slate-500 bg-blue-350  hover:bg-green-350 rounded-xl text-xl p-2 text-white"
      >
        {t('authLoginForm.registration')}
      </button>
    </form>
  );
}

export default AuhtForm;

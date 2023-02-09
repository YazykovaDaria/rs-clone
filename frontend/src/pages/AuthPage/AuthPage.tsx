import { useFormik } from 'formik';
import * as yup from 'yup';

const validation = yup.object().shape({
  name: yup.string().max(3, 'max 20 sumbols').required('required'),
  login: yup.string().max(20, 'max 20 sumbols').required('required'),
  email: yup.string().email('add right email').required('must be'),
  password: yup.string().min(6, 'min six sumbols').required('must be'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "password isn't same")
    .required('must be'),
});

function Auth() {
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
      <h2>Create accaunt</h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}

        <input
          id="login"
          name="login"
          type="text"
          placeholder="Login"
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        {formik.errors.login ? (
          <div className="text-red-500">{formik.errors.login}</div>
        ) : null}

        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword ? (
          <div className="text-red-500">{formik.errors.confirmPassword}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Auth;

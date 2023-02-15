import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const validation = yup.object().shape({
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

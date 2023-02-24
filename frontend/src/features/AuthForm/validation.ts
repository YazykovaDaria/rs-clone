/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

const ValidBirthday = yup.object().shape({
  day: yup.string().required('formErrors.required'),
  month: yup.string().required('formErrors.required'),
  year: yup.string().required('formErrors.required'),
});

export const validation = yup.object().shape({
  name: yup
    .string()
    .max(20, 'formErrors.max20')
    .required('formErrors.required'),
  birthday: ValidBirthday,
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

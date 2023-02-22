/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const validationTwit = yup.object().shape({
  text: yup.string(),
  img: yup.array().max(4, 'formErrors.maxImg'),
});

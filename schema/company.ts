import * as yup from 'yup'

export const newCompany = yup.object().shape({
  name: yup.string().required(),
  website: yup
    .string()
    .url()
    .nullable()
    .transform((value) => value || null),
  logo: yup
    .string()
    .nullable()
    .transform((value) => value || null),
})

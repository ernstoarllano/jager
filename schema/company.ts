import * as yup from 'yup'

const FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']

export const newCompany = yup.object().shape({
  name: yup.string().required(),
  website: yup
    .string()
    .url()
    .nullable()
    .transform((value) => value || null),
  logo: yup
    .mixed()
    .nullable()
    .transform((value) => (value && value.length ? value[0].name : null)),
})

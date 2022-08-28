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
    .test(
      'type',
      'supported image formats are jpg, jpeg, png and webp',
      (value) => !value || FORMATS.includes(value.type)
    )
    .transform((value) => value[0].name || null),
})

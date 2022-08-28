import * as yup from 'yup'

export const newRole = yup.object().shape({
  name: yup.string().required(),
})

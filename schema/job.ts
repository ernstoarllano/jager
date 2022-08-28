import * as yup from 'yup'

export const newJob = yup.object().shape({
  appliedOn: yup.date().required(),
  roleId: yup.number().required(),
  companyId: yup.number().required(),
  salary: yup.number().required(),
})

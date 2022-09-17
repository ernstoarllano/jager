import * as yup from 'yup'

export const newJob = yup.object().shape({
  appliedOn: yup.date().required(),
  roleId: yup.number().required(),
  companyId: yup.number().required(),
  salary: yup.number().required(),
})

export const editJob = yup.object().shape({
  appliedOn: yup.date().required(),
  salary: yup.number().required(),
  screenedOn: yup
    .date()
    .nullable(true)
    .transform((curr, orig) => (orig === '' ? null : curr)),
  interviewedOn: yup
    .date()
    .nullable(true)
    .transform((curr, orig) => (orig === '' ? null : curr)),
  eliminatedOn: yup
    .date()
    .nullable(true)
    .transform((curr, orig) => (orig === '' ? null : curr)),
  hiredOn: yup
    .date()
    .nullable(true)
    .transform((curr, orig) => (orig === '' ? null : curr)),
})

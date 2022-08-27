import * as yup from 'yup'

export const newJob = yup.object().shape({
  appliedOn: yup.date().required(),
  roleId: yup.number().required(),
  companyId: yup.number().required(),
  recruiterId: yup
    .number()
    .nullable(true)
    .transform((value) => value || null),
  salary: yup.number().required(),
  interviewerId: yup
    .number()
    .nullable(true)
    .transform((value) => value || null),
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
})

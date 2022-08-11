import * as yup from 'yup'

const jobSchema = yup
  .object({
    role: yup.string().required(),
    recruiter: yup.string(),
    manager: yup.string(),
    company: yup.string().required(),
    salary: yup.number(),
    appliedOn: yup.date().required(),
    screenedOn: yup.date(),
    interviewOn: yup.date(),
    eliminated: yup.boolean().required(),
  })
  .required()

export default jobSchema

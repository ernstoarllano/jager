import * as yup from 'yup'

const jobSchema = yup
  .object({
    appliedOn: yup.date().required(),
    roleId: yup.number().required(),
    companyId: yup.number().required(),
    recruiterId: yup.number().optional(),
    salary: yup.number().optional(),
    interviewer: yup.string().optional(),
    screenedOn: yup.date().optional(),
    interviewedOn: yup.date().optional(),
    eliminatedOn: yup.date().optional(),
  })
  .required()

export default jobSchema

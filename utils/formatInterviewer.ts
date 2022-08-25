import { Interviewer } from 'interfaces/interfaces'

export const formatInterviewer = (interviewer: Interviewer) => {
  if (!interviewer) return 'N/A'

  return `${interviewer.firstName} ${interviewer.lastName}`
}

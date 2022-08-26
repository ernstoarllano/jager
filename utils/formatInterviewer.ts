export const formatInterviewer = (interviewer?: any) => {
  if (!interviewer) return 'N/A'

  return `${interviewer.firstName} ${interviewer.lastName}`
}

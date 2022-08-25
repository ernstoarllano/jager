export const formatDateTime = (iso: string = '') => {
  if (!iso) return 'N/A'

  const date = new Date(iso).toLocaleString('default', {
    dateStyle: 'long',
  })
  const time = new Date(iso).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Los_Angeles',
  })

  return `${date} @ ${time}`
}

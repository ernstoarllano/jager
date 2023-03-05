export const formatDate = (iso: string) => {
  const date = new Date(iso).toLocaleString('default', {
    dateStyle: 'long',
  })

  return date
}
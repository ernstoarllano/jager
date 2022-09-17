export const formatDateSplit = (iso: string) => {
  if (!iso) return ''

  const date = new Date(iso).toISOString().split('T')[0]

  return date
}

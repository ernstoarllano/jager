export const getPercentage = (value: number, total: number) => {
  if (!value || !total) return 0

  return Math.round((value / total) * 100)
}

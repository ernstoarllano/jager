export const getPercentage = (value: number, total: number) => {
  return Math.round((value / total) * 100)
}

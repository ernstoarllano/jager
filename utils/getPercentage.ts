export const getPercentage = (value: number = 0, total: number = 0) => {
  return Math.round((value / total) * 100)
}

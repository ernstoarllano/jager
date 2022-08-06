export const formatCurrency = (value: number) => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

  return currency
}

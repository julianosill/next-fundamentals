export function formatPrice(price: number, decimals: boolean = true) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: decimals ? 2 : 0,
  })
}

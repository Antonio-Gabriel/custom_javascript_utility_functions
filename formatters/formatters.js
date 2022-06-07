const NUMBER_FORMATTER = new Intl.NumberFormat(undefined)
export function numberFormat(number) {
  return NUMBER_FORMATTER.format(number)
}

export function formatCurrency(number: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

export function sum(array: { descritpiton: string; income: number }[]) {
  return array.reduce((acc, data) => acc + data.income, 0);
}

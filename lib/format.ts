/** Formats a price in Mongolian tögrög, e.g. 45000 -> "45,000₮". */
export function formatPrice(amount: number): string {
  return `${amount.toLocaleString("en-US")}₮`;
}

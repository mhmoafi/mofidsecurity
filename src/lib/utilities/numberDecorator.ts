export function setNumberDiscriminant(input: number): string {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function decoratePercentageNumber(input: number): string {
  const roundedNumber = (Math.round(input * 100) / 100).toFixed(2);
  if (input > 0) {
    return `↑ ${roundedNumber}%`;
  } else if (input < 0) {
    return `↓ ${roundedNumber}%`;
  } else {
    return `${roundedNumber}%`;
  }
}

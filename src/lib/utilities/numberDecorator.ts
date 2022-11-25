export function setNumberDiscriminant(input: number): string {
  if (input) {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "";
  }
}
export function decoratePercentageNumber(input: number): string {
  if (input) {
    const roundedNumber = (Math.round(input * 100) / 100).toFixed(2);
    if (input > 0) {
      return `↑ ${roundedNumber}%`;
    } else if (input < 0) {
      return `↓ ${roundedNumber}%`;
    } else {
      return `${roundedNumber}%`;
    }
  } else {
    return "";
  }
}

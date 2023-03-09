const numberSeperator = Intl.NumberFormat('en-US', { minimumFractionDigits: 0, useGrouping: true, groupingSeparator:' ' });

export function seperateThis(num) {
  return numberSeperator.format(num)
}
export function convertCountryAbbreviationToName(abbr) {
  const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
  return displayNames.of(abbr);
}
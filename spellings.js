// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @cspell/spellchecker */
import cartesianProduct from 'just-cartesian-product';
/**
 * See
 * https://www.noslangues-ourlanguages.gc.ca/en/writing-tips-plus/sault-ste.-marie-soo-saultite
 */
export const preferredSaultSteMarieSpelling = 'Sault Ste. Marie';
/**
 * See
 * https://www.canadapost-postescanada.ca/cpc/en/support/kb/business/address-accuracy/municipality-abbreviations-ontario
 */
export const canadaPostSaultSteMarieSpelling = 'S-STE-MARIE';
const wordSpellings = {
    sault: ['s', 'sault', 'saulte', 'soo'],
    ste: ['s', 'st', 'ste', 'saint', 'sainte'],
    marie: ['m', 'mari', 'marie', 'mary']
};
const product = cartesianProduct([
    wordSpellings.sault,
    wordSpellings.ste,
    wordSpellings.marie
]);
// Generate combinations
const lowerCaseSaultSteMarieSpellingsList = product.map((combination) => {
    return combination.join('');
});
// Add specific misspellings and slang names
lowerCaseSaultSteMarieSpellingsList.push('saltstemarie', 'salutstemarie', 'thesault', 'thesoo');
export const lowerCaseSaultSteMarieSpellings = new Set(lowerCaseSaultSteMarieSpellingsList);

import cartesianProduct from 'just-cartesian-product';
export const preferredSaultSteMarieSpelling = 'Sault Ste. Marie';
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
// Generate spaced combinations
const lowerCaseSaultSteMarieSpellingsList = product.map((combination) => {
    return combination.join('');
});
lowerCaseSaultSteMarieSpellingsList.push('saltstemarie', 'salutstemarie', 'thesault', 'thesoo');
export const lowerCaseSaultSteMarieSpellings = new Set(lowerCaseSaultSteMarieSpellingsList);

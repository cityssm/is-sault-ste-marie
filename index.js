export const preferredSaultSteMarieSpelling = 'Sault Ste. Marie';
const lowerCaseSaultSteMarieSpellings = new Set([
    's ste marie',
    'sault saint marie',
    'sault sainte marie',
    'sault st marie',
    'sault ste marie',
    'soo ste marie',
    'ssm'
]);
/**
 * Determines whether a word is a spelling of Sault Ste. Marie.
 * @param {string} possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @returns {boolean} - True if the possible spelling appears to be a spelling of Sault Ste. Marie.
 */
export function isSaultSteMarie(possibleSpelling) {
    const sanitizedSpelling = possibleSpelling
        .trim()
        .toLowerCase()
        .replaceAll(/[.-]/g, ' ')
        .replaceAll(/\s+/g, ' ');
    return lowerCaseSaultSteMarieSpellings.has(sanitizedSpelling);
}
/**
 * Returns the preferred spelling of Sault Ste. Marie.
 * @param {string} possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @param {string} preferredSpelling - The preferred spelling of Sault Ste. Marie.
 * @returns {string} - The preferred spelling if the possible spelling is a spelling of Sault Ste. Marie. Otherwise, the possible spelling is returned.
 */
export function fixSaultSteMarie(possibleSpelling, preferredSpelling = preferredSaultSteMarieSpelling) {
    if (isSaultSteMarie(possibleSpelling)) {
        return preferredSpelling;
    }
    return possibleSpelling;
}

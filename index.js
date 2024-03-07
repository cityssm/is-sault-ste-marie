export const preferredSaultSteMarieSpelling = 'Sault Ste. Marie';
export const canadaPostSaultSteMarieSpelling = 'S-STE-MARIE';
const lowerCaseSaultSteMarieSpellings = new Set([
    // Proper spellings
    'sault sainte marie',
    'sault ste marie',
    // Canada Post
    's ste marie',
    // MPAC
    'sault sainte m',
    'sault ste mari',
    'saulte ste marie',
    // Slang
    'the sault',
    'the soo',
    // Sainte Typos
    'sault saint marie',
    'sault st marie',
    // Other Typos
    'ault ste marie',
    'dault ste marie',
    'salt ste marie',
    'salut ste marie',
    'saulat ste marie',
    'sault st emarie',
    'sault ste maire',
    'sault ste mare',
    'sault ste marei',
    'sault ste mari',
    'sault ste mrie',
    'soo ste marie',
    // Others
    's s m',
    's s marie',
    'sault stemarie',
    'saultstemarie',
    'ssm',
    'ssmarie'
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
        .replaceAll(/[,.-]/g, ' ')
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

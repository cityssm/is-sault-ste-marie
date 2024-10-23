import { canadaPostSaultSteMarieSpelling, lowerCaseSaultSteMarieSpellings, preferredSaultSteMarieSpelling } from './spellings.js';
function sanitizeSpelling(possibleSpelling) {
    return possibleSpelling
        .trim()
        .toLowerCase()
        .replaceAll(/[\s,.-]/g, '');
}
/**
 * Adds a new spelling of Sault Ste. Marie to the list of checked spellings.
 * @param newSpelling - A new spelling of Sault Ste. Marie.
 */
export function addSaultSteMarieSpelling(newSpelling) {
    lowerCaseSaultSteMarieSpellings.add(sanitizeSpelling(newSpelling));
}
/**
 * Determines whether a word is a spelling of Sault Ste. Marie.
 * @param possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @returns `true` if the possible spelling appears to be a spelling of Sault Ste. Marie.
 */
export function isSaultSteMarie(possibleSpelling) {
    return lowerCaseSaultSteMarieSpellings.has(sanitizeSpelling(possibleSpelling));
}
/**
 * Returns the preferred spelling of Sault Ste. Marie.
 * @param possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @param preferredSpelling - The preferred spelling of Sault Ste. Marie.
 * @returns The preferred spelling if the possible spelling is a spelling of Sault Ste. Marie. Otherwise, the possible spelling is returned.
 */
export function fixSaultSteMarie(possibleSpelling, preferredSpelling = preferredSaultSteMarieSpelling) {
    if (isSaultSteMarie(possibleSpelling)) {
        return preferredSpelling;
    }
    return possibleSpelling;
}
export { preferredSaultSteMarieSpelling, canadaPostSaultSteMarieSpelling, lowerCaseSaultSteMarieSpellings } from './spellings.js';
export default {
    addSaultSteMarieSpelling,
    isSaultSteMarie,
    fixSaultSteMarie,
    preferredSaultSteMarieSpelling,
    canadaPostSaultSteMarieSpelling,
    lowerCaseSaultSteMarieSpellings
};

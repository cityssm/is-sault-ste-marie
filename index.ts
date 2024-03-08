import {
  lowerCaseSaultSteMarieSpellings,
  preferredSaultSteMarieSpelling
} from './spellings.js'

/**
 * Determines whether a word is a spelling of Sault Ste. Marie.
 * @param {string} possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @returns {boolean} - True if the possible spelling appears to be a spelling of Sault Ste. Marie.
 */
export function isSaultSteMarie(possibleSpelling: string): boolean {
  const sanitizedSpelling = possibleSpelling
    .trim()
    .toLowerCase()
    .replaceAll(/[\s,.-]/g, '')

  return lowerCaseSaultSteMarieSpellings.has(sanitizedSpelling)
}

/**
 * Returns the preferred spelling of Sault Ste. Marie.
 * @param {string} possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @param {string} preferredSpelling - The preferred spelling of Sault Ste. Marie.
 * @returns {string} - The preferred spelling if the possible spelling is a spelling of Sault Ste. Marie. Otherwise, the possible spelling is returned.
 */
export function fixSaultSteMarie(
  possibleSpelling: string,
  preferredSpelling: string = preferredSaultSteMarieSpelling
): string {
  if (isSaultSteMarie(possibleSpelling)) {
    return preferredSpelling
  }
  return possibleSpelling
}

export {
  preferredSaultSteMarieSpelling,
  canadaPostSaultSteMarieSpelling,
  lowerCaseSaultSteMarieSpellings
} from './spellings.js'

export declare const preferredSaultSteMarieSpelling = "Sault Ste. Marie";
export declare const canadaPostSaultSteMarieSpelling = "S-STE-MARIE";
/**
 * Determines whether a word is a spelling of Sault Ste. Marie.
 * @param {string} possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @returns {boolean} - True if the possible spelling appears to be a spelling of Sault Ste. Marie.
 */
export declare function isSaultSteMarie(possibleSpelling: string): boolean;
/**
 * Returns the preferred spelling of Sault Ste. Marie.
 * @param {string} possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @param {string} preferredSpelling - The preferred spelling of Sault Ste. Marie.
 * @returns {string} - The preferred spelling if the possible spelling is a spelling of Sault Ste. Marie. Otherwise, the possible spelling is returned.
 */
export declare function fixSaultSteMarie(possibleSpelling: string, preferredSpelling?: string): string;

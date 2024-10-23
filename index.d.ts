/**
 * Adds a new spelling of Sault Ste. Marie to the list of checked spellings.
 * @param newSpelling - A new spelling of Sault Ste. Marie.
 */
export declare function addSaultSteMarieSpelling(newSpelling: string): void;
/**
 * Determines whether a word is a spelling of Sault Ste. Marie.
 * @param possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @returns `true` if the possible spelling appears to be a spelling of Sault Ste. Marie.
 */
export declare function isSaultSteMarie(possibleSpelling: string): boolean;
/**
 * Returns the preferred spelling of Sault Ste. Marie.
 * @param possibleSpelling - A possible spelling of Sault Ste. Marie.
 * @param preferredSpelling - The preferred spelling of Sault Ste. Marie.
 * @returns The preferred spelling if the possible spelling is a spelling of Sault Ste. Marie. Otherwise, the possible spelling is returned.
 */
export declare function fixSaultSteMarie(possibleSpelling: string, preferredSpelling?: string): string;
export { preferredSaultSteMarieSpelling, canadaPostSaultSteMarieSpelling, lowerCaseSaultSteMarieSpellings } from './spellings.js';
declare const _default: {
    addSaultSteMarieSpelling: typeof addSaultSteMarieSpelling;
    isSaultSteMarie: typeof isSaultSteMarie;
    fixSaultSteMarie: typeof fixSaultSteMarie;
    preferredSaultSteMarieSpelling: string;
    canadaPostSaultSteMarieSpelling: string;
    lowerCaseSaultSteMarieSpellings: Set<string>;
};
export default _default;

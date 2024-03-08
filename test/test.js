import assert from 'node:assert';
import * as isSaultSteMarie from '../index.js';
describe('spellings', () => {
    before(() => {
        console.log([...isSaultSteMarie.lowerCaseSaultSteMarieSpellings]);
    });
    it('Has spellings of Sault Ste. Marie available', () => {
        assert.ok(isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size > 0);
    });
});
describe('isSaultSteMarie()', () => {
    it('Validates spellings of Sault Ste. Marie', () => {
        assert.ok(isSaultSteMarie.isSaultSteMarie('Sault Ste. Marie'));
        assert.ok(isSaultSteMarie.isSaultSteMarie('Sault-Sainte-Marie'));
    });
    it('Return false for spellings that are not Sault Ste. Marie', () => {
        assert.ok(!isSaultSteMarie.isSaultSteMarie('Toronto'));
    });
});
describe('fixSaultSteMarie()', () => {
    it('Uses the preferred spelling of Sault Ste. Marie', () => {
        assert.strictEqual(isSaultSteMarie.fixSaultSteMarie(isSaultSteMarie.canadaPostSaultSteMarieSpelling), isSaultSteMarie.preferredSaultSteMarieSpelling);
    });
    it('Uses a given spelling of Sault Ste. Marie', () => {
        const givenSpelling = 'the soo';
        assert.strictEqual(isSaultSteMarie.fixSaultSteMarie('sault ste marie', givenSpelling), givenSpelling);
    });
    it('Returns the possible spelling when not a spelling of Sault Ste. Marie', () => {
        const notSaultSteMarie = 'Toronto';
        assert.strictEqual(isSaultSteMarie.fixSaultSteMarie(notSaultSteMarie), notSaultSteMarie);
    });
});

import assert from 'node:assert'

import * as isSaultSteMarie from '../index.js'
import { before, describe, it } from 'node:test'

describe('spellings', () => {
  it('Has spellings of Sault Ste. Marie available', () => {
    assert.ok(isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size > 0)
  })
})

describe('isSaultSteMarie()', () => {
  it('Validates spellings of Sault Ste. Marie', () => {
    assert.ok(isSaultSteMarie.isSaultSteMarie('Sault Ste. Marie'))
    assert.ok(isSaultSteMarie.isSaultSteMarie('Sault-Sainte-Marie'))
  })

  it('Return false for spellings that are not Sault Ste. Marie', () => {
    assert.ok(!isSaultSteMarie.isSaultSteMarie('Toronto'))
  })

  it('Adds a new spelling of Sault Ste. Marie', () => {
    const pizzaCaptial = 'pizza capital of ontario'

    assert.ok(!isSaultSteMarie.isSaultSteMarie(pizzaCaptial))

    const formerSpellingCount = isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size
    isSaultSteMarie.addSaultSteMarieSpelling(pizzaCaptial)
    assert.strictEqual(isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size, formerSpellingCount + 1)

    assert.ok(isSaultSteMarie.isSaultSteMarie(pizzaCaptial))
  })
})

describe('fixSaultSteMarie()', () => {
  it('Uses the preferred spelling of Sault Ste. Marie', () => {
    assert.strictEqual(
      isSaultSteMarie.fixSaultSteMarie(
        isSaultSteMarie.canadaPostSaultSteMarieSpelling
      ),
      isSaultSteMarie.preferredSaultSteMarieSpelling
    )
  })

  it('Uses a given spelling of Sault Ste. Marie', () => {
    const givenSpelling = 'the soo'

    assert.strictEqual(
      isSaultSteMarie.fixSaultSteMarie('sault ste marie', givenSpelling),
      givenSpelling
    )
  })

  it('Returns the possible spelling when not a spelling of Sault Ste. Marie', () => {
    const notSaultSteMarie = 'Toronto'

    assert.strictEqual(
      isSaultSteMarie.fixSaultSteMarie(notSaultSteMarie),
      notSaultSteMarie
    )
  })
})

import assert from 'node:assert'
import { describe, it } from 'node:test'

import * as isSaultSteMarie from '../index.js'

await describe('spellings', async () => {
  await it('Has spellings of Sault Ste. Marie available', () => {
    assert.ok(isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size > 0)
  })
})

await describe('isSaultSteMarie()', async () => {
  await it('Validates spellings of Sault Ste. Marie', () => {
    assert.ok(isSaultSteMarie.isSaultSteMarie('Sault Ste. Marie'))
    assert.ok(isSaultSteMarie.isSaultSteMarie('Sault-Sainte-Marie'))
  })

  await it('Return false for spellings that are not Sault Ste. Marie', () => {
    assert.ok(!isSaultSteMarie.isSaultSteMarie('Toronto'))
  })

  await it('Adds a new spelling of Sault Ste. Marie', () => {
    const pizzaCapital = 'pizza capital of ontario'

    assert.ok(!isSaultSteMarie.isSaultSteMarie(pizzaCapital))

    const formerSpellingCount =
      isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size

    isSaultSteMarie.addSaultSteMarieSpelling(pizzaCapital)
    
    assert.strictEqual(
      isSaultSteMarie.lowerCaseSaultSteMarieSpellings.size,
      formerSpellingCount + 1
    )

    assert.ok(isSaultSteMarie.isSaultSteMarie(pizzaCapital))
  })
})

await describe('fixSaultSteMarie()', async () => {
  await it('Uses the preferred spelling of Sault Ste. Marie', () => {
    assert.strictEqual(
      isSaultSteMarie.fixSaultSteMarie(
        isSaultSteMarie.canadaPostSaultSteMarieSpelling
      ),
      isSaultSteMarie.preferredSaultSteMarieSpelling
    )
  })

  await it('Uses a given spelling of Sault Ste. Marie', () => {
    const givenSpelling = 'the soo'

    assert.strictEqual(
      isSaultSteMarie.fixSaultSteMarie('sault ste marie', givenSpelling),
      givenSpelling
    )
  })

  await it('Returns the possible spelling when not a spelling of Sault Ste. Marie', () => {
    const notSaultSteMarie = 'Toronto'

    assert.strictEqual(
      isSaultSteMarie.fixSaultSteMarie(notSaultSteMarie),
      notSaultSteMarie
    )
  })
})

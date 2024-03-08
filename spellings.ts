import cartesianProduct from 'just-cartesian-product'

export const preferredSaultSteMarieSpelling = 'Sault Ste. Marie'

export const canadaPostSaultSteMarieSpelling = 'S-STE-MARIE'

const wordSpellings = {
  sault: [
    'ault',
    'dault',
    's',
    'salt',
    'salut',
    'sault',
    'saulte',
    'soo',
    'sult'
  ],
  ste: ['s', 'st', 'ste', 'saint', 'sainte'],
  marie: ['m', 'mare', 'marei', 'maire', 'marie', 'mary']
}

const lowerCaseSaultSteMarieSpellingsList = cartesianProduct([
  wordSpellings.sault,
  wordSpellings.ste,
  wordSpellings.marie
]).map((combination) => {
  return combination.join(' ')
})

lowerCaseSaultSteMarieSpellingsList.push(
  'the sault',
  'the soo',
  'sault stemarie',
  'saultstemarie',
  'ssm',
  'ssmarie'
)

export const lowerCaseSaultSteMarieSpellings = new Set(
  lowerCaseSaultSteMarieSpellingsList
)

import cartesianProduct from 'just-cartesian-product'

export const preferredSaultSteMarieSpelling = 'Sault Ste. Marie'

export const canadaPostSaultSteMarieSpelling = 'S-STE-MARIE'

const saultSpellings = [
  'ault',
  'dault',
  's',
  'salt',
  'salut',
  'sault',
  'saulte',
  'soo',
  'sult'
]

const steSpellings = ['s', 'st', 'ste', 'saint', 'sainte']

const marieSpellings = ['m', 'mare', 'marei', 'maire', 'marie', 'mary']

const lowerCaseSaultSteMarieSpellingsList = cartesianProduct([
  saultSpellings,
  steSpellings,
  marieSpellings
]).map((combination) => {
  return combination.join(' ')
})

lowerCaseSaultSteMarieSpellingsList.push(
  'sault stemarie',
  'saultstemarie',
  'ssm',
  'ssmarie'
)

export const lowerCaseSaultSteMarieSpellings = new Set(
  lowerCaseSaultSteMarieSpellingsList
)

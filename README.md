# Is Sault Ste. Marie

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/is-sault-ste-marie)](https://www.npmjs.com/package/@cityssm/is-sault-ste-marie)
[![DeepSource](https://app.deepsource.com/gh/cityssm/is-sault-ste-marie.svg/?label=active+issues&show_trend=true&token=4oKKC7nU8DJt6p8_gbYnL4im)](https://app.deepsource.com/gh/cityssm/is-sault-ste-marie/)
[![Maintainability](https://api.codeclimate.com/v1/badges/839fac32847d10185de3/maintainability)](https://codeclimate.com/github/cityssm/is-sault-ste-marie/maintainability)
[![codecov](https://codecov.io/gh/cityssm/is-sault-ste-marie/graph/badge.svg?token=PO44KQTK9D)](https://codecov.io/gh/cityssm/is-sault-ste-marie)
[![Coverage Testing](https://github.com/cityssm/is-sault-ste-marie/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/is-sault-ste-marie/actions/workflows/coverage.yml)

You know your city name is challenging when it requires
[clarification from the Government of Canada](https://www.noslangues-ourlanguages.gc.ca/en/writing-tips-plus/sault-ste.-marie-soo-saultite.html)
to spell it properly.

**This package helps standardize the spelling of our beloved city, Sault Ste. Marie.**

Includes the full spelling, the preferred abbreviated spelling,
common misspellings, and unique spellings from other sources,
like Canada Post and the Ontario Ministry of Transportation.

## Installation

```sh
npm install @cityssm/is-sault-ste-marie
```

## Usage

```javascript
import { isSaultSteMarie, fixSaultSteMarie } from '@cityssm/is-sault-ste-marie'

// Test whether a string is a spelling of Sault Ste. Marie.

console.log(isSaultSteMarie('Sault Ste. Marie')) // => true
console.log(isSaultSteMarie('Sault-Sainte-Marie')) // => true
console.log(isSaultSteMarie('Toronto')) // => false

// Returns a preferred spelling of Sault Ste. Marie, or the original string.

console.log(fixSaultSteMarie('Sault Ste Marie')) // => "Sault Ste. Marie"
console.log(fixSaultSteMarie('Sault-Sainte-Marie')) // => "Sault Ste. Marie"
console.log(fixSaultSteMarie('Sault Ste. Marie', 'The Sault')) // => "The Sault"
console.log(fixSaultSteMarie('Toronto')) // => "Toronto"
```

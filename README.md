# Is Sault Ste. Marie

You know your city name is challenging when it requires
[clarification from the Government of Canada](https://www.noslangues-ourlanguages.gc.ca/en/writing-tips-plus/sault-ste.-marie-soo-saultite.html)
to spell it properly.

This package standardizes the spelling of our beloved city, Sault Ste. Marie.

## Installation

```sh
npm install @cityssm/is-sault-ste-marie
```

## Usage

```javascript
import { isSaultSteMarie, fixSaultSteMarie } from '@cityssm/is-sault-ste-marie'

// Test whether a string is a spelling of Sault Ste. Marie.

console.log( isSaultSteMarie('Sault Ste. Marie') )   // => true
console.log( isSaultSteMarie('Sault-Sainte-Marie') ) // => true
console.log( isSaultSteMarie('Toronto') ) // => false

// Returns a preferred spelling of Sault Ste. Marie, or the original string.

console.log( fixSaultSteMarie('Sault Ste Marie') )    // => "Sault Ste. Marie"
console.log( fixSaultSteMarie('Sault-Sainte-Marie') ) // => "Sault Ste. Marie"
console.log( fixSaultSteMarie('Sault Ste. Marie', 'The Sault') ) // => "The Sault"
console.log( fixSaultSteMarie('Toronto') ) // => "Toronto"
```
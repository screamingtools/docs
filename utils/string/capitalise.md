# capitalise

> Capitalises the first letter of one word, or all words, in a string.

## Usage

```ts
import { capitalise } from '@screaming/utils'

capitalise('ribbit ribbit.')
// 'Ribbit ribbit.'

capitalise('ribbit ribbit.', true)
// 'Ribbit Ribbit.'

capitalise('ribbit/ribbit.', true, '/')
// 'Ribbit/Ribbit.'
```

## Type Definitions

```ts
/**
 * @param str - The string.
 * @param allWords - If all words should be capitalised.
 * @param delimiter - The delimiter to split the string by.
 * @returns The capitalised string.
 */
export declare function capitalise(str: string, allWords = false, delimiter = ' '): string
```

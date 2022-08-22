# isBlank

> Identifies strings which only contain whitespace.

## Usage

```ts
import { isBlank } from '@screaming/utils'

isBlank('ribbit')
// false

isBlank('   ')
// true

isBlank('')
// true
```

## Type Definitions

```ts
/**
 * @param str - The string.
 * @returns If the string is blank.
 */
export declare function isBlank(str: string): boolean
```

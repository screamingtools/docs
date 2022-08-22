# isEmpty

> Identifies empty strings.

## Usage

```ts
import { isEmpty } from '@screaming/utils'

isEmpty('ribbit')
// false

isEmpty('   ')
// false

isEmpty('')
// true
```

## Type Definitions

```ts
/**
 * @param str - The string.
 * @returns If the string is empty.
 */
export declare function isEmpty(str: string): boolean
```

# toNumber

> Converts a string which contains a number into the number itself.

## Usage

```ts
import { toNumber } from '@screaming/utils'

toNumber('1234')
// 1234

toNumber('$1,234')
// 1234

toNumber('-12.34%')
// -12.34

toNumber('ribbit')
// NaN
```

## Type Definitions

```ts
/**
 * @param str - The string.
 * @returns The number.
 */
export declare function toNumber(str: string): number
```

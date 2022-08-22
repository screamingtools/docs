# uniqueNumber

> Generates a unique number of a stated length.

## Usage

```ts
import { uniqueNumber } from '@screaming/utils'

uniqueNumber(4)
// 4-digit number

uniqueNumber(4)
// different 4-digit number
```

## Type Definitions

```ts
/**
 * @param length - The unique number's length.
 * @returns The generated unique number.
 */
export declare function uniqueNumber(length: number): number
```

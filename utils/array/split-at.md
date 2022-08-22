# splitAt

> Splits an array into two at a stated index.

## Usage

```ts
import { splitAt } from '@screaming/utils'

splitAt(4, ['a', 'b', 'c', 'd', 'e'])
// [['a', 'b', 'c', 'd'], ['e']]
```

## Type Definitions

```ts
/**
 * @param i - The position to split at.
 * @param array - The array.
 * @returns The tuple of values before and after the split.
 */
export declare function splitAt<T>(i: number, array: readonly T[]): [T[], T[]]
```

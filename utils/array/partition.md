# partition

> Splits an array into two based on a predicate function.

## Usage

```ts
import { partition } from '@screaming/utils'

function isEven(n: number): number {
  return n % 2 === 0
}

partition(isEven, [1, 2, 3, 4, 5])
// [[2, 4], [1, 3, 5]]
```

## Type Definitions

```ts
/**
 * @param filter - The predicate function.
 * @param array - The array.
 * @returns The tuple of values that satisfy the predicate and those that don't.
 */
export declare function partition<T>(
  filter: (x: T, idx: number, a: readonly T[]) => boolean,
  array: readonly T[]
): [T[], T[]]
```

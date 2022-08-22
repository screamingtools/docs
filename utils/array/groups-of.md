# groupsOf

> Splits an array into groups of equal size.

## Usage

```ts
import { groupsOf } from '@screaming/utils'

groupsOf(2, ['a', 'b', 'c', 'd', 'e'])
// [['a', 'b'], ['c', 'd'], ['e']]
```

## Type Definitions

```ts
/**
 * @param s - The size of each group.
 * @param array - The array.
 * @returns The array split into groups.
 */
export declare function groupsOf<T>(s: number, array: readonly T[]): T[][]
```

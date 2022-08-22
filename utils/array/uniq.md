# uniq

> Removes duplicate primitive values from an array.

## Usage

::: warning
`uniq` only performs shallow equality checks, so will not remove duplicate arrays or objects.
:::

```ts
import { uniq } from '@screaming/utils'

uniq(['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c'])
// ['a', 'b', 'c']
```

## Type Definitions

```ts
/**
 * @param array - The array.
 * @returns The array without duplicated primitive values.
 */
export declare function uniq<T>(array: readonly T[]): T[]
```

# memoize

> Optimises subsequent calls of a function by caching return values.

## Usage

```ts
import { memoize } from '@screaming/utils'

const add = memoize((x: number, y: number) => {
  return x + y
})

add(1, 2)
// calculates 3

add(1, 2)
// obtains 3 from cache
```

## Type Definitions

```ts
/**
 * @param fn - The function.
 * @returns The memoized function.
 */
export declare function memoize<T>(fn: (...args: any[]) => T): (...args: any[]) => T
```

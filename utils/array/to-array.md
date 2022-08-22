# toArray

> Wraps a single value in an array, if not already an array.

## Usage

```ts
import { toArray } from '@screaming/utils'

toArray('a')
// ['a']

toArray(['a', 'b', 'c', 'd', 'e'])
// ['a', 'b', 'c', 'd', 'e']
```

## Type Definitions

```ts
/**
 * @param maybeArray - The value to wrap, or the existing array.
 * @returns The item wrapped in an array, or the provided array.
 */
export declare function toArray<T>(maybeArray: Nullable<Arrayable<T>>): T[]
```

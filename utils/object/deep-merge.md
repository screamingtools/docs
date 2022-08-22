# deepMerge

> Recursively merges multiple objects into one.

## Usage

```ts
import { deepMerge } from '@screaming/utils'

const obj1 = { foo: { bar: 1 } }
const obj2 = { foo: { baz: 2 } }

deepMerge(obj1, obj2)
// { foo: { bar: 1, baz: 2 } }
```

## Type Definitions

```ts
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never

/**
 * @param objects - The objects to merge.
 * @returns The merged object.
 */
export declare function deepMerge<T extends Obj<any>[]>(
  ...objects: T
): UnionToIntersection<T[number]>
```

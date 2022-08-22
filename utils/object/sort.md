# sort

> Sorts objects by a key.

## Usage

```ts
import { sort } from '@screaming/utils'

const objects = [
  { id: 0, score: 9 },
  { id: 1, score: 5 },
  { id: 2, score: 9 },
  { id: 3, score: 10 },
  { id: 4, score: 2 }
]

sort(objects, { by: 'score', backup: ['id', true] })
// [
//   { id: 4, score: 2 },
//   { id: 1, score: 5 },
//   { id: 0, score: 9 },
//   { id: 2, score: 9 },
//   { id: 3, score: 10 }
// ]

sort(objects, { by: 'score', backup: ['id', true], asc: false })
// [
//   { id: 3, score: 10 },
//   { id: 0, score: 9 },
//   { id: 2, score: 9 },
//   { id: 1, score: 5 },
//   { id: 4, score: 2 }
// ]

sort(objects, { by: 'score', backup: ['id', true], asc: false, ignore: [10] })
// [
//   { id: 0, score: 9 },
//   { id: 2, score: 9 },
//   { id: 1, score: 5 },
//   { id: 4, score: 2 },
//   { id: 3, score: 10 } <-- appended
// ]
```

## Type Definitions

```ts
type SortObj = Obj<string | number | boolean>

interface SortOptions<K> {
  by: K
  backup: [string, boolean]
  ignore?: (string | number | boolean)[]
  asc?: boolean
}

/**
 * @param objects - The objects to sort.
 * @param options - Function options.
 * @param options.by - The key to sort by.
 * @param options.backup - The backup key and its respective sort direction to use in the event of a tie.
 * @param options.ignore - The values which should ignore sorting and be appended instead.
 * @param options.asc - If objects should be sorted from lowest to highest.
 * @returns - The sorted objects.
 */
export declare function sort(
  objects: SortObj[],
  { by, backup, ignore = [], asc = true }: SortOptions<keyof typeof objects[0]>
): SortObj[]
```

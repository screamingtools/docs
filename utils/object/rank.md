# rank

> Ranks objects based on their position in an array.

## Usage

:::warning
This method has been designed to be used in conjunction with [`sort`](./sort.md) so naïvely adds ranks under the assumption that the given objects are already in the correct order.
:::

```ts
import { rank } from '@screaming/utils'

const objects = [
  { id: 0, score: 10 },
  { id: 1, score: 9 },
  { id: 2, score: 9 },
  { id: 3, score: 5 },
  { id: 4, score: 2 }
]

rank(objects)
// [
//   { id: 0, score: 10, rank: 1 },
//   { id: 1, score: 9, rank: 2 },
//   { id: 2, score: 9, rank: 3 },
//   { id: 3, score: 5, rank: 4 },
//   { id: 4, score: 2, rank: 5 }
// ]

rank(objects, 'score')
// [
//   { id: 0, score: 10, rank: 1 },
//   { id: 1, score: 9, rank: '=2' },
//   { id: 2, score: 9, rank: '=2' },
//   { id: 3, score: 5, rank: 4 },
//   { id: 4, score: 2, rank: 5 }
// ]
```

## Type Definitions

```ts
type RankObj = Obj<string | number | boolean>

/**
 * @param objects - The objects to rank.
 * @param tieKey - The key to use if tying data.
 * @returns The ranked objects.
 */
export declare function rank(
  objects: RankObj[],
  tieKey = ''
): (RankObj & { rank: number | string })[]
```

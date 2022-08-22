# toOrdinal

> Adds the respective ordinal suffix (-st, -nd, -rd or -th) to a number.

## Usage

```ts
import { toOrdinal } from '@screaming/utils'

toOrdinal(1)
// '1st'

toOrdinal(2)
// '2nd'

toOrdinal(3)
// '3rd'

toOrdinal(4)
// '4th'
```

## Type Definitions

```ts
/**
 * @param n - The number.
 * @returns The number with the ordinal suffix appended.
 */
export declare function toOrdinal(n: number): string
```

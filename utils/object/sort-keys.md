# sortKeys

> Sorts the keys in an object in alphabetical order.

## Usage

```ts
import { sortKeys } from '@screaming/utils'

const frog = {
  name: 'Kermit',
  species: 'frog',
  id: 0,
  colour: 'green'
}

sortKeys(frog)
// {
//   colour: 'green',
//   id: 0,
//   name: 'Kermit',
//   species: 'frog',
// }
```

## Type Definitions

```ts
/**
 * @param obj - The object.
 * @returns The object with sorted keys.
 */
export declare function sortKeys<T>(obj: Obj<T>): Obj<T>
```

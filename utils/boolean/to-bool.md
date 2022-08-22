# toBool

> Converts a value into its respective boolean representation, treating the strings `'false'`, `'no'`, and `'0'` as falsey.

## Usage

```ts
import { toBool } from '@screaming/utils'

toBool(1)
// true

toBool('ribbit')
// true

toBool('false')
// false
```

## Type Definitions

```ts
/**
 * @param value - The value.
 * @returns The boolean representation of the value.
 */
export declare function toBool(value: unknown): boolean
```

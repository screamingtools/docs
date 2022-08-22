# randomNumber

> Generates a random integer between bounds.

## Usage

```ts
import { randomNumber } from '@screaming/utils'

randomNumber(5)
// 0, 1, 2, 3, or 4

randomNumber(5, 2)
// 2, 3, or 4
```

## Type Definitions

```ts
/**
 * @param max - The exclusive maximum bound.
 * @param min - The inclusive minimum bound.
 * @returns The random integer.
 */
export declare function randomNumber(max: number, min = 0): number
```

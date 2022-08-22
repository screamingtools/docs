# easings

> A collection of animation timing functions.

## Usage

```ts
import type { Easing } from '@screaming/utils'
import { easings } from '@screaming/utils'

const quadIn = easings[Easing.QUAD_IN]
```

:::tip
For a list of the available easing functions, see: [`Easing`](../types/types.md#type-definitions).
:::

## Type Definitions

```ts
type EasingFn = (i: number, j: number, k: number, l: number) => number
export declare const easings: Record<Easing, EasingFn>
```

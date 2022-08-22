# types

> Utility types.

## Usage

```ts
import type { ... } from '@screaming/utils'
```

## Type Definitions

```ts
export type Arrayable<T> = T | T[]
export type Nullable<T> = T | null | undefined

export type Fn<T = any> = (...args: any[]) => T
export type VoidFn = Fn<void>

export type Obj<V = unknown> = Record<string | symbol | number, V>

export enum Easing {
  LINEAR = 'linear',
  QUAD_IN = 'quadIn',
  QUAD_OUT = 'quadOut',
  QUAD_IN_OUT = 'quadInOut',
  CUBIC_IN = 'cubicIn',
  CUBIC_OUT = 'cubicOut',
  CUBIC_IN_OUT = 'cubicInOut',
  QUARTIC_IN = 'quarticIn',
  QUARTIC_OUT = 'quarticOut',
  QUARTIC_IN_OUT = 'quarticInOut',
  QUINTIC_IN = 'quinticIn',
  QUINTIC_OUT = 'quinticOut',
  QUINTIC_IN_OUT = 'quinticInOut',
  SINUSOIDAL_IN = 'sinusoidalIn',
  SINUSOIDAL_OUT = 'sinusoidalOut',
  SINUSOIDAL_IN_OUT = 'sinusoidalInOut',
  EXPONENTIAL_IN = 'exponentialIn',
  EXPONENTIAL_OUT = 'exponentialOut',
  EXPONENTIAL_IN_OUT = 'exponentialInOut',
  CIRCULAR_IN = 'circularIn',
  CIRCULAR_OUT = 'circularOut',
  CIRCULAR_IN_OUT = 'circularInOut'
}
```

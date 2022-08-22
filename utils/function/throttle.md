# throttle

> Prevents function execution for a stated time period after it was last called.

## Usage

```ts
import { throttle } from '@screaming/utils'

const ribbit = throttle(() => {
  console.log('ribbit')
}, 1000)
// can only log once per 1000ms
```

## Type Definitions

```ts
/**
 * @param fn - The function.
 * @param limit - The time period.
 * @returns The throttled function.
 */
export declare function throttle(
  fn: (...args: any[]) => void,
  limit: number
): (...args: any[]) => void
```

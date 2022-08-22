# debounce

> Prevents function execution until it hasn't been called for a stated time period.

## Usage

```ts
import { debounce } from '@screaming/utils'

const ribbit = debounce(() => {
  console.log('ribbit')
}, 1000)
// logs when `ribbit` hasn't been called for 1000ms
```

## Type Definitions

```ts
/**
 * @param fn - The function.
 * @param delay - The time period (in ms).
 * @returns The debounced function.
 */
export declare function debounce(
  fn: (...args: any[]) => void,
  delay: number
): (...args: any[]) => void
```

# once

> Enforces that a function is only callable one time.

## Usage

```ts
import { once } from '@screaming/utils'

const ribbit = once(() => {
  console.log('ribbit')
})

ribbit()
// logs "ribbit"

ribbit()
// logs nothing
```

## Type Definitions

```ts
/**
 * @param fn - The function.
 * @returns The one-time callable function.
 */
export declare function once(fn: (...args: any[]) => void): (...args: any[]) => void
```

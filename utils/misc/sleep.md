# sleep

> Halts thread execution for a stated time period.

## Usage

```ts
import { sleep } from '@screaming/utils'

await sleep(1000)
// pauses execution for 1000ms
```

## Type Definitions

```ts
/**
 * @param duration - The time period.
 * @returns The halting promise.
 */
export declare async function sleep(duration: number): Promise<void>
```

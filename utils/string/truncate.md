# truncate

> Truncates a string to a provided length.

## Usage

```ts
import { truncate } from '@screaming/utils'

truncate('ribbit ribbit', 9)
// 'ribbit ri...'

truncate('interrupt', 5, '-')
// 'inter-'
```

## Type Definitions

```ts
/**
 * @param str - The string.
 * @param length - The length.
 * @param truncateStr - The prefix to apply after truncation.
 * @returns The truncated string.
 */
export declare function truncate(str: string, length: number, truncateStr = '...'): string
```

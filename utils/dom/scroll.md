# scroll

> Scrolls the page or provided container to a target element or y-coordinate.

## Usage

```ts
import { scroll } from '@screaming/utils'

scroll({
  to: '#target',
  offset: 0,
  duration: 250,
  container: '#scroll-container'
})
```

## Type Definitions

```ts
interface ScrollOptions {
  to: string | number | HTMLElement
  offset?: number
  duration?: number
  container?: string
  easeFn?: Easing
}

/**
 * @param options - Function options.
 * @param options.to - The scroll target.
 * @param options.offset - The offset from the scroll target.
 * @param options.duration - The scroll duration.
 * @param options.easeFn - The animation timing function.
 * @param options.container - The container to scroll in.
 */
export declare function scroll({
  to,
  offset = 0,
  duration = 1000,
  easeFn = 'exponentialInOut',
  container = ''
}: ScrollOptions): void
```

# makeBackToTop

> Adds back to top functionality to an element.

## Usage

```html
<button id="target">^</button>
```

```ts
import { makeBackToTop } from '@screaming/utils'

makeBackToTop('#target', {
  activeClass: 'btt-active',
  inactiveClass: 'btt-inactive',
  threshold: 250,
  debounceDelay: 100
})
```

## Type Definitions

```ts
interface MakeBackToTopOptions {
  containerSelector?: string
  activeClass?: string
  inactiveClass?: string
  threshold?: number
  offset?: number
  debounceDelay?: number
}

/**
 * @param targetSelector - The target element's selector.
 * @param options - Function options.
 * @param options.containerSelector - The container to scroll in.
 * @param options.activeClass - The class to add when scrolled beneath the threshold.
 * @param options.inactiveClass - The class to add when scrolled above the threshold.
 * @param options.threshold - The threshold for applying classes.
 * @param options.offset - The offset from the top to scroll to.
 * @param options.debounceDelay - The time to wait after scrolling before applying classes.
 */
export declare function makeBackToTop(
  targetSelector: string,
  options: MakeBackToTopOptions = {}
): void
```

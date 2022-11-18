# ZoomPanner

> Allows an image to be zoomed and panned inside of its parent container.

:::info
This project's panning/zooming logic is heavily inspired by [timmywil/panzoom](https://github.com/timmywil/panzoom/).
:::

## Usage

```html
<div id="zp-container">
  <img src="..." alt="..." />
</div>
```

```ts
import { ZoomPanner } from '@screaming/utils'

const zp = new ZoomPanner('#zp-container', { ... })
```

## Examples

**Syncing `ZoomPanner`'s scale with an `<input type="range">`**:

:::details View example

Ensure that the HTML element's `min`, `max`, and `step` values match those of the `ZoomPanner`.

These are: `1`, `5`, and `0.5` respectively, by default.

```html
<input id="zp-slider" type="range" min="1" max="5" step="0.5" />
```

<br/>

```ts{6-10}
import { ZoomPanner } from '@screaming/utils'

const zpSlider = document.querySelector('#zp-slider') as HTMLInputElement

const zp = new ZoomPanner('#zp-container', {
  onZoom: (instance) => {
    // if zoomed by some other means, ensure input slider stays in sync
    const scale = instance.getScale().toString()
    zpSlider.value = scale
  }
})

zpSlider.addEventListener('input', (e) => {
  const el = e.target as HTMLInputElement
  const newScale = el.value

  zpSlider.zoom(newScale)
})
```

:::

## Type Definitions

```ts
interface FocalPoint {
  x: number
  y: number
}

interface ZoomPannerOptions {
  maxScale?: number
  step?: number
  duration?: number
  onPan?: (z: ZoomPanner) => void
  onZoom?: (z: ZoomPanner) => void
}

export declare class ZoomPanner {
  /**
   * @param container - The image-containing element's selector.
   * @param options - Class options.
   * @param options.maxScale - The maximum scaling factor.
   * @param options.step - The difference in scale per zoom in/out.
   * @param options.duration - The duration of animations, if animating.
   * @param options.onPan - The callback to run when the image is panned.
   * @param options.onZoom - The callback to run when the image is zoomed.
   */
  constructor(container: string, { maxScale, step, duration, onPan, onZoom }?: ZoomPannerOptions)

  /**
   * Gets the current scaling factor.
   *
   * @returns The scaling factor.
   */
  getScale(): number

  /**
   * Zooms the image to the given scale.
   *
   * @param toScale - The scale to zoom to.
   * @param options - Method options.
   * @param options.shouldAnimate - Whether to animate the zoom.
   * @param options.focal - The point to focus the zoom around.
   */
  zoom(
    toScale: number,
    {
      shouldAnimate,
      focal
    }?: {
      shouldAnimate?: boolean
      focal?: FocalPoint | null
    }
  ): void

  /**
   * Zooms in to the image.
   *
   * @param options - Method options.
   * @param options.step - The difference in scale per zoom in.
   * @param options.shouldAnimate - Whether to animate the zoom.
   */
  zoomIn({ step, shouldAnimate }?: { step?: number; shouldAnimate?: boolean }): void

  /**
   * Zooms out from the image.
   *
   * @param options - Method options.
   * @param options.step - The difference in scale per zoom out.
   * @param options.shouldAnimate - Whether to animate the zoom.
   */
  zoomOut({ step, shouldAnimate }?: { step?: number; shouldAnimate?: boolean }): void

  /**
   * Pans the image to the given coordinates.
   *
   * @param toX - The x coordinate to pan to.
   * @param toY - The y coordinate to pan to.
   * @param shouldAnimate - Whether to animate the pan.
   */
  pan(toX: number, toY: number, shouldAnimate?: boolean): void
}
```

# createElement

> A functional interface for creating HTML elements.

## Usage

```ts
import { createElement } from '@screaming/utils'

const list = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'list-item' }, 'item #1'),
  createElement('li', { class: 'list-item' }, 'item #2'),
  createElement('li', { class: 'list-item' }, 'item #3')
])
```

```html
<!-- output -->
<ul class="list">
  <li class="list-item">item #1</li>
  <li class="list-item">item #2</li>
  <li class="list-item">item #3</li>
</ul>
```

:::tip
Due to the length of `createElement`'s name, there is a [common convention](https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/6#issuecomment-232994673) to alias it to `h`.

```ts
import { createElement as h } from '@screaming/utils'
```

:::

## Type Definitions

```ts
/**
 * @param tag - The HTML element tag.
 * @param props - The attributes and events to add to the element.
 * @param children - The children to add to the element.
 * @returns The created HTML element.
 */
export declare function createElement(
  tag: string,
  props: Obj<any> | null = null,
  ...children: (string | HTMLElement)[]
): HTMLElement
```

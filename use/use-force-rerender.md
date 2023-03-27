# useForceRerender

> change a ref to false and then back to true to force a component (using the ref in an if statement) to rerender

## Usage

```ts
import { useForceRerender } from '@screaming/use'
const renderComponent = ref(true) //should be set to true by default
useForceRerender(renderComponent)
```

## Behaviour

`useForceRerender` changes a variable to false and then back to true to force a rerender of a component with that variable set to an if statement. This, for example, could be useful if `<Table/>` or `<MiniTable />` need to be forced to accept a new datapoint or some other data change etc.

`useForceRerender` will likely be used most when transitioning between layouts for different screensizes, although it is not limited to that. To do this, the following with `useBreakpointObserver` (to monitor screensize changes) could be done:

```vue
<script>
import { useForceRerender, useBreakpointObserver } from '@screaming/use'
//an example when used with useBreakpointObserver callback function
const container = ref(null) // to be set via ref="component" on vue component
const mobileMode = ref(false) // if under 600px
const renderComponent = ref(true) //should be set to true by default

useBreakpointObserver(container, [600], (width, bp) => {
  const under600 = width <= 600
  //if changing from mobileMode to DesktopMode, or vice versa, forceRerender
  if (mobileMode.value !== under600) {
    useForceRerender(renderComponent)
  }
  mobileMode.value = under600
})
</script>
<template>
  <div ref="container">
    <component v-if="renderComponent" />
  </div>
</template>
```

## Type Definitions

::: details Show Type Definitions

```ts
/**
 * @param ref - the ref to be changed to false and then back to true.
 */
```

:::

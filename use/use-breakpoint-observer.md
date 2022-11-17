# useBreakpointObserver

> Creates respective `sf-under-{BP}` / `sf-over-{BP}` classes based on an element's width and breakpoint thresholds.

## Usage

```vue
<script setup lang="ts">
import { useBreakpointObserver } from '@screaming/use'

// without callback
const divRef = ref(null)
const classNames = useBreakpointObserver(divRef, [640, 768, 1024, 1280])

// with callback
const divRef = ref(null)
const classNames = useBreakpointObserver(divRef, [640, 768, 1024, 1280], (width, bp) => {
  // width: divRef's width
  // bp: the highest breakpoint under the divRef's width
})
</script>

<template>
  <div ref="divRef" :class="classNames">...</div>
</template>
```

## Behaviour

`useBreakpointObserver` is primarily intended to be used for the root container of a project that is designed to be inlined into an existing content piece. It provides a simple API for monitoring the size of the app container. This allows for more control over when the app should be in mobile mode - for example - as it will then be determined by the width of the container and not the window. This is useful for when the project is uploaded on the client's site, since you can't know breakpoints of the window need to be observed. We can, rather, monitor just the width of our application and adjust accordingly.

For example:

```vue
<!-- App.vue -->
<script setup lang="ts">
import { useBreakpointObserver } from '@screaming/use'

const divRef = ref(null)
const isMobileMode = ref(false)

const classNames = useBreakpointObserver(divRef, [400, 700], (width, bp) => {
  isMobileMode.value = bp > 400
})
</script>

<template>
  <div ref="divRef" :class="classNames">
    <MobileComponent v-if="isMobileMode" />
    <DesktopComponent v-else />
  </div>
</template>
```

## Type Definitions

::: details Show Type Definitions

```ts
/**
 * @param el - The element.
 * @param breakpoints - The breakpoint thresholds.
 * @param cb - The callback to run whenever a resize is detected.
 */
export declare function useBreakpointObserver(
  el: Ref<HTMLElement | null>,
  breakpoints: number[],
  cb?: (w: number, bp: number) => void
): Ref<string>
```

:::

# useToggle

> Toggles a reactive boolean value with optional callback.

## Usage

```ts
import { useToggle } from '@screaming/use'

// basic usage
const { value, toggle: toggleValue } = useToggle(true)

// runs a callback with updated `value`
const { value, toggle: toggleValue } = useToggle(true, (newValue) => {
  /* ... */
})
```

## Behaviour

`useToggle` is primarily intended to be used for toggling the visibility of a modal, with the callback enabling/disabling page scrolling.

For example:

```vue
<script setup lang="ts">
import { useToggle } from '@screaming/use'

const { value: modalOpen, toggle: toggleModalOpen } = useToggle(false, (isOpen) => {
  document.body.style.overflowY = isOpen ? 'hidden' : ''
})
</script>

<template>
  <MethodologyModal v-show="modalOpen" @close="toggleModalOpen" />
</template>
```

## Type Definitions

```ts
/**
 * @param init - The reactive value's initial value.
 * @param cb - The callback to run when the value changes.
 * @returns Object with the current value and toggle function.
 */
export declare function useToggle(
  init?: boolean,
  cb?: (b?: boolean) => void
): {
  value: Ref<boolean>
  toggle: () => void
}
```

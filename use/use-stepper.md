# useStepper

> Steps between two numbers via optional interval.

## Usage

```ts
import { useStepper } from '@screaming/use'

// step `value` between 10 and 50, in increments of 10
const { value, step } = useStepper({ min: 10, max: 50, step: 10 })

// toggle `value` between 10 and 50
const { value, step } = useStepper({ min: 10, max: 50 })
```

## Behaviour

`useStepper` is primarily intended to be used when expanding the amount of rows visible in a `<Table />` or `<MiniTable />`. A `computed` property can be used to change the text on the element which calls the stepping function.

For example:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { Table, ... } from '@screaming/table'
import { useStepper } from '@screaming/use'
import data from '~/assets/data.json'

/* table configuration omitted for brevity */

const MIN_LENGTH = 10
const { value: tableLength, step } = useStepper({ min: MIN_LENGTH, max: data.length })

const buttonText = computed(() => (tableLength.value === MIN_LENGTH ? 'Show more' : 'Show less'))
</script>

<template>
  <Table :data="..." :columns="..." :config="..." :classes="..." :length="tableLength" />

  <button @click="step">{{ buttonText }}</button>
</template>
```

## Type Definitions

```ts
interface UseStepperOptions {
  min: number
  max: number
  step?: number
}

/**
 * @param options - Function options.
 * @param options.min - The stepper's minimum value.
 * @param options.max - The stepper's maximum value.
 * @param options.step - The stepper's step size.
 * @returns Object with the current value and step function.
 */
export declare function useStepper({ min, max, step: stepSize = 0 }: UseStepperOptions): {
  current: Ref<number>
  step: () => void
}
```

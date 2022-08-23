# useStepper

> Steps between two numbers via optional interval.

## Usage

```ts
import { useStepper } from '@screaming/use'

// step `currentStep` between 10 and 50, in increments of 10
const [currentStep, step] = useStepper({ min: 10, max: 50, step: 10 })

// toggle `currentStep` between 10 and 50
const [currentStep, step] = useStepper({ min: 10, max: 50 })
```

## Behaviour

`useStepper` is primarily intended to be used when expanding the amount of rows visible in a `<Table />` or `<MiniTable />`. A `computed` property can be used to change the text on the element which calls the stepping function.

For example:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useStepper } from '@screaming/use'
import data from '~/assets/data.json'

const MIN = 10
const [current, step] = useStepper({ min: MIN, max: data.length })

const buttonText = computed(() => (current.value === MIN ? 'Show more' : 'Show less'))
</script>

<template>
  <!-- ... -->
  <button @click="step">{{ buttonText }}</button>
  <!-- ... -->
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
 * Steps between two numbers via optional interval.
 *
 * @param options - Function options.
 * @param options.min - The stepper's minimum value.
 * @param options.max - The stepper's maximum value.
 * @param options.step - The stepper's step size.
 * @returns Tuple of the current value and step function.
 */
export declare function useStepper({
  min,
  max,
  step: stepSize = 0
}: UseStepperOptions): [Ref<number>, () => void]
```

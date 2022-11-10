# Toggling Length

Some tables can feature 100+ rows. Displaying all of them at once can lead to a lot of unwanted scrolling - especially if only the top 10 rows are the most important. To guide will discuss how to use the `length` prop and the [`useStepper`](../../use/use-stepper.md) composable to create a button which will toggle the rows displayed by a table between two amounts, or incrementally add `n` rows to the table each time it's clicked.

:::tip
Whilst the examples below use the `<Table />` component, the process is identical for the `<MiniTable />` component.
:::

## Toggle Between Two Amounts of Rows

The most common use-case for the aforementioned `length` prop and the [`useStepper`](../../use/use-stepper.md) composable is to toggle the amount of rows a table displays between two values. This allows for the most important rows to be displayed neatly whilst providing an easy method to view the entire dataset.

### Example

```vue{3,10-11,13-16,18-20,29,32-34}
<script setup lang="ts">
import { Table, createClasses, createColumn, createConfig } from '@screaming/tables'
import { useStepper } from '@screaming/use'
import data from '~/assets/data.json'

const classes = createClasses({ ... })
const config = createConfig({ ... })
const columns = [...]

const MIN_LENGTH = 10
const MAX_LENGTH = data.length

const { value: tableLength, step: toggleLength } = useStepper({
  min: MIN_LENGTH,
  max: MAX_LENGTH
})

const buttonText = computed(() => {
  return tableLength.value === MIN_LENGTH ? 'View All' : 'View Top 10'
})
</script>

<template>
  <Table
    :data="data"
    :classes="classes"
    :config="config"
    :columns="columns"
    :length="tableLength"
  />

  <button @click="toggleLength">
    {{ buttonText }}
  </button>
</template>
```

### Explanation

- **Line 3**: Import the `useStepper` composable.

- **Lines 10-11**: Define the min/max table lengths.

- **Lines 13-16**: Obtain reactive length variable `value` (renamed to `tableLength`) and toggle function `step` (renamed to `toggleLength`) from `useStepper`.

- **Lines 18-20**: Declare reactive variable `buttonText` which will display appropriate text in the `<button>` which toggles the table's length.

- **Line 29**: Pass the reactive length variable to the `<Table />` via the `length` prop.

- **Lines 32-34**: Register the toggle function `toggleLength` to the `<button>`'s `click` event listener.

## Add Rows Incrementally

Sometimes, when the entire dataset is required for comprehension, it is favourable to display some rows and incrementally add more rows for easier data digestion. This can also be achieved via the aforementioned `length` prop and the [`useStepper`](../../use/use-stepper.md) composable.

### Example

```vue{3,10-11,13-17,19-21,30,33-35}
<script setup lang="ts">
import { Table, createClasses, createColumn, createConfig } from '@screaming/tables'
import { useStepper } from '@screaming/use'
import data from '~/assets/data.json'

const classes = createClasses({ ... })
const config = createConfig({ ... })
const columns = [...]

const MIN_LENGTH = 10
const MAX_LENGTH = data.length

const { value: tableLength, step: toggleLength } = useStepper({
  min: MIN_LENGTH,
  max: MAX_LENGTH,
  step: 10
})

const buttonText = computed(() => {
  return tableLength.value === MAX_LENGTH ? 'View Top 10' : 'View 10 More Rows'
})
</script>

<template>
  <Table
    :data="data"
    :classes="classes"
    :config="config"
    :columns="columns"
    :length="tableLength"
  />

  <button @click="toggleLength">
    {{ buttonText }}
  </button>
</template>
```

### Explanation

- **Line 3**: Import the `useStepper` composable.

- **Lines 10-11**: Define the min/max table lengths.

- **Lines 13-17**: Obtain reactive length variable `value` (renamed to `tableLength`) and toggle function `step` (renamed to `toggleLength`) from `useStepper`.

- **Lines 19-21**: Declare reactive variable `buttonText` which will display appropriate text in the `<button>` which changes the table's length.

- **Line 30**: Pass the reactive length variable to the `<Table />` via the `length` prop.

- **Lines 33-35**: Register the toggle function `toggleLength` to the `<button>`'s `click` event listener.

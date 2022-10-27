# &lt;MiniTable /&gt;

> Rankable, sortable, and filterable table.

:::tip
`<MiniTable />`s are designed to be used in conjunction with dropdown menus, which should be connected to the `visible-keys` prop.

If you require multiple columns to be switched out at a time, please see the [multiple temporary columns](./mini-table.md#multiple-temporary-columns) below.
:::

## Usage

```vue
<script setup lang="ts">
import { MiniTable } from '@screaming/tables'
</script>

<template>
  <MiniTable />
</template>
```

## Full Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  MiniTable,
  createClasses,
  createColumn,
  createConfig
} from '@screaming/tables'
import data from '~/assets/data.json'

const classes = createClasses({ ... })

const config = createConfig({ ... })

const columns = [
  createColumn('...', { ... }),
  createColumn('...', { ... }),
  createColumn('...', { ... })
]

const dropdownItems = [ ... ]
const visibleKeys = [ref(dropdownItems[0])]
</script>

<template>
  <!-- dropdown menu -->
  <select v-model="visibleKey">
    <option v-for="item in dropdownItems" :value="item">
      {{ item }}
    </option>
  </select>

  <!-- table -->
  <MiniTable
    :data="data"
    :columns="columns"
    :config="config"
    :visible-keys="visibleKeys"
    :classes="classes"
  />
</template>
```

## Multiple Temporary Columns

The below example demonstrates an uncommon scenario whereby selecting a value in a dropdown changes multiple table columns at once.

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  MiniTable,
  createClasses,
  createColumn,
  createConfig
} from '@screaming/tables'
import data from '~/assets/data.json'

const classes = createClasses({ ... })

const config = createConfig({ ... })

const columns = [
  createColumn('...', { ... }),
  createColumn('...', { ... }),
  createColumn('...', { ... })
]

const dropdownItems = ['good', 'bad']
const currentDropdownItem = ref(dropdownItems[0])

const visibleKeys = computed(() => {
  if (currentDropdownItem.value === 'good') {
    return ['good_scores_2021', 'good_scores_2022']
  }

  return ['bad_scores_2021', 'bad_scores_2022']
})
</script>

<template>
  <!-- dropdown menu -->
  <select v-model="currentDropdownItem">
    <option v-for="item in dropdownItems" :value="item">
      {{ item }}
    </option>
  </select>

  <!-- table -->
  <MiniTable
    :data="data"
    :columns="columns"
    :config="config"
    :visible-keys="visibleKeys"
    :classes="classes"
  />
</template>
```

## Props

| Name          | Type              | Default       | Description                                     |
| ------------- | ----------------- | ------------- | ----------------------------------------------- |
| `data`        | `array`           |               | The data to display in the table.               |
| `columns`     | `array`           |               | The table's column definitions.                 |
| `config`      | `object`          |               | The table's configuration.                      |
| `visibleKeys` | `string[]`        |               | The currently selected non-permanent column(s). |
| `classes`     | `object`          | `{}`          | Class definitions for the table's elements.     |
| `headless`    | `boolean`         | `false`       | Whether or not to display the `<thead>`.        |
| `length`      | `number`          | `data.length` | How many rows to display in the table.          |
| `filter`      | `[string,string]` | `[]`          | Key-value pairing for filtering table data.     |

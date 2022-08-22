# &lt;MiniTable /&gt;

> Rankable, sortable, and filterable table.

:::tip
`<MiniTable />`s are designed to be used in conjunction with dropdown menus, which should be connected to the `visible-key` prop. See the [Full Example](./component.md#full-example) for a demonstration.
:::

## Usage

```vue
<script setup lang="ts">
import { MiniTable } from '@screaming/tables/mini'
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
  defineClasses,
  defineColumn,
  defineConfig
} from '@screaming/tables/mini'
import data from '~/assets/data.json'

const classes = defineClasses({ ... })

const config = defineConfig({ ... })

const columns = [
  defineColumn('...', { ... }),
  defineColumn('...', { ... }),
  defineColumn('...', { ... })
]

const dropdownItems = [ ... ]
const visibleKey = ref(dropdownItems[0])
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
    :visible-key="visibleKey"
    :classes="classes"
  />
</template>
```

## Props

| Name         | Type              | Default       | Description                                  |
| ------------ | ----------------- | ------------- | -------------------------------------------- |
| `data`       | `array`           |               | The data to display in the table.            |
| `columns`    | `array`           |               | The table's column definitions.              |
| `config`     | `object`          |               | The table's configuration.                   |
| `visibleKey` | `string`          |               | The currently selected non-permanent column. |
| `classes`    | `object`          | `{}`          | Class definitions for the table's elements.  |
| `headless`   | `boolean`         | `false`       | Whether or not to display the `<thead>`.     |
| `length`     | `number`          | `data.length` | How many rows to display in the table.       |
| `filter`     | `[string,string]` | `[]`          | Key-value pairing for filtering table data.  |

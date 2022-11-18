# &lt;MiniTable /&gt;

> Rankable, sortable, and filterable table that display just a handful of columns at a time to fit on mobile devices.

:::tip
`<MiniTable />`s are designed to be used in conjunction with dropdown menus, which should be connected to the `visible-keys` prop. Please refer to [Linking Dropdown to Table](../examples/linking-dropdown-to-table.md) for more information.
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

## Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { MiniTable, createClasses, createColumn, createConfig } from '@screaming/tables'
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

## Props

| Name          | Type              | Default       | Description                                     |
| ------------- | ----------------- | ------------- | ----------------------------------------------- |
| `data`        | `array`           |               | The data to display in the table.               |
| `columns`     | `array`           |               | The table's column definitions.                 |
| `config`      | `object`          |               | The table's configuration.                      |
| `visibleKeys` | `string[]`        |               | The currently selected non-permanent column(s). |
| `classes`     | `object`          | `{}`          | Class definitions for the table's elements.     |
| `headless`    | `boolean`         | `false`       | Whether or not to render the `<thead>`.         |
| `length`      | `number`          | `data.length` | How many rows to display in the table.          |
| `filter`      | `[string,string]` | `[]`          | Key-value pairing for filtering table data.     |

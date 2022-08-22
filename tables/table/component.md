# &lt;Table /&gt;

> Rankable, sortable, and filterable table.

## Usage

```vue
<script setup lang="ts">
import { Table } from '@screaming/tables'
</script>

<template>
  <Table />
</template>
```

## Full Example

```vue
<script setup lang="ts">
import {
  Table,
  defineClasses,
  defineColumn,
  defineConfig
} from '@screaming/tables'
import data from '~/assets/data.json'

const classes = defineClasses({ ... })

const config = defineConfig({ ... })

const columns = [
  defineColumn('...', { ... }),
  defineColumn('...', { ... }),
  defineColumn('...', { ... })
]
</script>

<template>
  <Table :data="data" :columns="columns" :config="config" :classes="classes" />
</template>
```

## Props

| Name       | Type              | Default       | Description                                 |
| ---------- | ----------------- | ------------- | ------------------------------------------- |
| `data`     | `array`           |               | The data to display in the table.           |
| `columns`  | `array`           |               | The table's column definitions.             |
| `config`   | `object`          |               | The table's configuration.                  |
| `classes`  | `object`          | `{}`          | Class definitions for the table's elements. |
| `headless` | `boolean`         | `false`       | Whether or not to display the `<thead>`.    |
| `length`   | `number`          | `data.length` | How many rows to display in the table.      |
| `filter`   | `[string,string]` | `[]`          | Key-value pairing for filtering table data. |

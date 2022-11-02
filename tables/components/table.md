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

## Example

```vue
<script setup lang="ts">
import { Table, createClasses, createColumn, createConfig } from '@screaming/tables'
import data from '~/assets/data.json'

const classes = createClasses({ ... })

const config = createConfig({ ... })

const columns = [
  createColumn('...', { ... }),
  createColumn('...', { ... }),
  createColumn('...', { ... })
]
</script>

<template>
  <Table :data="data" :columns="columns" :config="config" :classes="classes" init-key="..." />
</template>
```

## Props

| Name       | Type              | Default       | Description                                 |
| ---------- | ----------------- | ------------- | ------------------------------------------- |
| `data`     | `array`           |               | The data to display in the table.           |
| `columns`  | `array`           |               | The table's column definitions.             |
| `config`   | `object`          |               | The table's configuration.                  |
| `initKey`  | `string`          |               | The initial key to rank the data by.        |
| `classes`  | `object`          | `{}`          | Class definitions for the table's elements. |
| `headless` | `boolean`         | `false`       | Whether or not to render the `<thead>`.     |
| `length`   | `number`          | `data.length` | How many rows to display in the table.      |
| `filter`   | `[string,string]` | `[]`          | Key-value pairing for filtering table data. |

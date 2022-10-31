# Filtering Data

It can sometimes be necessary to filter the data displayed in a table (e.g. data points from a specific country in a data set containing multiple countries). This is easily achieved via the `filter` prop which is available on both `<Table />` and `<MiniTable />` components.

:::tip
When values not matching the filter criteria are removed, they are removed from the DOM. This **does not** modify the ranks of values which match the filter criteria.
:::

## Example

```vue{9-10,14,21}
<script setup>
import { Table, createClasses, createColumn, createConfig } from '@screaming/tables'
import data from '~/assets/data.json'

const classes = createClasses( ... )
const columns = [ ... ]
const config = createConfig({ ... })

const filterKey = ''
const filterValue = ref('')
</script>

<template>
  <input v-model="filterValue" type="text" />

  <Table
    :data="data"
    :classes="classes"
    :columns="columns"
    :config="config"
    :filter="[filterKey, filterValue]"
    init-key="..."
  />
</template>
```

# @row-click

The `@row-click` event is triggered whenever a user clicks on a `<tr>` inside of a `<Table />` or `<MiniTable />`'s `<tbody>`. It provides the data associated with that row as the first argument.

## Example

:::tip
The example below uses the `$event` keyword, provided by Vue. You can learn more about it [here](https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers).
:::

```vue{15,25}
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

const selectedRow = ref(null)
</script>

<template>
  <Table
    :data="data"
    :columns="columns"
    :config="config"
    :classes="classes"
    init-key="..."
    @row-click="selectedRow = $event"
  />
</template>
```

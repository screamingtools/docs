# @header-click

The `@header-click` event is triggered whenever a user clicks on a `<th>` inside of a `<Table />` or `<MiniTable />`'s `<thead>`. It is triggered **alongside the table's sorting behaviour**. It provides its column's key as the first argument.

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

function handleHeaderClick(key: string) {
  // ...
}
</script>

<template>
  <Table
    :data="data"
    :columns="columns"
    :config="config"
    :classes="classes"
    init-key="..."
    @header-click="handleHeaderClick"
  />
</template>
```

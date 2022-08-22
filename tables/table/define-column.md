# defineColumn

> Defines a column for a `<Table>`.

## Usage

```vue
<script setup lang="ts">
import { Table, defineColumn } from '@screaming/tables'

const columns = [
  defineColumn('rank', { title: '#', rankable: false }),
  defineColumn('city', { title: 'City', sortable: false, width: 2 }),
  defineColumn('country', { title: 'Country', sortable: false, width: 2 }),
  ...
]
</script>

<template>
  <!-- other props omitted for brevity -->
  <Table :columns="columns" />
</template>
```

## Type Definitions

```ts
interface DefineColumnOptions {
  title: string
  width?: number
  sortOrder?: 'asc' | 'desc'
  sortable?: boolean
  rankable?: boolean
  format?: (value: any, h?: typeof _h) => VNode | string
}

/**
 * @param key - The column's key.
 * @param options - Function options.
 * @param options.title - The column's <th> content.
 * @param options.width - The column's width with respect to neighbouring columns.
 * @param options.sortOrder - The column's sorting order.
 * @param options.sortable - If the column can be sorted.
 * @param options.rankable - If the column can be ranked (requires options.sortable: true).
 * @param options.format - Formatting function for the column's cell values.
 */
export declare function defineColumn(key: string, options: DefineColumnOptions): Column
```

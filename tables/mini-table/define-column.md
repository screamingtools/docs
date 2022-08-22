# defineColumn

> Defines a column for a `<MiniTable>`.

## Usage

```vue
<script setup lang="ts">
import { MiniTable, defineColumn } from '@screaming/tables/mini'

const columns = [
  defineColumn('rank', { title: '#', rankable: false, permanent: true }),
  defineColumn('city', { title: 'City', sortable: false, width: 2, permanent: true }),
  defineColumn('country', { title: 'Country', sortable: false, width: 2, permanent: true }),
  ...
]
</script>

<template>
  <!-- other props omitted for brevity -->
  <MiniTable :columns="columns" />
</template>
```

## Type Definitions

```ts
interface MiniColumn {
  key: string
  title: string
  width: number
  sortOrder: 'asc' | 'desc'
  permanent: boolean
  sortable: boolean
  rankable: boolean
  format: (value: any, h: typeof _h) => VNode | string
}

interface DefineColumnOptions {
  title: string
  width?: number
  sortOrder?: 'asc' | 'desc'
  permanent?: boolean
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
 * @param options.permanent - If a column should always be visible.
 * @param options.sortable - If the column can be sorted.
 * @param options.rankable - If the column can be ranked (requires options.sortable: true).
 * @param options.format - Formatting function for the column's cell values.
 */
export declare function defineColumn(key: string, options: DefineColumnOptions): MiniColumn
```

# createColumn

> Creates a column object for a `<Table>` or `<MiniTable>`.

## Usage

```vue
<script setup lang="ts">
import { Table, createColumn } from '@screaming/tables'

const columns = [
  createColumn('key', { ... }),
  createColumn('key', { ... }),
  createColumn('key', { ... }),
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
import { h as _h, type VNode } from 'vue'

interface Column {
  key: string
  width: number
  sortOrder: 'asc' | 'desc'
  permanent?: boolean
  sortable: boolean
  rankable: boolean
  createTitle: (h: typeof _h) => VNode
  format: (value: any, h: typeof _h) => VNode | string
}

interface CreateColumnOptions {
  title?: string | ((h?: typeof _h) => VNode)
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
export declare function createColumn(key: string, options?: CreateColumnOptions): Column
```

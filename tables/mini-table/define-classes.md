# defineClasses

> Intellisense helper for `<MiniTable>` classes.

## Usage

```vue
<script setup lang="ts">
import { MiniTable, defineClasses } from '@screaming/tables/mini'

const classes = defineClasses({
  table: '...',
  head: { ... },
  body: { ... },
  indicator: '...'
})
</script>

<template>
  <!-- other props omitted for brevity -->
  <MiniTable :classes="classes" />
</template>
```

## Type Definitions

```ts
interface Classes {
  table?: string
  head?: {
    thead?: string
    tr?: string
    th?: string
    thSorted?: string
    thRanked?: string
  }
  body?: {
    tbody?: string
    tr?: string
    td?: string
    tdSorted?: string
    tdRanked?: string
  }
  indicator?: string
}

/**
 * @param classes - The classes
 * @returns The classes
 */
export declare function defineClasses(classes: Classes): Classes
```

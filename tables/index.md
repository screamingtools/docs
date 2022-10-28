# @screaming/tables

## Introduction

**@screaming/tables** provides two [Vue 3](https://vuejs.org/) components, `<Table />` and `<MiniTable />`, which facilitate creating tables with ranking, sorting, and filtering functionality.

[View source code.](https://github.com/sf-designdev-packages/tables)

:::tip
**@screaming/tables** comes pre-installed in all [@screaming/froggo](../froggo/index.md) projects.
:::

## Installation

Install with your favourite package manager:

```sh
# yarn
yarn add @screaming/tables

# pnpm
pnpm add @screaming/tables

# npm
npm install @screaming/tables
```

Import as required:

```vue
<!-- defineComponent -->
<script lang="ts">
import { defineComponent } from 'vue'
import { Table, MiniTable } from '@screaming/tables'

export default defineComponent({
  components: { Table, MiniTable }
})
</script>

<template>
  <Table ... />
  <MiniTable ... />
</template>
```

```vue
<!-- script setup -->
<script setup lang="ts">
import { Table, MiniTable } from '@screaming/tables'
</script>

<template>
  <Table ... />
  <MiniTable ... />
</template>
```

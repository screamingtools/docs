# createConfig

> Creates a configuration object for a `<Table>` or `<MiniTable>`.

## Usage

```vue
<script setup lang="ts">
import { Table, createConfig } from '@screaming/tables'

const config = createConfig({
  backups: { DEFAULT: ... },
  semantic: ...,
  tieRanks: ...,
  ignore: [...]
})
</script>

<template>
  <!-- other props omitted for brevity -->
  <Table :config="config" />
</template>
```

## Type Definitions

```ts
interface Backups {
  DEFAULT: string
  [key: string]: string
}

interface Config {
  backups: Backups
  semantic: boolean
  tieRanks: boolean
  ignore: (string | number | boolean)[]
}

interface CreateConfigOptions {
  backups: Backups
  semantic?: boolean
  tieRanks?: boolean
  ignore?: (string | number | boolean)[]
}

/**
 * @param options - Function options.
 * @param options.backups - Mapping of keys to which keys they use to resolve tied data.
 * @param options.semantic - If the HTML elements should be table elements or not
 * @param options.tieRanks - If ranks should be tied.
 * @param options.ignore - The values to ignore.
 */
export declare function createConfig(options: CreateConfigOptions): Config
```

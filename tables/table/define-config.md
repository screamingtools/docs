# defineConfig

> Defines a configuration object for a `<Table>`.

## Usage

```vue
<script setup lang="ts">
import { Table, defineConfig } from '@screaming/tables'

const config = defineConfig({
  backups: { DEFAULT: '...' },
  initKey: '...',
  tieRanks: true,
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
  initKey: string
  tieRanks: boolean
  ignore: (string | number | boolean)[]
}

interface DefineConfigOptions {
  backups: Backups
  initKey: string
  tieRanks?: boolean
  ignore?: (string | number | boolean)[]
}

/**
 * @param options - Function options.
 * @param options.initKey - The initial key to rank the data by.
 * @param options.backups - Mapping of keys to which keys they use to resolve tied data.
 * @param options.tieRanks - If ranks should be tied.
 * @param options.ignore - The values to ignore.
 */
export declare function defineConfig(options: DefineConfigOptions): Config
```

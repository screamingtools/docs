# defineConfig

> Defines a configuration object for a `<MiniTable>`.

## Usage

```vue
<script setup lang="ts">
import { MiniTable, defineConfig } from '@screaming/tables/mini'

const config = defineConfig({
  backups: { DEFAULT: '...' },
  tieRanks: true,
  ignore: [...]
})
</script>

<template>
  <!-- other props omitted for brevity -->
  <MiniTable :config="config" />
</template>
```

## Type Definitions

```ts
interface Backups {
  DEFAULT: string
  [key: string]: string
}

interface MiniConfig {
  backups: Backups
  tieRanks: boolean
  ignore: (string | number | boolean)[]
}

interface DefineConfigOptions {
  backups: Backups
  tieRanks?: boolean
  ignore?: (string | number | boolean)[]
}

/**
 * @param options - Function options.
 * @param options.backups - Mapping of keys to which keys they use to resolve tied data.
 * @param options.tieRanks - If ranks should be tied.
 * @param options.ignore - The values to ignore.
 */
export declare function defineConfig(options: DefineConfigOptions): MiniConfig
```

# @screaming/use

## Introduction

**@screaming/use** is a collection of bespoke [Vue 3](https://vuejs.org/) composables.

[View source code.](https://github.com/sf-designdev-packages/use)

:::warning
**@screaming/use**'s composables must be used inside a component's [`setup`](https://vuejs.org/api/composition-api-setup.html) function, or inside components defined using [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html#script-setup).
:::

## Installation

:::tip
**@screaming/use** comes pre-installed in all [@screaming/froggo](../froggo/index.md) projects.
:::

Install with your favourite package manager:

```sh
# yarn
yarn add @screaming/use

# pnpm
pnpm add @screaming/use

# npm
npm install @screaming/use
```

Import as required:

```vue
<!-- script setup (recommended) -->
<script setup lang="ts">
import { ... } from '@screaming/use'

// ...
</script>
```

```vue
<!-- defineComponent -->
<script lang="ts">
import { defineComponent } from 'vue'
import { ... } from '@screaming/use'

export default defineComponent({
  setup() {
    // ...
  }
})
</script>
```

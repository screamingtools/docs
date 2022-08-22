# @screaming/share

## Introduction

**@screaming/share** provides a single [Vue 3](https://vuejs.org/) component, `<ShareButton />`, which easily facilitates creating social share buttons.

[View source code.](https://github.com/screamingtools/share)

:::tip
**@screaming/share** comes pre-installed in all [@screaming/froggo](../froggo/index.md) projects.
:::

## Installation

Install with your favourite package manager:

```sh
# yarn
yarn add @screaming/share

# pnpm
pnpm add @screaming/share

# npm
npm install @screaming/share
```

Import as required:

```vue
<!-- setup  -->
<script lang="ts">
import { defineComponent } from 'vue'
import { ShareButton } from '@screaming/share'

export default defineComponent({
  components: { ShareButton }
})
</script>

<template>
  <ShareButton platform="...">...</ShareButton>
</template>
```

```vue
<!-- script setup -->
<script setup lang="ts">
import { ShareButton } from '@screaming/share'
</script>

<template>
  <ShareButton platform="...">...</ShareButton>
</template>
```

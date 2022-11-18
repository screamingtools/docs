# @screaming/share

## Introduction

**@screaming/share** provides a single [Vue 3](https://vuejs.org/) component, `<ShareLink />`, which easily facilitates creating social share links.

[View source code.](https://github.com/sf-designdev-packages/share)


## Installation

:::tip
**@screaming/share** comes pre-installed in all [@screaming/froggo](../froggo/index.md) projects.
:::

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
<!-- script setup (recommended) -->
<script setup lang="ts">
import { ShareLink } from '@screaming/share'
</script>

<template>
  <ShareLink to="...">...</ShareLink>
</template>
```

```vue
<!-- using defineComponent (old school vue)  -->
<script lang="ts">
import { defineComponent } from 'vue'
import { ShareLink } from '@screaming/share'

export default defineComponent({
  components: { ShareLink }
})
</script>

<template>
  <ShareLink to="...">...</ShareLink>
</template>
```

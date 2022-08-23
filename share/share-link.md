# &lt;ShareLink /&gt;

## Usage

```vue
<script setup lang="ts">
import { ShareLink } from '@screaming/share'
</script>

<template>
  <ShareLink to="twitter">...</ShareLink>
  <ShareLink to="linkedin">...</ShareLink>
  <ShareLink to="facebook">...</ShareLink>
</template>
```

## Props

| Name | Type     | Default | Description                                                                           |
| ---- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `to` | `string` |         | The platform the button should share to (`"twitter"`, `"linkedin"`, or `"facebook"`). |

# &lt;ShareButton /&gt;

## Usage

```vue
<script setup lang="ts">
import { ShareButton } from '@screaming/share'
</script>

<template>
  <ShareButton platform="twitter" class="..." svg-class="..." />
  <ShareButton platform="linkedin" class="..." svg-class="..." />
  <ShareButton platform="facebook" class="..." svg-class="..." />
</template>
```

## Props

| Name       | Type     | Default | Description                                                                           |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `platform` | `string` |         | The platform the button should share to (`"twitter"`, `"linkedin"`, or `"facebook"`). |
| `svgClass` | `string` | `''`    | The class to apply to the inner SVG icon.                                             |

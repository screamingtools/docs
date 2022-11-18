# Example Output

The following example displays the rendered HTML when using a `<ShareLink />` with metadata in the page's `<head>`.

:::tip
Please note that any `<a>`s created via `<ShareLink />`s will not have an `href` set in the statically-rendered HTML output (`index.html` or `inline.html`). This is a result of [vite-ssg](https://github.com/antfu/vite-ssg) producing the output HTML prior to any `onMounted` hooks being called.

Rest assured, the `href`s will be correctly set when the website is hosted and loaded.
:::

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- links -->
    <link rel="canonical" href="https://example.com" />
    <meta property="og:url" content="https://example.com" />
    <meta name="image" property="og:image" content="https://example.com/social-image.png" />
    <meta
      name="image"
      property="og:image:secure_url"
      content="https://example.com/social-image.png"
    />

    <!-- general -->
    <title>Example Site</title>
    <meta property="og:title" content="Example Site" />
    <meta name="description" content="This website doesn't actually exist!" />
    <meta property="og:description" content="This website doesn't actually exist!" />
    <meta property="og:type" content="article" />

    <!-- twitter meta -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@ExampleHandle" />
    <meta name="twitter:creator" content="@ExampleHandle" />
  </head>

  <body>
    <div id="sf-app"></div>
  </body>
</html>
```

## Vue component

```vue
<!-- src/components/Foo.vue -->
<script setup lang="ts">
import { ShareLink } from '@screaming/share'
import twitterSVG from '~/assets/svg/twitter.svg'
</script>

<template>
  ...
  <ShareLink to="twitter">
    <img :src="twitterSVG" alt="" />
  </ShareLink>
  ...
</template>
```

## Output HTML

```html
<!-- dist/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>

  <body>
    <div id="sf-app">
      ...
      <a
        rel="nofollow noopener noreferrer"
        target="_blank"
        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fexample.com&amp;text=This%20website%20doesn't%20actually%20exist!&amp;via=ExampleHandle"
      >
        <img src="/assets/twitter.svg" alt="" />
      </a>
      ...
    </div>
  </body>
</html>
```

# generateShareLinks

> Generates `href` values for `<a>` tags with the `data-platform` attribute, from the page's metadata.

## Usage

```html
<!-- links -->
<link rel="canonical" href="..." />
<meta property="og:url" content="..." />

<!-- general -->
<title>...</title>
<meta property="og:title" content="..." />
<meta name="description" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="article" />

<!-- ... -->

<a data-platform="facebook" class="share-link">...</a>
```

```ts
import { generateShareLinks } from '@screaming/utils'

generateShareLinks()
```

<br>

```html
<!-- output -->
<a
  href="https://www.facebook.com/sharer/sharer.php?u=..."
  rel="nofollow noopener noreferrer"
  target="_blank"
  class="share-link"
>
  ...
</a>
```

## Type Definitions

```ts
export declare function generateShareLinks(): void
```

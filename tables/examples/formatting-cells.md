# Formatting Cells

When declaring columns with the [createColumn](../helpers/create-column.md) helper, you have the option to format that column's cells' contents via the `format` key.

This can come in handy for replacing the "stringy" values (such as `%` or `£`) removed by the [TSV to JSON](https://screamingprojects.com/toolbox/tsv-to-json) converter, or when wishing to add additional markup to the cell.

Both of these cases are demonstrated below.

## Replacing / Modifying Values

The first argument passed to the `format` function is the cell's value. This makes it incredibly convenient to perform simple modifications.

```vue
<script setup lang="ts">
import { createColumn } from '@screaming/tables'

const columns = [
  createColumn('...', { format: (val) => `${val}%` }),
  createColumn('...', { format: (val) => `£${val}` }),
  createColumn('...', { format: (val) => val.toFixed(2) })
]
</script>
```

## Creating Markup

The second argument passed to the `format` function is Vue's VNode creation function, [h](https://vuejs.org/api/render-function.html#h).

This allows for the creation of additional markup inside the cell's `<td>`. This can be useful for displaying images instead of string values, or attaching event handlers to specific cells.

:::tip
The function is named `h` due to following a [common convention](https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/6#issuecomment-232994673).
:::

```vue
<script setup lang="ts">
import { createColumn } from '@screaming/tables'

const columns = [
  createColumn('...', {
    format: (val, h) =>
      h(
        'span',
        { class: '...' },
        h('img', { class: '...', src: `/some/link/${val}.png`, alt: '...' })
      )
  })
]
</script>
```

The above will result in the following markup for each cell in the column:

```html
<td>
  <span class="...">
    <img class="..." src="/some/link/_.png" alt="..." />
  </span>
</td>
```

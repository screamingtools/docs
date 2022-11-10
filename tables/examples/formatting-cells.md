# Formatting Cells

When declaring columns with the [createColumn](../helpers/create-column.md) helper, you have the option to format that column's cells' contents via the `format` key. This function receives a single argument, an object containing the cell's value, the current row's data, and Vue's [h](https://vuejs.org/api/render-function.html#h) function:

```ts
createColumn('...', {
  format: ({ value, row, h }) => { ... }
})
```

These values can come in handy for:

- Replacing the "stringy" values (such as `%` or `£`) removed by the [TSV to JSON](https://screamingprojects.com/toolbox/tsv-to-json) converter.
- Adding additional markup to the cell.
- Using another cell's value in the current cell.

Examples of these situations are demonstrated below.

## Replacing / Modifying Values

The `value` parameter makes it incredibly convenient to perform simple modifications to the value in a cell.

```vue
<script setup lang="ts">
import { createColumn } from '@screaming/tables'

const columns = [
  createColumn('...', { format: ({ value }) => `${value}%` }),
  createColumn('...', { format: ({ value }) => `£${value}` }),
  createColumn('...', { format: ({ value }) => value.toFixed(2) })
]
</script>
```

## Creating Markup

Vue's VNode creation function, [h](https://vuejs.org/api/render-function.html#h), allows for the creation of additional markup inside the cell's `<td>`. This can be useful for displaying images instead of string values, or attaching event handlers to specific cells.

:::tip
The function is named `h` due to following a [common convention](https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/6#issuecomment-232994673).
:::

```vue
<script setup lang="ts">
import { createColumn } from '@screaming/tables'

const columns = [
  createColumn('...', {
    format: ({ value, h }) =>
      h(
        'span',
        { class: '...' },
        h('img', { class: '...', src: `/some/link/${value}.png`, alt: '...' })
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

## Using Other Cells' Values

In some projects, it can be useful to access other keys in the data, separate from that of the current cell. An example would be listing a song's title and artist in the same column. This can easily be achieved by using the `row` and `h` parameters in conjunction.

```vue
<script setup lang="ts">
import { createColumn } from '@screaming/tables'

const columns = [
  createColumn('...', {
    format: ({ h, row }) =>
      h('span', { class: '...' }, [
        h('span', { class: '...' }, row.artist),
        h('span', { class: '...' }, row.title)
      ])
  })
]
</script>
```

The above will result in the following markup for each cell in the column:

```html
<td>
  <span>
    <span>Example Artist Name</span>
    <span>Example Song Title</span>
  </span>
</td>
```

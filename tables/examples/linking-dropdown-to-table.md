# Linking Dropdown to Table

Oftentimes, when tables have too many columns, it's sensible to display only a few of them and allow the user to select which to view via a dropdown menu. The `<MiniTable />` component makes this easy to achieve via the `visible-keys` prop.

In order for `<MiniTable />` to differentiate between which columns to always display, and which to swap out, you should use the `permanent` option in the `createColumn` helper. This option is typically set to `true` for columns displaying ranks, locations, and other unique identifiers.

## Example

This example demonstrates swapping out the final column of the table.

:::tip
Despite the plural nomenclature, `visible-keys` accepts both a single value or an array of values.
:::

```vue
<script setup>
import { MiniTable, createClasses, createColumn, createConfig } from '@screaming/tables'
import data from '~/assets/data.json'

// dropdown
const dropdownItems = [
  { key: 'popularity', text: 'Popularity' },
  { key: 'n_instagram_posts', text: 'N° Instagram Posts' },
  { key: 'overall', text: 'Overall' }
]
const visibleKey = ref(dropdownItems[2].key)

// table
const classes = createClasses( ... )
const columns = [
  createColumn('rank', { permanent: true }),
  createColumn('city', { permanent: true }),
  createColumn('...', {}),
  createColumn('...', {}),
  createColumn('...', {})
]
const config = createConfig({ ... })
</script>

<template>
  <!-- dropdown -->
  <select v-model="visibleKey">
    <option v-for="item in dropdownItems" :key="item.key" :value="item.key">
      {{ item.text }}
    </option>
  </select>

  <!-- table -->
  <MiniTable
    :data="data"
    :classes="classes"
    :columns="columns"
    :config="config"
    :visible-keys="visibleKey"
  />
</template>
```

## Multiple Columns Example

This example demonstrates swapping out multiple columns at the right-hand side of the table.

:::tip
The ordering of the keys provided to the `visible-keys` prop determines the ordering of the columns shown on the right-hand side of the table wherein the last item in the array will be the last column in the table.
:::

:::tip
When swapping out multiple columns, the last key in the array provided to `visible-keys` (right-most column) will be selected as the sorting/ranking key.
:::

```vue{4-10,11-18}
<script setup>
import { MiniTable, createClasses, createColumn, createConfig } from '@screaming/tables'
import data from '~/assets/data.json'

// dropdown
const dropdownItems = [
  { key: 'positive', text: 'Positive Sentiments' },
  { key: 'negative', text: 'Negative Sentiments' },
]
const currentDropdownItem = ref(dropdownItems[0].key)

const visibleKeys = computed(() => {
  if (currentDropdownItem.value === 'positive') {
    return ['positive_2020', 'positive_2021', 'positive_2022']
  } else {
    return ['negative_2020', 'negative_2021', 'negative_2022']
  }
})

// table
const classes = createClasses( ... )
const columns = [
  createColumn('rank', { permanent: true }),
  createColumn('city', { permanent: true }),
  createColumn('...', {}),
  createColumn('...', {}),
  createColumn('...', {})
]
const config = createConfig({ ... })
</script>

<template>
  <!-- dropdown -->
  <select v-model="visibleKey">
    <option v-for="item in dropdownItems" :key="item.key" :value="item.key">
      {{ item.text }}
    </option>
  </select>

  <!-- table -->
  <MiniTable
    :data="data"
    :classes="classes"
    :columns="columns"
    :config="config"
    :visible-keys="visibleKeys"
  />
</template>
```

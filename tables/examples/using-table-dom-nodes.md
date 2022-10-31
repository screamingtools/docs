# Using Table DOM Nodes

It can be helpful to access the inner elements of the `<Table />` and `<MiniTable />` components (e.g. accessing the height of the `<thead>`). However, as these components act as a sort of blackbox around their internal HTML elements, we need to use a ref.

:::tip
You can learn more about using the `ref` key on child components [here](https://vuejs.org/guide/essentials/template-refs.html#ref-on-component).
:::

:::warning
The table, head, and body elements provided by the `ref` are inaccessible until the component has been mounted. As such, they can only be used inside Vue's `onMounted` hook, be it in a [composable](https://vuejs.org/guide/reusability/composables.html) or [setup function](https://vuejs.org/api/composition-api-setup.html).
:::

```vue{21}
<script setup>
import { Table, createClasses, createColumn, createConfig } from '@screaming/tables'
import data from '~/assets/data.json'

const classes = createClasses( ... )
const columns = [ ... ]
const config = createConfig({ ... })

// populated with { table: ..., head: ..., body: ... } on mount
const tableElements = ref(null)

onMounted(() => {
  // the <thead> DOM node
  const tableHead = tableElements.value.head
})
</script>

<template>
  <Table
    ref="tableElements"
    :data="data"
    :classes="classes"
    :columns="columns"
    :config="config"
    init-key="..."
  />
</template>
```

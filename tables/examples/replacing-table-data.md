# Replacing Table Data

Sometimes, it is beneficial to use a single `<Table />` or `<MiniTable />` component, with the same columns and config, but a swappable dataset. This can be helpful in projects where users can select which year they wish to view some data from.

Although the `<Table />` and `<MiniTable />` components don't natively support swapping out the data, we can use a Vue trick to achieve this.

By binding the `ref` in charge of selecting the dataset to a component's `key` prop, it will cause the component to re-render with the latest prop values. In our case, it will refresh the table with the new data values.

:::tip
The reason that simply swapping the value bound to a table's `data` property doesn't change the data values in the table is due to the data losing reactivity once inside the component.

This is an intentional design decision since, ideally, each dataset should have its own table component.
:::

```vue{26-27}
<script setup>
import { Table, createClasses, createColumn, createConfig } from '@screaming/tables'
import data2020 from '~/assets/data2020.json'
import data2021 from '~/assets/data2021.json'
import data2022 from '~/assets/data2022.json'

const DATASETS = {
  2020: data2020,
  2021: data2021,
  2022: data2022
}

const currentYear = ref(2022)
const currentDataset = computed(() => DATASETS[currentYear.value])

const classes = createClasses( ... )
const columns = [ ... ]
const config = createConfig({ ... })
</script>

<template>
  <!-- some element which lets the user pick between 2020, 2021, or 2022 -->
  <YearToggle v-model="currentYear" />

  <Table
    :key="currentYear"
    :data="currentDataset"
    :classes="classes"
    :columns="columns"
    :config="config"
    init-key="..."
  />
</template>
```

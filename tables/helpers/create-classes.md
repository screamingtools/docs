# createClasses

> Creates a classes object for a `<Table>` or `<MiniTable>`.

## Usage

```vue
<script setup lang="ts">
import { Table, createClasses } from '@screaming/tables'

const classes = createClasses(...)
</script>

<template>
  <!-- other props omitted for brevity -->
  <Table :classes="classes" />
</template>
```

## Modes

The `createClasses` function can be used in several different ways, based on the type of argument passed in.

### No Argument

Passing in no arguments to `createClasses` will yield an object filled with sensible, default class names. This is primarily intended for simple projects with a single table.

```ts
createClasses()

// {
//   table: 'sf-table',
//   head: {
//     thead: 'sf-table__head',
//     tr: 'sf-table__row sf-table__row--head',
//     th: 'sf-table__cell sf-table__cell--head',
//     thSorted: 'sf-table__cell--sorted',
//     thRanked: 'sf-table__cell--ranked'
//   },
//   body: {
//     tbody: 'sf-table__body',
//     tr: 'sf-table__row sf-table__row--body',
//     td: 'sf-table__cell sf-table__cell--body',
//     tdSorted: 'sf-table__cell--sorted',
//     tdRanked: 'sf-table__cell--ranked'
//   },
//   indicator: 'sf-table__indicator'
// }
```

### String

Providing a string to `createClasses` will return the same output as providing no arguments, except that the prefix `"sf-table"` will be replaced with the input string.

```ts
createClasses('new-prefix')

// {
//   table: 'new-prefix',
//   head: {
//     thead: 'new-prefix__head',
//     tr: 'new-prefix__row new-prefix__row--head',
//     th: 'new-prefix__cell new-prefix__cell--head',
//     thSorted: 'new-prefix__cell--sorted',
//     thRanked: 'new-prefix__cell--ranked'
//   },
//   body: {
//     tbody: 'new-prefix__body',
//     tr: 'new-prefix__row new-prefix__row--body',
//     td: 'new-prefix__cell new-prefix__cell--body',
//     tdSorted: 'new-prefix__cell--sorted',
//     tdRanked: 'new-prefix__cell--ranked'
//   },
//   indicator: 'new-prefix__indicator'
// }
```

### Function

A callback function can be provided to `createClasses`, which accepts a single argument containing the same [default class names](#no-argument) obtained from calling `createClasses` with no arguments. This allows for the creation of class objects targeting specific elements (e.g. only `<table>` and `<tbody>`), rather than every element in the table.

```ts
createClasses((defaults) => ({
  table: defaults.table,
  body: defaults.body
}))

// {
//   table: 'sf-table',
//   body: {
//     tbody: 'sf-table__body some-other-class',
//     tr: 'sf-table__body-row',
//     td: 'sf-table__body-cell',
//     tdSorted: 'sf-table__body-cell--sorted',
//     tdRanked: 'sf-table__body-cell--ranked'
//   }
// }
```

This functionality is helpful when wanting to add custom class names to specific elements whilst retaining the default class names.

```ts{18}
createClasses((defaults) => ({
  ...defaults,
  body: {
    tbody: `${defaults.body.tbody} some-other-class`
  }
}))

// {
//   table: 'sf-table',
//   head: {
//     thead: 'sf-table__head',
//     tr: 'sf-table__head-row',
//     th: 'sf-table__head-cell',
//     thSorted: 'sf-table__head-cell--sorted',
//     thRanked: 'sf-table__head-cell--ranked'
//   },
//   body: {
//     tbody: 'sf-table__body some-other-class',
//     tr: 'sf-table__body-row',
//     td: 'sf-table__body-cell',
//     tdSorted: 'sf-table__body-cell--sorted',
//     tdRanked: 'sf-table__body-cell--ranked'
//   },
//   indicator: 'sf-table__indicator'
// }
```

### Object

Passing an object to `createClasses` will simply return the same object. In this instance, `createClasses` acts more as an intellisense-provider rather than a function. This is useful in circumstances such as using a utility-class framework such as [Tailwind CSS](https://tailwindcss.com).

```ts
createClasses({
  table: 'w-full text-lg',
  head: { ... },
  body: { ... },
  indicator: 'fixed right-1 bottom-1 w-4 h-4'
})

// {
//   table: 'w-full text-lg',
//   head: { ... },
//   body: { ... },
//   indicator: 'fixed right-1 bottom-1 w-4 h-4'
// }
```

## Type Definitions

```ts
interface Classes {
  table?: string
  head?: {
    thead?: string
    tr?: string
    th?: string
    thSorted?: string
    thRanked?: string
  }
  body?: {
    tbody?: string
    tr?: string
    td?: string
    tdSorted?: string
    tdRanked?: string
  }
  indicator?: string
}

type CreateClassesModifier = string | Classes | ((c: Classes) => Classes)

/**
 * @param modifier - The prefix, modification function, or plain classes object.
 */
export declare function createClasses(modifier?: CreateClassesModifier): Classes
```

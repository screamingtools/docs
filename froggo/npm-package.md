# NPM Package Template

:::tip
This template is used as a starting point for creating NPM packages, and not web projects. Please consult [Screaming Guides](https://screamingprojects.com/guides/npm-packages.html) for more information on creating an NPM package.
:::

## Scripts

The following scripts are available in this project's `package.json`:

- `build`: Builds the project for production.
- `watch`: Builds the project for production and rebuilds on subsequent file changes.

## Project Structure

```
project
├── src/
│   └── index.ts (1)
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json (2)
└── tsup.config.ts (3)
```

## Key Items

1. Entry point to the application.

2. Configuration file for [TypeScript](https://www.typescriptlang.org/) used in `src/` (`.ts` or `.d.ts` files).

3. Configuration file for [tsup](https://tsup.egoist.dev/) (a tool which bundles all of the TypeScript/JavaScript files into a publishable format).

:::tip
NPM Packages may be created using JavaScript instead of TypeScript. To enable this, simply change `src/index.ts` to `src/index.js`, and modify the entry point in `tsup.config.ts` as shown below:

```ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/index.ts' }, // [!code --]
  entry: { index: 'src/index.js' }, // [!code ++]
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: true
})
```

:::

## Helpful Docs

- [npm](https://docs.npmjs.com/)
- [tsup](https://tsup.egoist.dev/)
- [TypeScript](https://www.typescriptlang.org/)

# Vanilla (Webpack) Template

## Scripts

The following scripts are available in this project's `package.json`:

- `dev`: Starts the development server on `http://localhost:8888`.
- `start`: Alias for `dev`.
- `build`: Builds the project for production.
- `build:inline`: Builds the project for production and prepares it to be inlined.
- `build:iframe`: Builds the project for production and prepares it to be embedded via an `<iframe>`.

## Project Structure

```
.
├─ .sf-stuff/ (1)
├─ src/
│  ├─ assets/
│  ├─ js/
│  ├─ public/ (2)
│  ├─ scss/
│  ├─ index.html
│  └─ main.js
├─ .babelrc (3)
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ postcss.config.cjs (4)
├─ README.md
└─ webpack.config.cjs (5)
```

## Key Items

1. Contains build scripts and global variables - _**you shouldn't need to touch these files**_.

2. Contains files to be served at `https://website.com/[file]`. At build-time, these are copied from `src/public` to the top level of `dist/`.

3. Configuration for [Babel](https://babeljs.io/docs/en/). This enables support for IE11 (see [Disabling IE11 Support](#disabling-ie11-support))

4. Configuration file for [PostCSS](https://postcss.org/).

5. Configuration file for [Webpack](https://webpack.js.org/).

## Disabling IE11 Support

To disable IE11 support, and reduce bundle size significantly, simply remove the configuration object in `.babelrc` as shown:

<!-- prettier-ignore -->
```json
{
  "exclude": "node_modules/**",
  "presets": [
    [
      "@babel/preset-env",
      { // [!code --]
        "modules": "auto", // [!code --]
        "useBuiltIns": "usage", // [!code --]
        "corejs": 3, // [!code --]
        "targets": { // [!code --]
          "browsers": ["last 2 versions", "ie >= 11"] // [!code --]
        } // [!code --]
      } // [!code --]
    ]
  ]
}
```

## Helpful Docs

- [SASS](https://sass-lang.com/documentation/)
- [Webpack](https://webpack.js.org/)

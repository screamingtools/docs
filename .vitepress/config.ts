import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: true,
  // base: '',
  description: 'NPM Packages for Screaming Frog projects 🐸',
  head: [],
  lang: 'en-US',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  // outDir: './dist',
  title: 'SF DesignDev Packages',
  titleTemplate: ' SF DesignDev Packages',

  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [{ icon: 'github', link: 'https://github.com/sf-designdev-packages' }],
    nav: createNav(),
    sidebar: createSidebar()
  }
})

function createNav() {
  return [
    { text: 'Froggo', link: '/froggo/', activeMatch: '/froggo/*' },
    { text: 'Share', link: '/share/', activeMatch: '/share/*' },
    { text: 'Tables', link: '/tables/', activeMatch: '/tables/*' },
    { text: 'Twitter', link: '/twitter/', activeMatch: '/twitter/*' },
    { text: 'Use', link: '/use/', activeMatch: '/use/*' },
    { text: 'Utils', link: '/utils/', activeMatch: '/utils/*' }
  ]
}

function createSidebar() {
  return {
    '/froggo/': createFroggoSidebar(),
    '/share/': createShareSidebar(),
    '/tables/': createTablesSidebar(),
    '/twitter/': createTwitterSidebar(),
    '/use/': createUseSidebar(),
    '/utils/': createUtilsSidebar()
  }
}

function createFroggoSidebar() {
  return [
    {
      text: '@screaming/froggo',
      items: [{ text: 'Getting Started', link: '/froggo/' }]
    },
    {
      text: 'Templates',
      collapsible: true,
      items: [
        { text: 'Vue + SASS (Vite)', link: '/froggo/sass' },
        { text: 'Vue + Tailwind (Vite)', link: '/froggo/tailwind' },
        { text: 'Vanilla + SASS (Webpack)', link: '/froggo/vanilla' },
        { text: 'NPM Package', link: '/froggo/npm-package' }
      ]
    }
  ]
}

function createShareSidebar() {
  return [
    {
      text: '@screaming/share',
      items: [{ text: 'Getting Started', link: '/share/' }]
    },
    {
      text: 'Component',
      collapsible: true,
      items: [{ text: '&lt;ShareLink />', link: '/share/share-link.md' }]
    },
    {
      text: 'Examples',
      collapsible: true,
      items: [{ text: 'Example Output', link: '/share/examples/example-output.md' }]
    }
  ]
}

function createTablesSidebar() {
  return [
    {
      text: '@screaming/tables',
      items: [{ text: 'Getting Started', link: '/tables/' }]
    },
    {
      text: 'Components',
      collapsible: true,
      items: [
        { text: '&lt;Table />', link: '/tables/components/table' },
        { text: '&lt;MiniTable />', link: '/tables/components/mini-table' }
      ]
    },
    {
      text: 'Events',
      collapsible: true,
      items: [
        { text: '@header-click', link: '/tables/events/header-click' },
        { text: '@row-click', link: '/tables/events/row-click' }
      ]
    },
    {
      text: 'Helpers',
      collapsible: true,
      items: [
        { text: 'createClasses', link: '/tables/helpers/create-classes' },
        { text: 'createColumn', link: '/tables/helpers/create-column' },
        { text: 'createConfig', link: '/tables/helpers/create-config' },
        { text: 'Data Attributes', link: '/tables/helpers/data-attributes' }
      ]
    },
    {
      text: 'Examples',
      collapsible: true,
      items: [
        { text: 'Filtering Data', link: '/tables/examples/filtering-data' },
        { text: 'Formatting Cells', link: '/tables/examples/formatting-cells' },
        { text: 'Linking Dropdown to Table', link: '/tables/examples/linking-dropdown-to-table' },
        { text: 'Replacing Table Data', link: '/tables/examples/replacing-table-data' },
        { text: 'Toggling Length', link: '/tables/examples/toggling-length' },
        { text: 'Using Table DOM Nodes', link: '/tables/examples/using-table-dom-nodes' }
      ]
    }
  ]
}

function createTwitterSidebar() {
  return [
    {
      text: '@screaming/twitter',
      items: [{ text: 'Getting Started', link: '/twitter/' }]
    },
    {
      text: 'Usage',
      collapsible: true,
      items: [{ text: 'Input File Structure', link: '/twitter/usage/input-file-structure' }]
    },
    {
      text: 'Twitter Docs',
      collapsible: true,
      items: [
        {
          text: 'Building a Query',
          link: 'https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query'
        },
        {
          text: 'Searching Tweets',
          link: 'https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent'
        }
      ]
    }
  ]
}

function createUseSidebar() {
  return [
    {
      text: '@screaming/use',
      items: [{ text: 'Getting Started', link: '/use/' }]
    },
    {
      text: 'Composables',
      collapsible: true,
      items: [
        { text: 'useBreakpointObserver', link: '/use/use-breakpoint-observer' },
        { text: 'useStepper', link: '/use/use-stepper' },
        { text: 'useToggle', link: '/use/use-toggle' }
      ]
    }
  ]
}

function createUtilsSidebar() {
  return [
    {
      text: '@screaming/utils',
      items: [{ text: 'Getting Started', link: '/utils/' }]
    },
    {
      text: 'Array',
      collapsible: true,
      items: [
        { text: 'groupsOf', link: '/utils/array/groups-of' },
        { text: 'max', link: '/utils/array/max' },
        { text: 'min', link: '/utils/array/min' },
        { text: 'partition', link: '/utils/array/partition' },
        { text: 'splitAt', link: '/utils/array/split-at' },
        { text: 'sum', link: '/utils/array/sum' },
        { text: 'toArray', link: '/utils/array/to-array' },
        { text: 'uniq', link: '/utils/array/uniq' }
      ]
    },
    {
      text: 'Boolean',
      collapsible: true,
      items: [{ text: 'toBool', link: '/utils/boolean/to-bool' }]
    },
    {
      text: 'DOM',
      collapsible: true,
      items: [
        { text: 'createElement', link: '/utils/dom/create-element' },
        { text: 'generateShareLinks', link: '/utils/dom/generate-share-links' },
        { text: 'makeBackToTop', link: '/utils/dom/make-back-to-top' },
        { text: 'scroll', link: '/utils/dom/scroll' },
        { text: 'ZoomPanner', link: '/utils/dom/zoom-panner' }
      ]
    },
    {
      text: 'Function',
      collapsible: true,
      items: [
        { text: 'debounce', link: '/utils/function/debounce' },
        { text: 'memoize', link: '/utils/function/memoize' },
        { text: 'once', link: '/utils/function/once' },
        { text: 'throttle', link: '/utils/function/throttle' }
      ]
    },
    {
      text: 'Is',
      collapsible: true,
      items: [
        { text: 'isArray', link: '/utils/is/is-array' },
        { text: 'isBoolean', link: '/utils/is/is-boolean' },
        { text: 'isDefined', link: '/utils/is/is-defined' },
        { text: 'isEmptyObject', link: '/utils/is/is-empty-object' },
        { text: 'isFunction', link: '/utils/is/is-function' },
        { text: 'isNumber', link: '/utils/is/is-number' },
        { text: 'isObject', link: '/utils/is/is-object' },
        { text: 'isString', link: '/utils/is/is-string' },
        { text: 'isTouchDevice', link: '/utils/is/is-touch-device' },
        { text: 'isUnsupportedBrowser', link: '/utils/is/is-unsupported-browser' },
        { text: 'isWindow', link: '/utils/is/is-window' }
      ]
    },
    {
      text: 'Maths',
      collapsible: true,
      items: [
        { text: 'isEven', link: '/utils/maths/is-even' },
        { text: 'isOdd', link: '/utils/maths/is-odd' },
        { text: 'randomChance', link: '/utils/maths/random-chance' },
        { text: 'randomNumber', link: '/utils/maths/random-number' },
        { text: 'uniqueNumber', link: '/utils/maths/unique-number' }
      ]
    },
    {
      text: 'Miscellanous',
      collapsible: true,
      items: [
        { text: 'easings', link: '/utils/misc/easings' },
        { text: 'noop', link: '/utils/misc/noop' },
        { text: 'sleep', link: '/utils/misc/sleep' }
      ]
    },
    {
      text: 'Object',
      collapsible: true,
      items: [
        { text: 'deepMerge', link: '/utils/object/deep-merge' },
        { text: 'rank', link: '/utils/object/rank' },
        { text: 'sortKeys', link: '/utils/object/sort-keys' },
        { text: 'sort', link: '/utils/object/sort' }
      ]
    },
    {
      text: 'String',
      collapsible: true,
      items: [
        { text: 'capitalise', link: '/utils/string/capitalise' },
        { text: 'chars', link: '/utils/string/chars' },
        { text: 'isBlank', link: '/utils/string/is-blank' },
        { text: 'isEmpty', link: '/utils/string/is-empty' },
        { text: 'toCamel', link: '/utils/string/to-camel' },
        { text: 'toKebab', link: '/utils/string/to-kebab' },
        { text: 'toNumber', link: '/utils/string/to-number' },
        { text: 'toOrdinal', link: '/utils/string/to-ordinal' },
        { text: 'truncate', link: '/utils/string/truncate' }
      ]
    },
    {
      text: 'Types',
      collapsible: true,
      items: [{ text: 'types', link: '/utils/types/types' }]
    }
  ]
}

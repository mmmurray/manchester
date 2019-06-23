const { join } = require('path')

const kebabToPascal = str => {
  const [first, ...rest] = str.replace(/([-][a-z])/g, group =>
    group.toUpperCase().replace('-', ''),
  )
  return `${first.toUpperCase()}${rest.join('')}`
}

const kebabToTitle = str => {
  const [first, ...rest] = str.replace(/([-][a-z])/g, group =>
    group.toUpperCase().replace('-', ' '),
  )
  return `${first.toUpperCase()}${rest.join('')}`
}

const getNamesFromComponentPath = componentPath => {
  const componentPathMatches = /\/([^/]+)\/index\.tsx$/.exec(componentPath)

  return {
    displayName: kebabToPascal(componentPathMatches[1]),
    visibleName: kebabToTitle(componentPathMatches[1]),
  }
}

const webpackConfig = require('mmm-scripts/webpack.config').default(
  'production',
)

module.exports = {
  components: 'src/components/*/index.tsx',
  getComponentPathLine: componentPath =>
    `import { ${
      getNamesFromComponentPath(componentPath).displayName
    } } from 'manchester'`,
  previewDelay: 0,
  propsParser: (componentPath, ...rest) => {
    const parsed = require('react-docgen-typescript')
      .withDefaultConfig()
      .parse(componentPath, ...rest)

    return parsed.map(p => ({
      ...p,
      ...getNamesFromComponentPath(componentPath),
    }))
  },
  styleguideComponents: {
    Wrapper: join(__dirname, 'src/styleguide-wrapper'),
  },
  styleguideDir: './dist/styleguide',
  template: {
    lang: 'en-GB',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Raleway:400,700,900',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/96f9fad05bc6e242bc9a638f5b67861706b54b0a.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/59b26498dea68c9b79e7e8ddf7b43ac55474f2b2.png',
          sizes: '57x57',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/f53d41fcfb45896476107dfb1b331a72d4c32acc.png',
          sizes: '76x76',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/92a2a0d9bb4318fed71510eae147f950d7239211.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/4b17112023833d980469e31ffdbaf7942cc4bb44.png',
          sizes: '128x128',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/82249ddb2b9455a4f128bee8312c9a6b62f1c209.png',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/6816159ac7de2795bdcf2f786f5db6077236da51.png',
          sizes: '228x228',
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href:
            'https://mark.murray.xyz/static/unversioned/fbff808c45d8b4d1ffe8b5cfc3e86c1ab582c511.png',
          sizes: '196x196',
        },
        {
          rel: 'apple-touch-icon',
          href:
            'https://mark.murray.xyz/static/unversioned/563fa981243d5a8d240db0825fa7d981bde44f87.png',
          sizes: '120x120',
        },
        {
          rel: 'apple-touch-icon',
          href:
            'https://mark.murray.xyz/static/unversioned/401509b8d15af32185f761f20e39d9d56651690e.png',
          sizes: '152x152',
        },
        {
          rel: 'apple-touch-icon',
          href:
            'https://mark.murray.xyz/static/unversioned/1774f2441ea8a3d078058e149bf9f43e98ae3883.png',
          sizes: '180x180',
        },
        {
          rel: 'apple-touch-icon',
          href:
            'https://mark.murray.xyz/static/unversioned/82249ddb2b9455a4f128bee8312c9a6b62f1c209.png',
          sizes: '192x192',
        },
      ],
    },
  },
  title: 'Manchester',
  styles: {
    Heading: {
      heading: {
        fontWeight: 700,
      },
    },
    ComponentsList: {
      item: {
        fontSize: 18,
      },
    },
    Logo: {
      logo: {
        fontWeight: 900,
        fontSize: 45,
      },
    },
    Playground: {
      preview: {
        background: '#222',
        overflow: 'auto',
        padding: 0,
      },
    },
    Table: {
      cellHeading: {
        width: '25%',
      },
    },
  },
  theme: {
    buttonTextTransform: 'none',
    borderRadius: 0,
    sidebarWidth: 300,
    color: {
      name: '#424242',
      base: '#222',
      light: '#3a3a3a',
      baseBackground: '#dcd6d9',
      border: '#bdbdbd',
      link: '#222',
      linkHover: '#000',
      ribbonBackground: '#ababab',
      sidebarBackground: '#c5c0c3',
    },
    fontFamily: {
      base: ['Raleway', 'sans-serif'],
    },
  },
  webpackConfig: {
    resolve: webpackConfig.resolve,
    module: webpackConfig.module,
  },
}

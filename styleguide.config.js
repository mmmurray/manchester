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

module.exports = {
  components: 'src/components/*/index.tsx',
  getComponentPathLine: componentPath =>
    `import { ${
      getNamesFromComponentPath(componentPath).displayName
    } } from 'manchester'`,
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
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Raleway:400,700,900',
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
      linkHover: '#660099',
      ribbonBackground: '#660099',
      base: '#222',
      baseBackground: '#fff',
      sidebarBackground: '#fff',
      link: '#222',
    },
    fontFamily: {
      base: ['Raleway', 'sans-serif'],
    },
  },
}

module.exports = {
  title: 'Hypi Platform Documentation',
  tagline: 'Lowcode application development platform',
  url: 'https://docs.hypi.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hypi-universe', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '9ae9d65b23569334296974ce321050b6',
      indexName: 'hypi',
      // Optional: see doc section below
      contextualSearch: false,
      // Optional: Algolia search parameters
      searchParameters: {},
    },
    navbar: {
      title: 'Hypi',
      logo: {
        alt: 'Hypi Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://hypi.io',
          label: 'Main website',
          position: 'left',
        },
        {
          href: 'https://hypi.app',
          label: 'Register or Login',
          position: 'right',
        },
        {
          href: 'https://github.com/hypi-universe/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
            {
              label: 'Get Started',
              to: 'docs/get-started/',
            },
            {
              label: 'Authentication',
              to: 'docs/authentication',
            },
            {
              label: 'Filtering your data',
              to: 'docs/arcql',
            },
            {
              label: 'GraphQL CRUD APIs',
              to: 'docs/crud',
            },
            {
              label: 'REST APIs',
              to: 'docs/rest-apis',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support Forum',
              href: 'https://hypi.dev',
            },
            {
              label: 'Platform',
              href: 'https://hypi.app',
            },
            {
              label: 'Website',
              href: 'https://hypi.io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hypi-universe/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hypi.`,
    },
    gtag: {
      trackingID: 'UA-120274358-1',
      anonymizeIP: false, 
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hypi-universe/docs/edit/master/',
          path: "content",
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/hypi-universe/docs/edit/master/',
          path: "blog"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
        gtag: {
          trackingId: 'UA-120274358-1'
        },
      },
    ],
  ],
  plugins: [
    [ //See https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/apisetup', // string
            from: ['/references/api'], // string | string[]
          },
          {
            to: '/docs/arcql',
            from: ['/references/arcql'],
          },
	  {
            to: '/docs/crud',
            from: ['/references/crud'],
          },
	  {
            to: '/docs/authorisation',
            from: ['/references/authorisation'],
          },
          {
            to: '/docs/apigateway',
            from: ['/references/api-gateway'],
          },
          {
            to: '/docs/aggregation',
            from: ['/references/aggregations-api'],
          },
          {
            to: '/docs/rest-apis',
            from: ['/references/rest-api'],
          },
	  {
            to: '/docs/workflow',
            from: ['/references/workflow'],
          },
          {
            to: '/docs/webhooks',
            from: ['/references/webhooks'],
          },
	  {
            to: '/docs/maths-api',
            from: ['/references/math-api'],
          },
          {
            to: '/docs/triggers',
            from: ['/references/triggers'],
          },
          {
            to: '/docs/serverlessfunction',
            from: ['/references/serverless-functions'],
          },
	  {
            to: '/docs/user-defined-function',
            from: ['/references/user-defined-functions'],
          },
          {
            to: '/docs/fileupload',
            from: ['/references/file-upload'],
          },
          {
            to: '/docs/oauth2login',
            from: ['/references/oauth2-login'],
          },
          {
            to: '/docs/graphql',
            from: ['/tutorials/graphql'],
          },
          {
            to: '/docs/gql-introduction',
            from: ['/tutorials/graphql/intro'],
          },
          {
            to: '/docs/gql-queries',
            from: ['/tutorials/graphql/query'],
          },
          {
            to: '/docs/gql-mutations',
            from: ['/tutorials/graphql/mutation'],
          },
          {
            to: '/docs/references',
            from: ['/tutorials/graphql/subscription'],
          },
          {
            to: '/docs/magic-hypi-object',
            from: ['/tutorials/graphql/hypi-object'],
          },
          {
            to: '/docs/hypi-directives',
            from: ['/tutorials/graphql/directives'],
          },
          {
            to: '/docs/gql-interfaces',
            from: ['/tutorials/graphql/interfaces'],
          },
          {
            to: '/docs/gql-schema-types',
            from: ['/tutorials/graphql/schema-and-types'],
          },
          {
            to: '/docs/gql-crud-tutorial',
            from: ['/tutorials/crud'],
          },
          {
            to: '/docs/time-series-aggregations',
            from: ['/tutorials/dateGranularity'],
          },
          {
            to: '/docs/references',
            from: ['/tutorials/graph'],
          },
          {
            to: '/docs/hypi-angular',
            from: ['/getting-started/angular'],
          },
          {
            to: '/docs/',
            from: ['/introduction'],
          },
 	  {
            to: '/docs/get-started',
            from: ['/getting-started/scratch'],
          },
  	  {
            to: '/docs/overview',
            from: ['/references/app'],
          },
          {
            to: '/docs/tutorials',
            from: ['/tutorials/'],
          },
	  {
            to: '/docs/get-started',
            from: ['/getting-started/'],
          },
          {
            to: '/docs/faq',
            from: ['/faq'],
          },
          {
            to: '/docs/api-references',
            from: ['/reference'],
          },
          {
            to: '/docs/api-references',
            from: ['/references/'],
          },
          
        ],
      },
    ],
  ],
};

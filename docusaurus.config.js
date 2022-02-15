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
      appId: 'OR6SSGNSLB',
      apiKey: 'f2021f6bbd08d39e9e43d2ca10092b37',
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
              to: 'docs/lowcode/get-started/',
            },
            {
              label: 'Authentication',
              to: 'docs/lowcode/authentication',
            },
            {
              label: 'Filtering your data',
              to: 'docs/lowcode/arcql',
            },
            {
              label: 'GraphQL CRUD APIs',
              to: 'docs/lowcode/crud',
            },
            {
              label: 'REST APIs',
              to: 'docs/lowcode/rest-apis',
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
        },
        gtag: {
          trackingID: 'UA-120274358-1',
          anonymizeIP: false,
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
            to: '/docs/lowcode/apisetup', // string
            from: ['/references/api'], // string | string[]
          },
          {
            to: '/docs/lowcode/arcql',
            from: ['/references/arcql'],
          },
	  {
            to: '/docs/lowcode/crud',
            from: ['/references/crud'],
          },
	  {
            to: '/docs/lowcode/authorisation',
            from: ['/references/authorisation'],
          },
          {
            to: '/docs/lowcode/apigateway',
            from: ['/references/api-gateway'],
          },
          {
            to: '/docs/lowcode/aggregation',
            from: ['/references/aggregations-api'],
          },
          {
            to: '/docs/lowcode/rest-apis',
            from: ['/references/rest-api'],
          },
	  {
            to: '/docs/lowcode/workflow',
            from: ['/references/workflow'],
          },
          {
            to: '/docs/lowcode/webhooks',
            from: ['/references/webhooks'],
          },
	  {
            to: '/docs/lowcode/maths-api',
            from: ['/references/math-api'],
          },
          {
            to: '/docs/lowcode/triggers',
            from: ['/references/triggers'],
          },
          {
            to: '/docs/lowcode/serverlessfunction',
            from: ['/references/serverless-functions'],
          },
	  {
            to: '/docs/lowcode/user-defined-function',
            from: ['/references/user-defined-functions'],
          },
          {
            to: '/docs/lowcode/fileupload',
            from: ['/references/file-upload'],
          },
          {
            to: '/docs/lowcode/oauth2login',
            from: ['/references/oauth2-login'],
          },
          {
            to: '/docs/lowcode/graphql',
            from: ['/tutorials/graphql'],
          },
          {
            to: '/docs/lowcode/gql-introduction',
            from: ['/tutorials/graphql/intro'],
          },
          {
            to: '/docs/lowcode/gql-queries',
            from: ['/tutorials/graphql/query'],
          },
          {
            to: '/docs/lowcode/gql-mutations',
            from: ['/tutorials/graphql/mutation'],
          },
          {
            to: '/docs/lowcode/references',
            from: ['/tutorials/graphql/subscription'],
          },
          {
            to: '/docs/lowcode/magic-hypi-object',
            from: ['/tutorials/graphql/hypi-object'],
          },
          {
            to: '/docs/lowcode/hypi-directives',
            from: ['/tutorials/graphql/directives'],
          },
          {
            to: '/docs/lowcode/gql-interfaces',
            from: ['/tutorials/graphql/interfaces'],
          },
          {
            to: '/docs/lowcode/gql-schema-types',
            from: ['/tutorials/graphql/schema-and-types'],
          },
          {
            to: '/docs/lowcode/gql-crud-tutorial',
            from: ['/tutorials/crud'],
          },
          {
            to: '/docs/lowcode/time-series-aggregations',
            from: ['/tutorials/dateGranularity'],
          },
          {
            to: '/docs/lowcode/references',
            from: ['/tutorials/graph'],
          },
          {
            to: '/docs/lowcode/hypi-angular',
            from: ['/getting-started/angular'],
          },
          {
            to: '/docs/lowcode/',
            from: ['/introduction'],
          },
 	  {
            to: '/docs/lowcode/get-started',
            from: ['/getting-started/scratch'],
          },
  	  {
            to: '/docs/lowcode/overview',
            from: ['/references/app'],
          },
          {
            to: '/docs/lowcode/tutorials',
            from: ['/tutorials/'],
          },
	  {
            to: '/docs/lowcode/get-started',
            from: ['/getting-started/'],
          },
          {
            to: '/docs/lowcode/faq',
            from: ['/faq'],
          },
          {
            to: '/docs/lowcode/api-references',
            from: ['/reference'],
          },
          {
            to: '/docs/lowcode/api-references',
            from: ['/references/'],
          },
          {
            to: 'docs/hypi-tink-intro', 
            from: ['/docs/'], 
          },
          {
            to: '/docs/lowcode/overview', 
            from: ['/docs/overview'], 
          },
          {
            to: '/docs/lowcode/get-started', 
            from: ['/docs/get-started'], 
          },
          {
            to: '/docs/lowcode/faq', 
            from: ['/docs/faq'], 
          },
          {
            to: '/docs/lowcode/api-references', 
            from: ['/docs/api-references'], 
          },
          {
            to: '/docs/lowcode/apisetup', 
            from: ['/docs/apisetup'], 
          },
          {
            to: '/docs/lowcode/authentication', 
            from: ['/docs/authentication'], 
          },
          {
            to: '/docs/lowcode/scalars', 
            from: ['/docs/scalars'], 
          },
          {
            to: '/docs/lowcode/magic-hypi-object', 
            from: ['/docs/magic-hypi-object'], 
          },
          {
            to: '/docs/lowcode/crud', 
            from: ['/docs/crud'], 
          },
          {
            to: '/docs/lowcode/create-data', 
            from: ['/docs/create-data'], 
          },
          {
            to: '/docs/lowcode/update-data', 
            from: ['/docs/update-data'], 
          },
          {
            to: '/docs/lowcode/read-data', 
            from: ['/docs/read-data'], 
          },
          {
            to: '/docs/lowcode/delete-data', 
            from: ['/docs/delete-data'], 
          },
          {
            to: '/docs/lowcode/arcql', 
            from: ['/docs/arcql'], 
          },
          {
            to: '/docs/lowcode/references', 
            from: ['/docs/references'], 
          },
          {
            to: '/docs/lowcode/authorisation', 
            from: ['/docs/authorisation'], 
          },
          {
            to: '/docs/lowcode/realtime-db', 
            from: ['/docs/realtime-db'], 
          },
          {
            to: '/docs/lowcode/apigateway', 
            from: ['/docs/apigateway'], 
          },
          {
            to: '/docs/lowcode/aggregation', 
            from: ['/docs/aggregation'], 
          },
          {
            to: '/docs/lowcode/maths-api', 
            from: ['/docs/maths-api'], 
          },
          {
            to: '/docs/lowcode/hypi-directives', 
            from: ['/docs/hypi-directives'], 
          },
	  {
            to: '/docs/lowcode/user-defined-function', 
            from: ['/docs/user-defined-function'], 
          },
          {
            to: '/docs/lowcode/workflow', 
            from: ['/docs/workflow'], 
          },
	  {
            to: '/docs/lowcode/triggers', 
            from: ['/docs/triggers'], 
          },
	  {
            to: '/docs/lowcode/webhooks', 
            from: ['/docs/webhooks'], 
          },
          {
            to: '/docs/lowcode/fileupload', 
            from: ['/docs/fileupload'], 
          },
          {
            to: '/docs/lowcode/rest-apis', 
            from: ['/docs/rest-apis'], 
          },
          {
            to: '/docs/lowcode/oauth2login', 
            from: ['/docs/oauth2login'], 
          },
          {
            to: '/docs/lowcode/password-reminder', 
            from: ['/docs/password-reminder'], 
          },
          {
            to: '/docs/lowcode/serverless', 
            from: ['/docs/serverless'], 
          },
          {
            to: '/docs/lowcode/openwhisk-cli', 
            from: ['/docs/openwhisk-cli'], 
          },
          {
            to: '/docs/lowcode/create-serverless', 
            from: ['/docs/create-serverless'], 
          },
	  {
            to: '/docs/lowcode/use-serverless', 
            from: ['/docs/use-serverless'], 
          },
	  {
            to: '/docs/lowcode/openwhisk-actions', 
            from: ['/docs/openwhisk-actions'], 
          },
          {
            to: '/docs/lowcode/openwhisk-parameters', 
            from: ['/docs/openwhisk-parameters'], 
          },
          {
            to: '/docs/lowcode/openwhisk-annotations', 
            from: ['/docs/openwhisk-annotations'], 
          },
          {
            to: '/docs/lowcode/openwhisk-triggers', 
            from: ['/docs/openwhisk-triggers'], 
          },
          {
            to: '/docs/lowcode/openwhisk-sequences', 
            from: ['/docs/openwhisk-sequences'], 
          },
          {
            to: '/docs/lowcode/openwhisk-conductors', 
            from: ['/docs/openwhisk-conductors'], 
          },
          {
            to: '/docs/lowcode/openwhisk-packages', 
            from: ['/docs/openwhisk-packages'], 
          },
          {
            to: '/docs/lowcode/openwhisk-webactions', 
            from: ['/docs/openwhisk-webactions'], 
          },
          {
            to: '/docs/lowcode/openwhisk-alarms', 
            from: ['/docs/openwhisk-alarms'], 
          },
          {
            to: '/docs/lowcode/openwhisk-slack', 
            from: ['/docs/openwhisk-slack'], 
          },
          {
            to: '/docs/lowcode/openwhisk-websocket', 
            from: ['/docs/openwhisk-websocket'], 
          },
          {
            to: '/docs/lowcode/openwhisk-github', 
            from: ['/docs/openwhisk-github'], 
          },
          {
            to: '/docs/lowcode/actions-nodejs', 
            from: ['/docs/actions-nodejs'], 
          },
          {
            to: '/docs/lowcode/actions-python', 
            from: ['/docs/actions-python'], 
          },
          {
            to: '/docs/lowcode/actions-java', 
            from: ['/docs/actions-java'], 
          },
          {
            to: '/docs/lowcode/actions-swift', 
            from: ['/docs/actions-swift'], 
          },
          {
            to: '/docs/lowcode/actions-go', 
            from: ['/docs/actions-go'], 
          },
          {
            to: '/docs/lowcode/actions-php', 
            from: ['/docs/actions-php'], 
          },
          {
            to: '/docs/lowcode/actions-ruby', 
            from: ['/docs/actions-ruby'], 
          },
          {
            to: '/docs/lowcode/actions-rust', 
            from: ['/docs/actions-rust'], 
          },
          {
            to: '/docs/lowcode/actions-dotnet', 
            from: ['/docs/actions-dotnet'], 
          },
          {
            to: '/docs/lowcode/actions-docker', 
            from: ['/docs/actions-docker'], 
          },
          {
            to: '/docs/lowcode/hypi-cli-intro', 
            from: ['/docs/hypi-cli-intro'], 
          },
          {
            to: '/docs/lowcode/hypi-cli-flutter', 
            from: ['/docs/hypi-cli-flutter'], 
          },
          {
            to: '/docs/lowcode/hypi-cli-react', 
            from: ['/docs/hypi-cli-react'], 
          },
          {
            to: '/docs/lowcode/hypi-cli-angular', 
            from: ['/docs/hypi-cli-angular'], 
          },
          {
            to: '/docs/lowcode/hypi-cli-vuejs-composition', 
            from: ['/docs/hypi-cli-vuejs-composition'], 
          },
          {
            to: '/docs/lowcode/hypi-cli-vuejs-smartqueries', 
            from: ['/docs/hypi-cli-vuejs-smartqueries'], 
          },
          {
            to: '/docs/lowcode/graphql', 
            from: ['/docs/graphql'], 
          },
          {
            to: '/docs/lowcode/gql-introduction', 
            from: ['/docs/gql-introduction'], 
          },
          {
            to: '/docs/lowcode/gql-schema-types', 
            from: ['/docs/gql-schema-types'], 
          },
          {
            to: '/docs/lowcode/gql-queries', 
            from: ['/docs/gql-queries'], 
          },
          {
            to: '/docs/lowcode/gql-mutations', 
            from: ['/docs/gql-mutations'], 
          },
          {
            to: '/docs/lowcode/gql-interfaces', 
            from: ['/docs/gql-interfaces'], 
          },
          {
            to: '/docs/lowcode/core', 
            from: ['/docs/core'], 
          },
          {
            to: '/docs/lowcode/react-todo-app', 
            from: ['/docs/react-todo-app'], 
          },
          {
            to: '/docs/lowcode/hypi-angular', 
            from: ['/docs/hypi-angular'], 
          },
          {
            to: '/docs/lowcode/tutorials', 
            from: ['/docs/tutorials'], 
          },
          {
            to: '/docs/lowcode/gql-crud-tutorial', 
            from: ['/docs/gql-crud-tutorial'], 
          },
          {
            to: '/docs/lowcode/time-series-aggregations', 
            from: ['/docs/time-series-aggregations'], 
          },
          {
            to: '/docs/lowcode/ui-create-app', 
            from: ['/docs/ui-create-app'], 
          },
          {
            to: '/docs/lowcode/ui-create-release', 
            from: ['/docs/ui-create-release'], 
          },
          {
            to: '/docs/lowcode/ui-create-table-vb', 
            from: ['/docs/ui-create-table-vb'], 
          },
          {
            to: '/docs/lowcode/ui-create-table-gse', 
            from: ['/docs/ui-create-table-gse'], 
          },
          {
            to: '/docs/lowcode/ui-add-environment-var', 
            from: ['/docs/ui-add-environment-var'], 
          },
          {
            to: '/docs/lowcode/ui-add-dependencies', 
            from: ['/docs/ui-add-dependencies'], 
          },
          {
            to: '/docs/lowcode/ui-deprecate-publish', 
            from: ['/docs/ui-deprecate-publish'], 
          },
          {
            to: '/docs/lowcode/ui-create-instance', 
            from: ['/docs/ui-create-instance'], 
          },
          {
            to: '/docs/lowcode/ui-view-instance', 
            from: ['/docs/ui-view-instance'], 
          },
          {
            to: '/docs/lowcode/ui-instance-api-config', 
            from: ['/docs/ui-instance-api-config'], 
          },
          {
            to: '/docs/lowcode/ui-gql-config', 
            from: ['/docs/ui-gql-config'], 
          },
          {
            to: '/docs/lowcode/ui-gql-playground', 
            from: ['/docs/ui-gql-playground'], 
          },
          {
            to: '/docs/lowcode/ui-data-migration', 
            from: ['/docs/ui-data-migration'], 
          },
          {
            to: '/docs/lowcode/ui-real-time-streams', 
            from: ['/docs/ui-real-time-streams'], 
          },
          {
            to: '/docs/lowcode/glossary', 
            from: ['/docs/glossary'], 
          },
          {
            to: '/docs/lowcode/get-involved', 
            from: ['/docs/get-involved'], 
          }          
        ],
      },
    ],
  ],
};

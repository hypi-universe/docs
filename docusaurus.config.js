module.exports = {
  title: 'Hypi Platform Documentation',
  tagline: 'Lowcode application development platform',
  url: 'https://docs.hypi.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hypi-universe', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
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
        ],
      },
    ],
  ],
};

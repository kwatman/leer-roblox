// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leer roblox',
  tagline: '',
  url: 'https://github.com',
  baseUrl: '/leer-roblox/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dolfijn3000', // Usually your GitHub org/user name.
  projectName: 'Leer-roblox', // Usually your repo name.
  trailingSlash: false,
  staticDirectories: ['tutorials'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  //plugins
  plugins:[
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tycoon', // omitted => default instance
        path: './projecten/tycoon',
        routeBasePath: '/projecten/tycoon',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials', // omitted => default instance
        path: './tutorials',
        routeBasePath: '/tutorials',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ], 
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'coach', // omitted => default instance
        path: './coach',
        routeBasePath: '/coach',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Leer roblox',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Info',
          },
          {to: '/tutorials', label: 'Tutorials', position: 'left'},
          {to: '/projecten', label: 'Projecten', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/dolfijn3000/leer-roblox',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
       
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata : [{name: 'google-site-verification',content:"aM4ZGl8sQB5xydE2VA3uaUGukqpyXgzgLWsn8O3ZUKc"}]
    }),
};

module.exports = config;

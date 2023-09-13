// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HackZurich 2023 - Microsoft Azure Landing Page',
  tagline: 'Build awesome stuff with Microsoft Azure OpenAI Services',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://green-stone-0a07a7303.3.azurestaticapps.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'faxg', // Usually your GitHub org/user name.
  projectName: 'hackzurich2023', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/faxg/AzureHackathonStarter2023/tree/hackzurich2023/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/faxg/AzureHackathonStarter2023/tree/hackzurich2023/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Microsoft @ HackZurich 2023',
        logo: {
          alt: 'MSFT + HackZurich Logo',
          src: 'img/hackzurich2023.png',
        },
        items: [
          {
            label: 'Getting Started',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
          },
          {
            label: 'Blog',
            position: 'left',
            to: '/blog',
          },
          {
            label: 'GitHub',
            position: 'right',
            href: 'https://github.com/faxg/AzureHackathonStarter2023/tree/hackzurich2023/',
          },
          {
            label: 'GitHub',
            position: 'right',
            href: 'https://github.com/faxg/AzureHackathonStarter2023/tree/hackzurich2023/',
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community support',
            items: [
              {
                label: 'Microsoft Teams - Channel',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/azure',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/faxg/AzureHackathonStarter2023/tree/hackzurich2023/',
              },
            ],
          },
        ],
        copyright: `MIT License. Made with LOVE in ${new Date().getFullYear()} by the contributors. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

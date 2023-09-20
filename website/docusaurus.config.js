// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microsoft @ Bison Innovation Days 2023',
  tagline: 'Build awesome stuff with Microsoft Azure Cloud',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
   url: 'https://polite-water-08501fe03.3.azurestaticapps.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'faxg', // Usually your GitHub org/user name.
  projectName: 'bisoninnovationdays2023', // Usually your repo name.

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
            'https://github.com/faxg/AzureHackathonStarter2023/tree/BisonInnovationDays2023/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/faxg/AzureHackathonStarter2023/tree/BisonInnovationDays2023/website',
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
        title: 'Microsoft @ Bison Innovation Days 2023',
        logo: {
          alt: 'MSFT + Bison Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Getting Started',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
          },
          {
            label: 'GitHub',
            position: 'right',
            href: 'https://github.com/faxg/AzureHackathonStarter2023/tree/BisonInnovationDays2023/',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Microsoft Learn',
                href: 'https://learn.microsoft.com/?ocid=aidXXX',
              },
              {
                label: 'Collection: Use Azure OpenAI Service',
                href: 'https://learn.microsoft.com/en-us/users/jasdeb/collections/4oefo3dozy48y',
              },
              {
                label: 'Introduction to Generative AI',
                href: 'https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/',
              },
              {
                label: "Azure OpenAI Exercises",
                href: "https://microsoftlearning.github.io/mslearn-openai/"
              },
              {
                label: "Semantic Kernel Github Repository",
                href: "https://github.com/microsoft/semantic-kernel/tree/main"
              },
              {
                label: "Semantic Kernel - Python Notebooks",
                href: "https://github.com/microsoft/semantic-kernel/tree/main/python/notebooks"
              },
              {
                label: 'Microsoft.Source Newsletter',
                href: 'https://aka.ms/newsletter-BisonInnovationDays2023',
              },


            ],
          },
          {
            title: 'Community support',
            items: [
              {
                label: 'Microsoft Teams Channel',
                href: 'https://bing.com',
              },
              {
                label: 'Microsoft Tech Community',
                href: 'https://techcommunity.microsoft.com/',
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
                label: 'Location (Bison HQ)',
                href: 'https://www.google.com/maps/place/Halle+550/@47.4117193,8.5350726,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa11aa6af0dcf:0xb29f6dc832ab4bab!8m2!3d47.4117158!4d8.5399435!16s%2Fg%2F11ddwnt4gz?entry=ttu'
              },
              {
                label: 'Innovation Day 2023 Schedule',
                href: 'https://bing.com/schedule',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/faxg/AzureHackathonStarter2023/tree/BisonInnovationDays2023/',
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

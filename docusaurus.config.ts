import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import unityComponentLinks from './src/remark/unityComponentLinks'

const config: Config = {
  title: 'Silksprite Spindle',
  tagline: 'A monodocument for all Unity tools by kaikoga',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.kaikoga.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'kaikoga', // Usually your GitHub org/user name.
  // projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    }
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // because we are already under /docs
          sidebarPath: './sidebars.ts',
          remarkPlugins: [
            unityComponentLinks
          ]
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/sstr16_512.png',
    navbar: {
      title: 'Silksprite Spindle',
      logo: {
        alt: 'My Site Logo',
        src: 'img/sstr16_120.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/kaikoga/EmoteWizard-Unity',
          label: 'GitHub',
          position: 'right',
          baseRegex: 'emotewizard',
        },
        {
          href: 'https://github.com/kaikoga/AvatarTinkerVista-Unity',
          label: 'GitHub',
          position: 'right',
          baseRegex: 'ativ',
        },
        {
          href: 'https://github.com/kaikoga/QuestReplacer-Unity',
          label: 'GitHub',
          position: 'right',
          baseRegex: 'questreplacer',
        },
        {
          href: 'https://github.com/kaikoga/Modularizer-Unity',
          label: 'GitHub',
          position: 'right',
          baseRegex: 'modularizer',
        },
      ],
    },
    footer: {
      style: 'dark',
      /*
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'BOOTH',
              href: 'https://kaikoga.booth.pm/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kaikoga/docs',
            },
          ],
        },
      ],
      */
      copyright: `Copyright © ${new Date().getFullYear()} kaikoga. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

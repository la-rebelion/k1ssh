import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'K1s, Simplifying Kubernetes',
  tagline: 'K1s is the fastest way to improve your Kubernetes eXperience (KX).',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://k1s.sh',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'la-rebelion', // Usually your GitHub org/user name.
  projectName: 'k1ssh', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        // I am going to keep and maintain the blog at La Rebelion
        blog: false, // Optional: disable the blog plugin
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-345615505',
        },
        googleTagManager: {
          containerId: 'GTM-5LW4VPS4',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'K1s, Simplifying Kubernetes',
      logo: {
        alt: 'K1s Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { href: 'https://rebelion.la', label: 'Blog', position: 'left'},
        { to: '/airgap', label: 'Airgap', position: 'right' },
        {
          href: 'https://go.rebelion.la/sponsors',
          label: 'Sponsor',
          position: 'right',
        },
        {
          href: 'https://www.buymeacoffee.com/larebelion',
          label: 'Add Cafeine ☕',
          position: 'right',
        },
        {
          label: 'Newsletter',
          position: 'right',
          to: '/' //'/newsletter',
        },
        {
          href: 'https://github.com/la-rebelion',
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
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn Follow',
              href: 'https://https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=adrianescutia',
            },
            {
              label: 'Add Caffeine',
              href: 'https://www.buymeacoffee.com/larebelion',
            },
            {
              label: 'LinkedIn Company',
              href: 'https://www.linkedin.com/company/larebelion-labs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'La Rebelion',
              to: 'https://rebelion.la',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/la-rebelion',
            },
            {
              label: 'K1s Terminal',
              href: 'https://k1s.sh',
            },
            {
              label: 'APICove',
              href: 'https://apicove.com',
            }
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://apicove.com/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://apicove.com/terms',
            },
          ],
        },
        // {
        //   title: 'Subscribe to our Newsletter',
        //   items: [
        //     {
        //       html: `<HubSpotForm divider={false} />`,
        //     },
        //   ],
        // }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} K1s. By La Rebelion.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: 'https://js.hsforms.net/forms/embed/v2.js',
      async: true,
    },
  ],
};

export default config;

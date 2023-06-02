// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const COPYRIGHT = `Copyright © ${new Date().getFullYear()} Min Pan, Inc. Built with Docusaurus.`;
const ICP = `<a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2023002394号-1</a>`;
const BEIAN = `<img src="img/beian.png" alt="备案图标" />`;
const GONGAN = `<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61011302001629" >陕公网安备 61011302001629号</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coder Club',
  favicon: 'img/favicon.ico',

  url: 'https://www.coderclub.com.cn',
  baseUrl: '/',

  organizationName: 'pm0915',
  projectName: 'pm0915.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'Coder Club',
        items: [
          {
            to: '/',
            label: '首页',
            position: 'right'
          },
          {
            to: '/about',
            label: '关于',
            position: 'right'
          },
          {
            to: '/example',
            label: '示例',
            position: 'right'
          },
          {
            href: 'https://github.com/pm0915/pm0915.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pm0915/',
              },
            ],
          },
        ],
        copyright: `<p>${COPYRIGHT}</p><div>${ICP}${BEIAN}${GONGAN}</div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

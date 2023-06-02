// Description: Docusaurus 配置文件

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const COPYRIGHT = 'Copyright © 2023 Leaf. Built with Docusaurus.';
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
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
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
      algolia: {
        appId: 'I3BD6VSFZC',
        apiKey: '2058c8b679bc6e4dcdd35e3fe2fc909d',
        indexName: 'coderclub-com',
        contextualSearch: true,
      },
      navbar: {
        title: 'Coder Club',
        hideOnScroll: true,
        items: [
          {
            to: '/',
            label: '首页',
            position: 'right'
          },
          {
            to: '/docs/',
            label: '文档',
            position: 'right',
            items: [
              {
                label: '前端',
                to: '/docs/web/',
              },
              {
                label: '后端',
                to: '/docs/backend/',
              },
              {
                label: 'WebRTC',
                to: '/docs/webrtc/',
              },
            ],
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
            label: 'GitHub',
            position: 'right',
            href: 'https://github.com/pm0915/pm0915.github.io',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '导航',
            items: [
              {
                to: '/',
                label: '首页',
                position: 'right'
              },
              {
                to: '/docs/',
                label: '文档',
                position: 'right',

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
            ],
          },
          {
            title: '社区',
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
              {
                label: 'GitHub',
                href: 'https://github.com/pm0915/',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: 'Literal',
                href: 'https://wiki.literalkernel.work',
              }
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

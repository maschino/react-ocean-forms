module.exports = {
  title: 'react-ocean-forms',
  tagline:
    'react-ocean-forms is a flexible and lightweight framework for rendering and validating forms with React.',
  url: 'https://maschino.github.io', // TODO: Change before PR
  baseUrl: '/react-ocean-forms/',
  favicon: 'img/favicon.ico',
  organizationName: 'maschino', // TODO: Change before PR
  projectName: 'react-ocean-forms', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'React Ocean Forms',
      logo: {
        alt: 'React Ocean Forms Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/introduction/getting_started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/maschino/react-ocean-forms', // TODO: Change before PR
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
              label: 'Getting started',
              to: 'docs/introduction/getting_started',
            },
            {
              label: 'Components',
              to: 'docs/components/react-ocean-forms/Form',
            },
            {
              label: 'API Reference',
              to: 'docs/api/react-ocean-forms/modules/form',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/maschino/react-ocean-forms', // TODO: Change before PR
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Umweltbundesamt GmbH. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

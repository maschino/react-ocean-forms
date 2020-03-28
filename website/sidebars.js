function getApiSidebarContent(moduleName) {
  return [];
}

module.exports = {
  docs: {
    Docusaurus: ['doc1'],

    'API Reference': [
      {
        type: 'category',
        label: 'react-ocean-forms',
        items: getApiSidebarContent('react-ocean-forms'),
      },

      {
        type: 'category',
        label: 'react-ocean-forms-react-intl',
        items: [
          {
            type: 'category',
            label: 'Modules',
            items: [
              'api/react-ocean-forms-react-intl/modules/_intlform_',
              'api/react-ocean-forms-react-intl/modules/_intlform_types_',
            ],
          },
          {
            type: 'category',
            label: 'Interfaces',
            items: [
              'api/react-ocean-forms-react-intl/interfaces/_intlform_types_.iintlformprops',
              'api/react-ocean-forms-react-intl/interfaces/_intlform_types_.iintlformprops',
            ],
          },
        ],
      },

      {
        type: 'category',
        label: 'react-ocean-forms-bootstrap',
        items: getApiSidebarContent('react-ocean-forms-bootstrap'),
      },
    ],
  },
};

const fs = require('fs');
const path = require('path');

function getApiSidebarContent(moduleName) {
  const sidebarFileLocation = path.resolve(__dirname, 'api_sidebars/', `${moduleName}.json`);
  if (fs.existsSync(sidebarFileLocation)) {
    const sidebarContent = require(sidebarFileLocation);
    return sidebarContent;
  }

  return ['api_autogenerated'];
}

module.exports = {
  docs: {
    Introduction: ['introduction/installation', 'introduction/getting_started'],

    Components: [
      {
        type: 'category',
        label: 'react-ocean-forms',
        items: [
          'components/react-ocean-forms/Form',
          'components/react-ocean-forms/FieldGroup',
          'components/react-ocean-forms/ValidationSummary',
          'components/react-ocean-forms/Input',
          'components/react-ocean-forms/FormButton',
          'components/react-ocean-forms/FormText',
        ],
      },
    ],

    'API Reference': [
      {
        type: 'category',
        label: 'react-ocean-forms',
        items: getApiSidebarContent('react-ocean-forms'),
      },
      {
        type: 'category',
        label: 'react-ocean-forms-bootstrap',
        items: getApiSidebarContent('react-ocean-forms-bootstrap'),
      },
      {
        type: 'category',
        label: 'react-ocean-forms-react-intl',
        items: getApiSidebarContent('react-ocean-forms-react-intl'),
      },
    ],
  },
};
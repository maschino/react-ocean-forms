const path = require('path');
const fs = require('fs');

const apiDocPrefix = 'api/';
const projectName = path.basename(process.cwd());
const sidebarLocation = path.resolve(__dirname, '../website/website/sidebars.js');
const resultLocation = path.resolve(__dirname, `../website/api_sidebars/${projectName}.json`);

console.log('Updating API doc sidebar file');
if (!fs.existsSync(sidebarLocation)) {
  console.error(`Could not find sidebar file in ${sidebarLocation}`);
  process.exit(1);
}

const sidebarContent = require(sidebarLocation);
const mappedDocumentationEntries = Object.entries(sidebarContent.docs).map(
  ([categoryName, categoryEntries]) => ({
    type: 'category',
    label: categoryName,
    items: categoryEntries.map((entry) => {
      const prefix = `${apiDocPrefix}${projectName}/`;

      if (entry.startsWith(prefix)) {
        return entry;
      } else {
        return `${prefix}${entry}`;
      }
    }),
  })
);

if (fs.existsSync(resultLocation)) {
  console.log('Removing existing generated sidebar file');
  fs.unlinkSync(resultLocation);
}
fs.writeFileSync(resultLocation, JSON.stringify(mappedDocumentationEntries));

console.log('Removing parsed sidebar file');
fs.unlinkSync(sidebarLocation);

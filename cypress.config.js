const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: "29e68h",
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readCsvFile() {
          const csvFilePath = path.join(__dirname, 'cypress', 'fixtures', 'links.csv');
          const csvData = fs.readFileSync(csvFilePath, 'utf8');
          return csvData;
        }
      });
    }
  }
});

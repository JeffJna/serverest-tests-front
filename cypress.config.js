const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));

      on('task', {
        salvarEmail(email) {
          const filePath = path.resolve('cypress/fixtures/emails.json');
          let dados = [];
      
          if (fs.existsSync(filePath)) {
            dados = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          }
      
          dados.push({ email, data: new Date().toISOString() });
          fs.writeFileSync(filePath, JSON.stringify(dados, null, 2));
          return true;
        }
      });

      return config;
    }
  }
});

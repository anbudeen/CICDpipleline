const { defineConfig } = require("cypress");

module.exports = defineConfig({
 reporter: "cypress-mochawesome-reporter",
      reporterOptions: {
        reportPageTitle: "My Cypress Test Results",
        embeddedScreenshots: true,
        charts: true,
      },
        video: true,
        screenshotsFolder:'cypress/screenshots',
        
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

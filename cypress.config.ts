import { defineConfig } from 'cypress';

export default defineConfig({
  watchForFileChanges: true,
  e2e: {
    specPattern: 'cypress/e2e/**/*.*',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

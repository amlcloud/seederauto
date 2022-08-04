import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'w6b9w5', // <- add this line
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'aml test automation report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:browser:launch', (browser, launchOptions) => {
        console.log(launchOptions.args)
      
        if (browser.family === 'chromium') {
         // launchOptions.args.push('--auto-open-devtools-for-tabs');
          launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");

        }
        return launchOptions;
      });
    },
    baseUrl: 'https://data.amlcloud.io',
    defaultCommandTimeout:30000,
    numTestsKeptInMemory:100,
    chromeWebSecurity: false,
    includeShadowDom:true,
    pageLoadTimeout:60000,
    video:false,
    trashAssetsBeforeRuns:true
  }
});

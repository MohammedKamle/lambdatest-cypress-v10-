module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  reporter: 'junit',
  experimentalWebKitSupport: true,
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
}
}

// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   reporter: 'junit',
//   reporterOptions: {
//     mochaFile: 'results/my-test-output.xml',
//     toConsole: true,
//   },
// })
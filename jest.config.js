module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
  	"**/*.{js,vue}", 
  	"!**/node_modules/**",
  	"!**/coverage/**",
  	"!**/src/router/**"
  ],
  coverageReporters: ["html", "text-summary"]
}

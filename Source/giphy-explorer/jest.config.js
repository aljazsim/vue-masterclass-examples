module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.vue",
    "!src/**/config.js"
  ],
  setupFiles: ["./tests/unit/setup.js"]
};

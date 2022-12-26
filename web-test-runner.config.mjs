export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  timeout: 10000,
  coverageConfig: {
    threshold: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  }
};

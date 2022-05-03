export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  }
};

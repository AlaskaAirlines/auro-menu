export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  }
};

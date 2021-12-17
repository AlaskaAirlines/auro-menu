export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    }
  }
};

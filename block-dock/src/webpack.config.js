const path = require('path');

module.exports = {
  // ...existing configuration...
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify"),
      "path": require.resolve("path-browserify"),
      "fs": false
    }
  },
  // ...existing configuration...
};
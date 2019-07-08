"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  extends: "./base/index",
  rules: {
    // Disabled because TypeScript handles this already
    "no-unused-vars": "off"
  }
};

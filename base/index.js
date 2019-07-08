"use strict";

module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["eslint-plugin-import-helpers"],
  rules: {
    // Sort imported members
    "sort-imports": ["error", { ignoreDeclarationSort: true }],

    // Group types of imports
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ]
  }
};

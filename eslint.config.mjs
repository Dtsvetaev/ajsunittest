import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    ignores: [
      "node_modules/**",     
      "coverage/**"          
    ],
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    files: ["**/*.test.js"],
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];


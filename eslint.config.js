// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules/**"], // Ignore node_modules
  },
  js.configs.recommended, // Use recommended ESLint rules
  prettier, // Disable conflicting Prettier rules
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Enable ES modules
    },
    rules: {
      "no-unused-vars": "warn", // Warn instead of error for unused variables
      "no-console": "off", // Allow console logs
      semi: ["error", "always"], // Enforce semicolons
    },
  },
];

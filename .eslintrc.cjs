module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  env: {
    commonjs: true,
    es2022: true,
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "unused-imports", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-const" },
      { blankLine: "always", prev: "multiline-const", next: "*" },
    ],

    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["dist/*"],
  settings: {
    react: {
      version: "detect",
    },
  },
}

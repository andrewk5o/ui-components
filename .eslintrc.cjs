module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    commonjs: true,
    es2022: true,
    browser: true,
    node: true,
  },
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-const" },
      { blankLine: "always", prev: "multiline-const", next: "*" },
    ],
  },
}

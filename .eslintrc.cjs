module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "13",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};

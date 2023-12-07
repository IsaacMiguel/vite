module.exports = {
  extends: ["semistandard", "plugin:react/recommended"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": [
      "error",
      {
        arrays: "always",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}

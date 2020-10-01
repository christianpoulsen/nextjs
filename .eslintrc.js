module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json"
    ]
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "quotes": "off",
    "comma-spacing": "off",
    "@typescript-eslint/quotes": ["error"],
    "@typescript-eslint/comma-spacing": ["error"]
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ]
}
# NextJS, TypeScript and ESLint

For this project, I will be playing around with multiple tools,
such as NextJS, TypeScript and ESLint.

## NextJS

## TypeScript

## ESLint 

```
$ yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

`.eslintignore`
```
node_modules
dist
coverage
```

`.eslintrc`
```
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ]
}
```


Adding an extra (but slow) level of Type Aware linting:
`.eslintrc`
```
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "tsconfigRootDir": "__dirname",
        "project": ["./tsconfig.json"],  
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ]
}
```

### Webstorm

Settings > Languages and Frameworks > JavaScript > Code Quality > ESLint > Set automatic

## Prettier

```
yarn add -D prettier eslint-config-prettier
```

```
  module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
+     'prettier',
+     'prettier/@typescript-eslint',
    ],
  };
```
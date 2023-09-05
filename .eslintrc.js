module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // ecmaVersion: 12,
    // sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import", "simple-import-sort", "unused-imports", "folders", "hexagonal-architecture"],
  rules: {
    //error prevention
    "array-callback-return": ["error", { checkForEach: true }],
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",

    // good practices
    camelcase: "error",
    "no-var": "error",

    // style
    semi: ["error", "always"],
    quotes: ["error", "double"],

    // plugins
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
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
    "folders/match-regex": ["error", "^[a-z-]+$", "/js/"],
    "@typescript-eslint/no-non-null-assertion": "off"
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["src/modules/**/*.ts"],
      rules: {
        "hexagonal-architecture/enforce": ["error"],
      },
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: "./tsconfig.json",
      },
    },
  },
};

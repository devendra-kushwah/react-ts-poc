module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {
    // General ESLint rules
    indent: ["error", 2],
    quotes: ["error", "double"], // Set quotes to double
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "off",

    // React-specific ESLint rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off", // Disable prop-types rule when using TypeScript

    // TypeScript-specific ESLint rules
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-empty-interface": "warn",

    // Additional TypeScript rules
    "@typescript-eslint/ban-ts-comment": "off", // Allow @ts-ignore comments
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false, // Allow empty objects in certain cases
        },
      },
    ],
    "@typescript-eslint/no-var-requires": "off", // Allow using require for importing
  },
};

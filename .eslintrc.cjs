module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:tailwindcss/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      arrowFunctions: true,
    },
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": [
      "off",
      {
        target: "single",
      },
    ],
    "tailwindcss/no-custom-classname": [
      "off",
      {
        config: "tailwind.config.cjs",
      },
    ],
    "react/no-unescaped-entities": [
      "off",
      {
        forbid: [],
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};

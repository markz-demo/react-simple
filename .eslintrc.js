module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
  ],
  "settings": {
    react: {
      version: "18.x"
    }
  },
  "globals": {
    module: "readonly",
    require: "readonly",
    process: "readonly",
    __dirname: "readonly",
  },
  "rules": {
    // off some recommendeds
    'react/react-in-jsx-scope': "off",
    'react/prop-types': "off",

    // hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",


    // enhances error
    "semi": "error",
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": "error",
    "radix": "error",
    "no-const-assign": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
    "no-self-compare": "error",
    "guard-for-in": "error",
    "default-param-last": "error",
    "array-callback-return": ["error", { "allowImplicit": false, "checkForEach": false }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
    "no-shadow": "error",
    "no-duplicate-imports": "error",

    // enhances warn
    "no-unused-vars": ["warn", {
      "args": "none",
      "caughtErrors": "none",
      "ignoreRestSiblings": true,
      "vars": "all",
    }],

  }
};

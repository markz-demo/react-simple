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
    'react/react-in-jsx-scope': "off"
  }
};

module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "plugins": ["security"],
  "extends": ["plugin:security/recommended"],
  "rules": {
    "semi":"error",
    "no-var": 2,
    "eol-last": 2
  }
};

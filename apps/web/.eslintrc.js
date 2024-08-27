/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/next.js"],
  ignorePatterns: [
    ".*.js",
    "next.config.js",
  ]
};

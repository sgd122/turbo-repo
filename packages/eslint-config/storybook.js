/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "@repo/eslint-config/library",
        "plugin:storybook/recommended",
        "plugin:mdx/recommended",
    ],
};

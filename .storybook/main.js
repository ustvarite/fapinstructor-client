module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "storybook-preset-craco",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "none",
    // TODO: Renable docgen when https://github.com/styleguidist/react-docgen-typescript/issues/356 is fixed
    // reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};

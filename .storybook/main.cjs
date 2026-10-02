const { dirname, join, resolve } = require("path");

module.exports = {
    stories: ["../**/src/**/*.stories.tsx"],
    addons: [getAbsolutePath("@storybook/addon-docs")],

    typescript: {
        reactDocgen: false,
    },

    async viteFinal(config) {
        const { mergeConfig } = await import("vite");
        const wyw = await import("@wyw-in-js/vite");
        return mergeConfig(config, {
            resolve: {
                alias: {
                    // Real faker v10 is ESM-only; wyw-in-js evaluates stories in a Node VM and crashes on it.
                    "@faker-js/faker": resolve(__dirname, "faker-stub.js"),
                },
            },
            plugins: [wyw.default()],
        });
    },

    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {},
    },
};

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}

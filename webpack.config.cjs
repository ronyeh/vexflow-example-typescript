const path = require("path");

module.exports = {
    mode: "production",
    context: __dirname,
    entry: {
        app: "./app.ts",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        library: "MyTSDemo",
        libraryTarget: "umd",
        globalObject: "(typeof self !== 'undefined' ? self : this)",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: { configFile: "tsconfig.json" },
                    },
                ],
                exclude: /(node_modules)/,
            },
        ],
    },
};

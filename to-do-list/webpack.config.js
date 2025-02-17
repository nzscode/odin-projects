const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: "./src/index.html",
            scriptLoading: "blocking",
        }),
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

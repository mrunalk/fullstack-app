const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const ClearWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common,{
    mode: "production",
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css"}),
        new ClearWebpackPlugin()
    ],
    module : {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
        ]
    }
});

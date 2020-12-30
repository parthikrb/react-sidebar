import { resolve } from "path";

export const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
export const title = "React Sample Components Library";
export const styleguideDir = "dist-docs";
export const moduleAliases = {
    "react-sample-components-library": resolve(__dirname, "src")
};
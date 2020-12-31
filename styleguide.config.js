const path = require('path')

module.exports = {
    title: 'React Sidebar',
    styleguideDir: "dist-docs",
    moduleAliases: {
        "react-sidebar": path.resolve(__dirname, "src")
    },
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        }
    }

}


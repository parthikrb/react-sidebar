import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import packageJSON from "./package.json";

const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
    // CommonJS
    {
        input,
        output: {
            file: packageJSON.main,
            format: "cjs",
            sourcemap: true
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-router/node_modules/react-is/index.js': ['isValidElementType']
                }
            })
        ]
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.main),
            format: "cjs",
            sourcemap: true
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-router/node_modules/react-is/index.js': ['isValidElementType']
                }
            }),
            uglify()
        ]
    },
    // UMD
    {
        input,
        output: {
            file: packageJSON.browser,
            format: "umd",
            sourcemap: true,
            name: "reactSampleComponentsLibrary",
            globals: {
                react: "React",
                "@emotion/styled": "styled",
                "@emotion/react": "emotion-react",
                "prop-types": "prop-types",
                "@fortawesome/fontawesome-svg-core": "fontawesome-svg-core",
                "@fortawesome/free-solid-svg-icons": "free-solid-svg-icons",
                "@fortawesome/react-fontawesome": "react-fontawesome"
            }
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-router/node_modules/react-is/index.js': ['isValidElementType']
                }
            })
        ]
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.browser),
            format: "umd",
            sourcemap: true,
            name: "reactSampleComponentsLibrary",
            globals: {
                react: "React",
                "@emotion/styled": "styled",
                "@emotion/react": "emotion-react",
                "prop-types": "prop-types",
                "@fortawesome/fontawesome-svg-core": "fontawesome-svg-core",
                "@fortawesome/free-solid-svg-icons": "free-solid-svg-icons",
                "@fortawesome/react-fontawesome": "react-fontawesome"
            }
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-router/node_modules/react-is/index.js': ['isValidElementType']
                }
            }),
            terser()
        ]
    },
    // ES
    {
        input,
        output: {
            file: packageJSON.module,
            format: "es",
            sourcemap: true,
            exports: "named"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-router/node_modules/react-is/index.js': ['isValidElementType']
                }
            })
        ]
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.module),
            format: "es",
            sourcemap: true,
            exports: "named"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-router/node_modules/react-is/index.js': ['isValidElementType']
                }
            }),
            terser()
        ]
    }
];
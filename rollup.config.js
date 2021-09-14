import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const extensions = [
    '.js',
    '.ts',
    '.tsx'
]

export default {
    input: "./src/index.tsx",
    output: {
        format: 'esm',
        file: './lib/index.js',
    },
    external: ['react', 'react-dom', 'classnames'],
    globals: {
        classnames: 'classnames',
        react: 'React',
        'react-dom': 'React-dom'
    },
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        typescript({
            tsconfig: path.resolve(__dirname, "tsconfig.json"),
            extensions
        }),
        nodeResolve(extensions),
        babel({ babelHelpers: 'bundled', exclude: "node_modules/**" }),
        commonjs(), 
    ]
}
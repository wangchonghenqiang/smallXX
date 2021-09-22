import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'

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
        exclude: 'node_modules/**',
        include: 'src'
    },
    plugins: [
        typescript({
            tsconfig: path.resolve(__dirname, "tsconfig.json"),
            extensions:[
                '.js',
                '.ts',
                '.tsx'
            ]
        }),
        nodeResolve(),
        babel({ babelHelpers: 'bundled', exclude: "node_modules/**" }),
        commonjs(),
        serve({
            // Launch in browser (default: false)
            open: true,
            // Multiple folders to serve from
            contentBase: ['lib', 'examples'],
            host: 'localhost',
            port: 10001,
        }),
        livereload({watch: 'src'})
    ]
}
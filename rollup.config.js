export default {
    input: "src/main.js",
    output: {
        file: "dist/main.js",
        format: 'umd'
    },
    sourcemap: true,
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: []
}
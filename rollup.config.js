export default {
    input: "src/main.js",
    output: {
        file: "dist/main.tsx",
        format: 'umd'
    },
    sourcemap: true,
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: []
}
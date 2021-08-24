const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
    entryPoints: ['frontend/main.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    logLevel: "info",
    watch: process.env['WATCH'] !== undefined,
    outfile: 'public/javascripts/bundled.js',
    plugins: [sassPlugin()]
}).catch((e) => console.error(e.message));

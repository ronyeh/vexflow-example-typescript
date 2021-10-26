# VexFlow TypeScript Example

You can build the app with any of the following:

-   Run `npm run webpack` to bundle the app with webpack.

-   Run `npm run esbuild` to bundle the app with esbuild.

To see the output, load `app-script-tag.html` in your browser.

To test the ES module version, start a web server (e.g., with `npx http-server`) and visit `http://127.0.0.1:8080/app-module.html`.

## tsconfig.json

To choose which font to statically compile into your app bundle, take a look at the `tsconfig.json`,
which uses path aliases to customize the entry point:

```
"vexflow/petaluma": ["node_modules/vexflow/entry/vexflow-petaluma.ts"],
```

## App Versions

This project was developed with the following app versions:

-   TypeScript 4.5.4
-   Webpack 5.65.0
-   Node 16.13.0
-   NPM version 8.1.0

The package.json exports field is relatively new.

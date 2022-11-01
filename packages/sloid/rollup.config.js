import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const plugins = [
  nodeResolve({
    extensions: [".js", ".ts"]
  }),
  babel({
    extensions: [".js", ".ts"],
    exclude: "node_modules/**",
    babelrc: false,
    babelHelpers: "bundled",
    presets: ["@babel/preset-typescript"]
  })
];

export default [
  {
    input: "src/browser-index.ts",
    output: [
      {
        file: "dist/browser-index.cjs",
        format: "cjs"
      },
      {
        file: "dist/browser-index.js",
        format: "es"
      }
    ],
    plugins
  },
  {
    input: "src/node-index.ts",
    output: [
      {
        file: "dist/node-index.cjs",
        format: "cjs"
      },
      {
        file: "dist/node-index.js",
        format: "es"
      }
    ],
    plugins
  },
  {
    input: "src/browser-web.ts",
    output: [
      {
        file: "dist/browser-web.cjs",
        format: "cjs"
      },
      {
        file: "dist/browser-web.js",
        format: "es"
      }
    ],
    plugins
  },
  {
    input: "src/node-web.ts",
    output: [
      {
        file: "dist/node-web.cjs",
        format: "cjs"
      },
      {
        file: "dist/node-web.js",
        format: "es"
      }
    ],
    plugins
  }
];

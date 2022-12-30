const pluginTypescript = require("rollup-plugin-typescript2");
const pluginBabel = require("rollup-plugin-babel");
const pluginVue = require("rollup-plugin-vue");
const pluginPostcss = require("rollup-plugin-postcss");
const pluginCommonjs = require("rollup-plugin-commonjs");

const config = {
  input: "./packages/index.js",
  output: [
    {
      file: "./lib/index.js",
      format: "cjs",
    },
    {
      file: "./lib/index.umd.js",
      format: "umd",
      name: "stone-ui-taro-vue",
    },
    {
      file: "./lib/index.esm.js",
      format: "es",
    },
  ],
  plugins: [
    pluginVue(),
    pluginTypescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          emitDeclarationOnly: true,
          noUnusedLocals: false,
          noUnusedParameters: false,
        },
        exclude: ["./example"],
      },
    }),
    pluginCommonjs({
      include: [/\/node_modules\//],
    }),
    pluginPostcss({
      extensions: [".less"],
      extract: "styles/index.css",
    }),
    pluginBabel({
      exclude: "node_modules/**",
      extensions: [".js", ".ts", ".vue"],
      runtimeHelpers: true,
    }),
  ],
  external: ["vue", "@tarojs/components", "@tarojs/runtime", "@tarojs/taro"],
};

module.exports = [config];

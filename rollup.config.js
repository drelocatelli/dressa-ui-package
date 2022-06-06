import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';

import pkg from "./package.json";
import path from "path";

export default {
   input: "src/index.ts",
   output: [
      {
         file: pkg["main-module"],
         format: "cjs",
         exports: "named",
         sourcemap: true,
         strict: false,
      },
      {
         file: pkg.module,
         format: 'esm',
         sourcemap: true,
      },
   ],
   plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: true }),
      postcss({
         extensions: ['.css'],
      }),
   ],
   external: ["react", "react-dom", /\.css$/],
};
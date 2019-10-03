/* eslint-disable import/no-extraneous-dependencies */
import { Config } from "bili";

const config: Config = {
  input: "src/colors.ts",
  output: {
    format: ["cjs-min", "esm-min", "umd-min"],
    moduleName: "LanguageColors"
  },
  plugins: {
    typescript2: {
      cacheRoot: "./.cache"
    }
  }
};

export default config;

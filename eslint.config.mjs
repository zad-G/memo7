import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },

  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "semi": [2, "never" ],
      "comma-dangle": [2, "never"]
    }
  }
]);

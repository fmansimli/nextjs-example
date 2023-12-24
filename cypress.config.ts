import { defineConfig } from "cypress";

export default defineConfig({
  extends: "./tsconfig.json",
  compilerOptions: {
    moduleResolution: "Node"
  }
});

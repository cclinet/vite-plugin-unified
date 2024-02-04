import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "unifiedPlugin",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["unified", "remark-parse", "remark-rehype", "rehype-stringify"],
    },
  },
});

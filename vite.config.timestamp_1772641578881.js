// vite.config.ts
import { defineConfig } from "vite";
import { contentCollections } from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
var vite_config_default = defineConfig({
  plugins: [
    contentCollections(),
    tailwindcss(),
    tsConfigPaths(),
    tanstackStart({
      target: "static"
    }),
    react()
  ]
});
export {
  vite_config_default as default
};

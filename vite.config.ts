import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://henrique-aguiar-dev.github.io/nbs-switch-react/",
  plugins: [react()],
});

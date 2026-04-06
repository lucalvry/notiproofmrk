import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const additionalRoutes = mode === "production"
    ? (await import("./src/routes-manifest.ts")).staticRoutes
    : [];

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      mode === "production" &&
        vitePrerenderPlugin({
          renderTarget: "#root",
          prerenderScript: "./src/entry-prerender.tsx",
          additionalPrerenderRoutes: additionalRoutes,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-3d/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          "gsap-vendor": ["gsap", "@gsap/react"],
        },
      },
    },
  },
});

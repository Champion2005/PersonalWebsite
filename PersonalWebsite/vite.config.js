import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
import process from "node:process";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "main.html",
  },
  root: "public",
  publicDir: "../public",
  build: {
    outDir: "../dist"
  },
  resolve: {
    alias: { "/public": path.resolve(process.cwd(), "public") }
  },
  plugins: [react()],
})


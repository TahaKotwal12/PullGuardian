import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// Import the plugin correctly
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), ...(tailwindcss() as any[])],  // Use type assertion to work around the type conflict
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
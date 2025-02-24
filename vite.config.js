import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   "import.meta.env.VITE_KEY": JSON.stringify(process.env.VITE_KEY),
// })

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react(), tailwindcss()],
  })
}

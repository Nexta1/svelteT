import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { resolve } from "path"

const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir)
}
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build")
}

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias
  }
})

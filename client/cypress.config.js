import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://fun-language-5622-frontend-seven.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

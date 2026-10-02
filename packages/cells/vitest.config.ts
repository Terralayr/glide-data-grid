import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        include: ["test/**/*.test.tsx", "test/**/*.test.ts"],
        environment: "jsdom",
        setupFiles: "vitest.setup.ts",
        pool: "forks",
        watch: false,
        clearMocks: true,
        maxConcurrency: 5,
        environmentOptions: {
            jsdom: {
                resources: "usable",
            },
        },
    },
});

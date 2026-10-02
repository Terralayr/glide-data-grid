import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        include: ["test/**/*.test.tsx", "test/**/*.test.ts"],
        environment: "jsdom",
        setupFiles: "vitest.setup.ts",
        watch: false,
        clearMocks: true,
        maxConcurrency: 8,
        coverage: {
            provider: "v8",
            reporter: ["text", "lcov"],
        },
        environmentOptions: {
            jsdom: {
                resources: "usable",
            },
        },
    },
});

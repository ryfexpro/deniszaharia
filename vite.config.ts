import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

import {
  higgsfieldDesignInspectorVitePlugin,
  higgsfieldDesignSourceBabelPlugin,
} from "./src/module/design-inspector/vite";

const QUANTA_ICONS_SHIM = fileURLToPath(
  new URL("./src/lib/quanta-icons.ts", import.meta.url),
);

export default defineConfig(({ mode }) => {
  const designInspectorEnabled =
    process.env.HF_DESIGN_INSPECTOR === "1" || mode === "design";

  return {
    define: {
      __HF_DESIGN_INSPECTOR__: JSON.stringify(designInspectorEnabled),
    },

    server: {
      watch: {
        usePolling: true,
        interval: 150,
      },
    },

    resolve: {
      tsconfigPaths: true,
      alias: [
        {
          find: /^@higgsfield-ai\/icons(\/.*)?$/,
          replacement: QUANTA_ICONS_SHIM,
        },
      ],
    },

    plugins: [
      svgr({
        svgrOptions: {
          icon: true,
          svgProps: {
            fill: "currentColor",
          },
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      }),

      higgsfieldDesignInspectorVitePlugin(designInspectorEnabled),

      react({
        babel: {
          plugins: designInspectorEnabled
            ? [higgsfieldDesignSourceBabelPlugin]
            : [],
        },
      }),

      tailwindcss(),
    ],
  };
});

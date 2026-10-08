import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  headers: {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "public, max-age=86400",
  },
  loader: () => {
    return [
      "User-agent: *",
      "Allow: /",
      "",
      "Sitemap: https://deniszaharia.com/sitemap.xml",
    ].join("\n");
  },
});

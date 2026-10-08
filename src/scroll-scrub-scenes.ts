import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#3156D8",
  background: "#080A0D",
  ink: "#F1EEE7",
  muted: "#8A909B",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Entrepreneur. Business builder. AI founder.",
    clip: "/assets/world/scene-01.mp4",
    id: "scene-01",
    kicker: "DENIS ZAHARIA",
    label: "DENIS ZAHARIA",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    tags: ["BUILD", "SCALE", "AUTOMATE"],
    title: "I DON'T FOLLOW THE NEXT WAVE. I BUILD ON IT.",
  },
];

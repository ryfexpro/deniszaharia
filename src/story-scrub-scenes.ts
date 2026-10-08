import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const storyScrubTheme: ScrollScrubTheme = {
  accent: "#3156D8",
  background: "#080A0D",
  ink: "#F1EEE7",
  muted: "#8A909B",
};

export const storyScrubScenes: ScrollScrubScene[] = [
  {
    id: "story-film",
    label: "DENIS ZAHARIA",
    kicker: "THE PERSON BEHIND THE SYSTEMS.",
    title: "BUILD. MOVE. LIVE.",
    body: "Business is the work. Life is the reason.",

    clip: "/assets/world/denis-story.mp4",

    /*
     * Пока намеренно используем desktop master и на телефоне.
     * Текущий denis-story-mobile.mp4 слишком сильно пережат.
     * Когда сделаем качественный mobile master — вернем mobileClip.
     */

    poster: "/assets/world/denis-story-poster.jpg",

    tags: ["BUILD", "MOVE", "LIVE"],

    // Меньше scroll-distance = ролик раньше и быстрее реагирует.
    scroll: 1.15,

    linger: 0,
    objectPosition: "50% 50%",
    mobileObjectPosition: "50% 50%",
  },
];

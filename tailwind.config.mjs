import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        shape: "border-radius, box-shadow, transform, border-width, top",
      },
      animation: {
        blink: "blink 1.5s steps(1) infinite",
        rotate: "rotate 6s ease-in-out infinite",
        emoticon: "emoticon 12s linear infinite",
      },
      keyframes: {
        blink: {
          "50%": { "border-color": "transparent" },
        },
        rotate: {
          "0%, 75%": { transform: "rotate(0deg)" },
          "25%, 50%": { transform: "rotate(360deg)" },
        },
        emoticon: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        azeret: ["var(--font-azeret)", "monospace"],
      },
      colors: {
        gruvboxDark: {
          bg: "#282828",
          bg0: "#282828",
          bgH: "#1d2021",
          bgXH: "#161818", // custom darker hard
          bgS: "#32302f",
          bg1: "#3c3836",
          bg2: "#504945",
          bg3: "#665c54",
          bg4: "#7c6f64",

          fg: "#ebdbb2",
          fg0: "#fbf1c7",
          fg1: "#ebdbb2",
          fg2: "#d5c4a1",
          fg3: "#bdae93",
          fg4: "#a89984",

          red: "#cc241d",
          red2: "#fb4934",
          green: "#98971a",
          green2: "#b8bb26",
          yellow: "#d79921",
          yellow2: "#fabd2f",
          blue: "#458588",
          blue2: "#83a598",
          purple: "#b16286",
          purple2: "#d3869b",
          aqua: "#689d6a",
          aqua2: "#8ec07c",
          orange: "#d65d0e",
          orange2: "#fe8019",
          gray: "#a89984",
          gray2: "#928374",
        },
        gruvbox: {
          bg: "#fbf1c7",
          bg0: "#fbf1c7",
          bgH: "#f9f5d7",
          bgS: "#f2e5bc",
          bg1: "#ebdbb2",
          bg2: "#d5c4a1",
          bg3: "#bdae93",
          bg4: "#a89984",

          fg: "#3c3836",
          fg0: "#282828",
          fg1: "#3c3836",
          fg2: "#504945",
          fg3: "#665c54",
          fg4: "#7c6f64",

          red: "#cc241d",
          red2: "#9d0006",
          green: "#98971a",
          green2: "#79740e",
          yellow: "#d79921",
          yellow2: "#b57614",
          blue: "#458588",
          blue2: "#076678",
          purple: "#b16286",
          purple2: "#8f3f71",
          aqua: "#689d6a",
          aqua2: "#427b58",
          orange: "#d65d0e",
          orange2: "#af3a03",
          gray: "#7c6f64",
          gray2: "#928374",
        },
      },
      typography: ({ theme }) => ({
        gruvbox: {
          css: {
            "--tw-prose-body": theme("colors.gruvbox.fg2"),
            "--tw-prose-headings": theme("colors.gruvbox.fg1"),
            "--tw-prose-lead": theme("colors.gruvbox.fg3"),
            "--tw-prose-links": theme("colors.gruvbox.blue2"),
            "--tw-prose-bold": theme("colors.gruvbox.fg1"),
            "--tw-prose-counters": theme("colors.gruvbox.fg4"),
            "--tw-prose-bullets": theme("colors.gruvbox.bg4"),
            "--tw-prose-hr": theme("colors.gruvbox.bg1"),
            "--tw-prose-quotes": theme("colors.gruvbox.fg3"),
            "--tw-prose-quote-borders": theme("colors.gruvbox.bg1"),
            "--tw-prose-captions": theme("colors.gruvbox.fg4"),
            "--tw-prose-code": theme("colors.gruvbox.fg0"),
            "--tw-prose-pre-code": theme("colors.gruvboxDark.fg"),
            "--tw-prose-pre-bg": theme("colors.gruvboxDark.bgH"),
            "--tw-prose-th-borders": theme("colors.gruvbox.bg2"),
            "--tw-prose-td-borders": theme("colors.gruvbox.bg1"),

            "--tw-prose-invert-body": theme("colors.gruvboxDark.fg3"),
            "--tw-prose-invert-headings": theme("colors.gruvboxDark.fg1"),
            "--tw-prose-invert-lead": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-links": theme("colors.gruvboxDark.blue2"),
            "--tw-prose-invert-bold": theme("colors.gruvboxDark.fg1"),
            "--tw-prose-invert-counters": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-bullets": theme("colors.gruvboxDark.bg4"),
            "--tw-prose-invert-hr": theme("colors.gruvboxDark.bg1"),
            "--tw-prose-invert-quotes": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-quote-borders": theme("colors.gruvboxDark.bg1"),
            "--tw-prose-invert-captions": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-code": theme("colors.gruvboxDark.fg0"),
            "--tw-prose-invert-pre-code": theme("colors.gruvboxDark.fg"),
            "--tw-prose-invert-pre-bg": theme("colors.gruvboxDark.bgH"),
            "--tw-prose-invert-th-borders": theme("colors.gruvboxDark.bg2"),
            "--tw-prose-invert-td-borders": theme("colors.gruvboxDark.bg1"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

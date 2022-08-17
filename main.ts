/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { config, setup } from "@twind";
import { virtualSheet } from "twind/sheets";

const sheet = virtualSheet();
sheet.reset();
setup({
  ...config,
  sheet,
  theme: {
    colors: {
      brandRed: "#F82929",
      brandRedHover: "#c52020",
      brandDarkBlue: "#001524",
      brandGrey: "#EAEAEA",

      sectionGrey: "#F9F9F9",
      sectionGreyDark: "#F0F0F0",

      white: "#FFFFFF",
      whiteHover: "#E7E7E7",

      titleLight: "#FFFFFF",
      titleDark: "#001524",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "Open Sans",
        src: 'url(../fonts/OpenSans-Light.woff2) format("woff2")',
        fontStyle: "normal",
        fontWeight: 300,
        fontDisplay: "swap",
      },
      {
        fontFamily: "Open Sans",
        src: 'url(../fonts/OpenSans-Regular.woff2) format("woff2")',
        fontStyle: "normal",
        fontWeight: 400,
        fontDisplay: "swap",
      },
      {
        fontFamily: "Open Sans",
        src: 'url(../fonts/OpenSans-Medium.woff2) format("woff2")',
        fontStyle: "normal",
        fontWeight: 500,
        fontDisplay: "swap",
      },
      {
        fontFamily: "Open Sans",
        src: 'url(../fonts/OpenSans-SemiBold.woff2) format("woff2")',
        fontStyle: "normal",
        fontWeight: 600,
        fontDisplay: "swap",
      },
      {
        fontFamily: "Open Sans",
        src: 'url(../fonts/OpenSans-Bold.woff2) format("woff2")',
        fontStyle: "normal",
        fontWeight: 700,
        fontDisplay: "swap",
      },
      {
        fontFamily: "Open Sans",
        src: 'url(../fonts/OpenSans-ExtraBold.woff2) format("woff2")',
        fontStyle: "normal",
        fontWeight: 800,
        fontDisplay: "swap",
      },
    ],
  },
});

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get("twind") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set("twind", newSnapshot);
}

await start(manifest, { render });

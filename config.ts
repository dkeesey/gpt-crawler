import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://help.figma.com/hc/en-us",
  match: "https://help.figma.com/hc/en-us/**",
  maxPagesToCrawl: 5000,
  outputFileName: "output.json",
};

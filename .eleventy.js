const now = new Date();

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");

  eleventyConfig.addWatchTarget("src");
  eleventyConfig.setServerOptions({
    liveReload: true
  });

  // Global data
  eleventyConfig.addGlobalData("buildTime", now);

  // Shortcodes
  eleventyConfig.addShortcode('version', function () {
    return String(now.getTime())
  });
  eleventyConfig.addShortcode('year', function () {
    return now.getFullYear()
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}

export const config = {
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk"
};

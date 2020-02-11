const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("webfonts/*.eot");
  eleventyConfig.addPassthroughCopy("webfonts/*.svg");
  eleventyConfig.addPassthroughCopy("webfonts/*.woff");
  eleventyConfig.addPassthroughCopy("webfonts/*.woff2");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

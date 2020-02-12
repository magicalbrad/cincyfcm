const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("webfonts/*.eot");
  eleventyConfig.addPassthroughCopy("webfonts/*.svg");
  eleventyConfig.addPassthroughCopy("webfonts/*.woff");
  eleventyConfig.addPassthroughCopy("webfonts/*.woff2");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("formatDate", function(input) {
    let yyyy = input.getFullYear();
    let mm = input.getMonth() + 1;
    let dd = input.getDate();
    return `${yyyy}-${mm.toString().padStart(2, "0")}-${dd.toString().padStart(2, "0")}`
  });
};

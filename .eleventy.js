const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("webfonts/*.*");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("formatDate", function(input) {
    let yyyy = input.getFullYear();
    let mm = (input.getMonth() + 1).toString().padStart(2, "0");
    let dd = input.getDate().toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`
  });
};

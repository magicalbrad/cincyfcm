const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/css");
  eleventyConfig.addPassthroughCopy("source/img");
  eleventyConfig.addPassthroughCopy("source/webfonts/");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("formatDate", function(input) {
    let yyyy = input.getFullYear();
    let mm = (input.getMonth() + 1).toString().padStart(2, "0");
    let dd = input.getDate().toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`
  });

	eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});

  return {
    dir: {
      input: "source"
    }
  };
};

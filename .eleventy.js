module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "jpg",
    "html",
    "css", // css is not yet a recognized template extension in Eleventy
  ]);
};

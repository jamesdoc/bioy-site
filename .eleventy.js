module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('src/assets/icon');

  // eleventyConfig.addWatchTarget('./src/admin/config.yml');
  // eleventyConfig.addWatchTarget('./src/assets/css/app.css');

  eleventyConfig.addLayoutAlias("default", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("commentary", "layouts/commentary.njk");

  return {
    dir: {
      includes: "_includes",
      data: "_data",
      input: 'src',
      output: 'build'
    },
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    passthroughFileCopy: true,
  };
};

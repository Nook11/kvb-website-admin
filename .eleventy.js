module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("imges");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("style.css");


  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
}; 

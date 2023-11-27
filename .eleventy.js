module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");

    // eleventyConfig.addCollection("recipies", function(collection) {
    //     return collection.getFilteredByGlob("recipies/**/*.njk");
    // });
};
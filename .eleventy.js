const inspect = require("util").inspect;
const dedent = require("dedent");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("inspect", inspect);

  eleventyConfig.addFilter("no_args", function (value) {
    return dedent`
      value=${ inspect(value) };
    `;
  });

  eleventyConfig.addFilter("one_arg", function (value, two) {
    return dedent`
      value=${ inspect(value) };
      two=${ inspect(two) };
    `;
  });

  eleventyConfig.addFilter("two_args", function (value, two, three) {
    return dedent`
      value=${ inspect(value) };
      two=${ inspect(two) };
      three=${ inspect(three) };
    `;
  });

  eleventyConfig.addFilter("args_with_defaults", function (value, two="(two default)", three={}) {
    // `three` is an object, assign some fallback/default values.
    three = Object.assign({}, {age: "old (default)"}, three);
    return dedent`
      value=${ inspect(value) };
      two=${ inspect(two) };
      three=${ inspect(three) };
    `;
  });

  eleventyConfig.addFilter("args_with_kwargs", function (value, two="(two default)", three="(three default)", kwargs={}) {
    return dedent`
      value=${ inspect(value) };
      two=${ inspect(two) };
      three=${ inspect(three) };
      kwargs=${ inspect(kwargs) };
    `;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};

const dedent = require("dedent");

module.exports = {
  data() {
    return {
      string: "The Quick Brown Fox Jumps Over the Lazy Cat",
      eleventyComputed: {
        title(data) {
          return `Testing filter arguments in ${data.versions.eleventy}`;
        },
      },
    };
  },

  async render(data) {
    return dedent`
      <h2>No arguments</h2>
      <pre data-no-arguments>${this.no_args(data.string)}</pre>
      
      <h2>One argument</h2>
      <pre data-one-argument>${this.one_arg(data.string, "OnE")}}</pre>
      
      <h2>Two arguments</h2>
      <pre data-two-arguments>${this.two_args(data.string, "oNe", "TwO")}}</pre>
      
      <h2>Two arguments, both undefined</h2>
      <pre data-arguments-empty>${this.two_args(data.string)}</pre>
      
      <h2>Two arguments, both optional (with defaults)</h2>
      <pre data-arguments-defaults>${this.args_with_defaults(
        data.string,
        "SeVeN",
        { name: "Paul" }
      )}</pre>
    `;
  },
};

module.exports = {
  eleventy: libVersion("@11ty/eleventy"),
  liquidjs: libVersion("liquidjs"),
  nunjucks: libVersion("nunjucks"),
};

function libVersion(pkgName) {
  const { name, version } = require(`${pkgName}/package.json`);
  return `${name}@${version}`;
}

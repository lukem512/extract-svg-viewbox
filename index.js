module.exports = function(svgStr) {
  const viewBoxRegex = /<svg [.* ]*viewBox=["'](\d+ \d+ \d+ \d+)["']/
  const matches = svgStr.match(viewBoxRegex)
  return matches && matches.length >= 2 ? matches[1] : null;
}

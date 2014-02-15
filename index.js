"use strict";
/**
 * Plugin for xCSS.
 */

var fs            = require('fs');
var requireAssets = require('require-assets');

/**
 * Dump collected registry onto filesystem.
 *
 * Command-line usage:
 *
 *    % xcss -t [ require-assets/xcss --output ./assets.json ] ...
 *
 * @param {xcss.om.Stylesheet} stylesheet
 * @param {Object} options
 */
module.exports = function(stylesheet, options) {
  var output = options && (options.o || options.output);

  if (!output) {
    throw new Error(
      'provide output for require-assets/browserify: ' +
      'xcss -t [ require-assets/xcss --output ./url-filename.json ] ...');
  }

  var registry = requireAssets.getRegistry(options);
  requireAssets.configure(registry);

  fs.writeFileSync(output, JSON.stringify(registry));

  return stylesheet;
};

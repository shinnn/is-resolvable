'use strict';

var util = require('util');

var tryit = require('tryit');

module.exports = function isResolvable(moduleId) {
  if (typeof moduleId !== 'string') {
    throw new TypeError(
      util.inspect(moduleId) +
      ' is not a string. Expected a valid Node module identifier, for example `eslint`, `./index.js`, `./lib`.'
    );
  }

  var result;
  tryit(function() {
    require.resolve(moduleId);
  }, function(err) {
    if (err) {
      result = false;
      return;
    }

    result = true;
  });

  return result;
};

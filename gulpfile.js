'use strict';

/**
 * Module dependencies
 */

var gulpUtil = require('gulp-util');
var path = require('centurion');

// use centurion

try {
  require(path.resolve(__dirname, gulpUtil.env.gulpfile));
} catch (err) {
  console.error('Unable to load %s', gulpUtil.env.gulpfile);
}
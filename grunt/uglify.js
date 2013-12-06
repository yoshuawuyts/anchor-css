'use strict';

module.exports = {
  options: {
    compress: {
      screw_ie8: true,
    },
    mangle: {
      screw_ie8: true,
    },
  },
  compile: {
    src: '.tmp/concat.js',
    dest: 'build/app.min.js',
  },
};

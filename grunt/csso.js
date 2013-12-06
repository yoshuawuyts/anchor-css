'use strict';

module.exports = {
  optimize: {
    options: {
      restucture: true,
    },
    src: '.tmp/style.prefix.css',
    dest: 'build/style.min.css'
  },
  report: {
    options: {
      restucture: true,
      report: 'gzip'
    },
    src: '.tmp/style.prefix.css',
    dest: 'build/style.min.css'
  }
};

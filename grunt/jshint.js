'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },

  all: {
    src: [
      'api{/, /**/, /**/**}*.js',
      'assets/js{/, /**/, /**/**/}*.js',
      '*.js', 'grunt/*.js', 'config/*.js',
      'tests{/, /**/, /**/**}*.js'
    ]
  },

  api: {
    src: [
      'api{/, /**/, /**/**}*.js',
    ]
  },

  assets: {
    src: [
      'assets/js{/, /**/, /**/**/}*.js',
    ]
  },

  config: {
    src: [
      '*.js', 'grunt/*.js', 'config/*.js',
    ]
  },

  test: {
    src: [
      'tests{/, /**/, /**/**}*.js'
    ]
  }
};

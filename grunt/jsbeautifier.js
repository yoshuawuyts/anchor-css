'use strict';

module.exports = {
  all: {
    src: [
      'api{/, /**/, /**/**}*.js',
      'assets/js{/, /**/, /**/**/}*.js',
      '*.js', 'grunt/*.js', 'config/*.js',
      'tests{/, /**/, /**/**}*.js'
    ],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  api: {
    src: ['api{/, /**/, /**/**}*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  assets: {
    src: ['assets/js{/, /**/, /**/**/}*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  config: {
    src: ['*.js', 'grunt/*.js', 'config/*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  tests: {
    src: ['tests{/, /**/, /**/**}*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
};

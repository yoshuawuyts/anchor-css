'use strict';

module.exports = {
  options: {
    stripBanners: true,
    separator: '\n\n',
    nonull: true,
  },
  css: {
    files: [{
      src: [
        './utilities/*.styl',
        '.tmp/styl/*.styl',
        './micro/*.styl'
      ],
      dest: '.tmp/concat.styl',
    }]
  },
};
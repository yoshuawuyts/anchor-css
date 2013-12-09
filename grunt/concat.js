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
        './micro/*.styl',
        './macro/*.styl',
      ],
      dest: '.tmp/concat.styl',
    }]
  },
};
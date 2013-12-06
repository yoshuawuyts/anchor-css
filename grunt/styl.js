'use strict';

module.exports = {
  compile: {
    options: {
      whitespace: true,
      compress: false, 
      vendors: []
    },
    src: '.tmp/concat.styl',
    dest: '.tmp/style.css'
  }
};

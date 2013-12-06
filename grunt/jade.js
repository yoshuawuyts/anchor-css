'use strict';

module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: 'assets/views/',
      src: ['{**/, **/**/}*.jade', '*.jade'],
      dest: 'build/views/',
      ext: '.html',
    }]
  }
};

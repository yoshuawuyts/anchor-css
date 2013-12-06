'use strict';

module.exports = {
  options: {
    port: 1337,
    hostname: 'localhost',
    livereload: 35729,
  },

  livereload: {
    options: {
      // Open default page in browser
      open: true,
      // Define from which folder assets should be served
      base: [
        'build/'
      ]
    }
  },
};

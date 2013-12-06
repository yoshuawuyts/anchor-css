'use strict';

module.exports = {
  options: {
    logConcurrentOutput: true
  },

  dev: {
    tasks: ['nodemon', 'node-inspector', 'watch'],
  },

  build: {
    tasks: ['styles', 'views', 'js'],
  }
};

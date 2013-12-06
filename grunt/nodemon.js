'use strict';

module.exports = {
  dev: {
    options: {
      args: [''],
      cwd: './',
      delayTime: 1,
      env: {
        PORT: '1337',
      },
      file: 'app.js',
      legacyWatch: true,
      nodeArgs: ['--debug'],
      watchedFolders: ['./', 'api/'],
    }
  },
};

'use strict';

module.exports = {

  'css': {
    files: [
      'assets/styles{/, /**/, /**/**/}*.styl'
    ],
    tasks: ['css', 'clean:after'],
  },

  'jade': {
    files: [
      'assets/views{/, /**/, /**/**/}*.jade'
    ],
    tasks: ['jade:compile', 'clean:after'],
  },

  'api': {
    files: [
      'api{/, /**/, /**/**}*.js'
    ],
    tasks: ['jsbeautifier:api', 'jshint:api', 'mochaTest:dot'],
  },

  'assets': {
    files: ['assets/js{/, /**/, /**/**/}*.js'],
    tasks: ['jsbeautifier:assets', 'jshint:assets'],
  },

  'config': {
    files: [
      'Gruntfile.js',
      'grunt/**/*.js',
      'config/*.js',
    ],
    tasks: ['jsbeautifier:config', 'jshint:config'],
  },

  'tests': {
    files: [
      'tests{/, /**/, /**/**}*.js'
    ],
    tasks: ['jsbeautifier:tests', 'jshint:tests'],
  },

  jsonlint: {
    files: [
      'package.json',
      '.jshintrc',
      '.jsbeautifyrc',
      'tests/**/*.json',
    ],
    tasks: ['jsonlint:all'],
  },

  mochaTest: {
    files: [
      '{api/, api/**/}*.js',
      'tests/**/*.js',
    ],
    tasks: ['mochaTest:dot']
  }
};

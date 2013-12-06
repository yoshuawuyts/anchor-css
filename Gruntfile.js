'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    autoprefixer: require('./grunt/autoprefixer'),
    concat: require('./grunt/concat'),
    csslint: require('./grunt/csslint'),
    csso: require('./grunt/csso'),
    release: require('./grunt/release'),
    styl: require('./grunt/styl'),
    watch: require('./grunt/watch'),
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Build views
  grunt.registerTask('styles', [
    'concat',
    'styl',
    'autoprefixer',
    'csso:optimize',
    'csslint',
  ]);

  // Build, lint, test and server
  grunt.registerTask('default', [
    'styles'
  ]);
};

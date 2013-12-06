'use strict';

module.exports = {
  options: {
    runnerPort: 9999,
    frameworks: ['mocha'],
    reporters: ['dots'],
    port: 9876,

  },
  continuous: {
    configFile: 'tests/karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS'],
  },
  unit: {
    configFile: 'tests/karma.conf.js',
    background: true,
    browsers: ['PhantomJS', 'Chrome'],
  }
};

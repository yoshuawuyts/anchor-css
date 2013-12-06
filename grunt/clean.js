'use strict';

module.exports = {
  before: {
    files: [{
      dot: true,
      src: [
        'build',
        '.tmp'
      ],
    }, ],
  },

  after: {
    files: [{
      dot: true,
      src: [
        '.tmp'
      ],
    }, ],
  },
};

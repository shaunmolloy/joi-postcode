const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.join(__dirname),
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^joi$': '<rootDir>/node_modules/joi',
  },
};

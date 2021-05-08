const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.join(__dirname),
  moduleFileExtensions: ['js', 'json'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!joi)',
  ],
};

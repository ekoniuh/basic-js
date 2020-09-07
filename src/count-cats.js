const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  return [].concat(...matrix).filter((item) => item === '^^').length;
};

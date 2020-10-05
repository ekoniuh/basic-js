const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, arrCounter = []) {
    arrCounter.push(counter);

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        this.calculateDepth(el, counter + 1, arrCounter);
      }
    });
    return Math.max(...arrCounter);
  }
};

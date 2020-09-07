const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, arrCounter = []) {
    arrCounter.push(counter);

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, counter + 1, arrCounter);
      }
    });
    return Math.max(...arrCounter);
  }
};

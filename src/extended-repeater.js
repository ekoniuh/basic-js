const CustomError = require('../extensions/custom-error');

module.exports = function repeater(
  str,
  { separator, additionSeparator, repeatTimes, additionRepeatTimes, addition }
) {
  if (separator === undefined) {
    separator = '+';
  }

  if (additionSeparator === undefined) {
    additionSeparator = '';
  }

  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }

  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }

  if (addition === undefined) {
    additionRepeatTimes = 0;
  }

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};

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

  let res = '';

  for (let i = 0; i < repeatTimes; i++) {
    res += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition;
      if (j < additionRepeatTimes - 1) {
        res += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      res += separator;
    }
  }
  return res;
};

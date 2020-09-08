const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "";
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  if (options.addition === undefined) {
    options.additionRepeatTimes = 0;
  }

  let res = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      res += options.addition;
      if (j < options.additionRepeatTimes - 1) {
        res += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      res += options.separator;
    }
  }
  return res;
};
/*
module.exports = function repeater(str, options) {
  const {
    separator,
    additionSeparator,
    repeatTimes,
    additionRepeatTimes,
    addition,
  } = options;
  if (separator === undefined) {
    separator = "+";
  }

  if (additionSeparator === undefined) {
    additionSeparator = "";
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

  let res = "";

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
*/

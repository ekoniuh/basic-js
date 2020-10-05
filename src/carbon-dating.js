const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const num = parseFloat(sampleActivity);
  if (
    typeof sampleActivity !== 'string' ||
    !num ||
    num <= 0 ||
    num > MODERN_ACTIVITY
  )
    return false;

  return Math.ceil(
    Math.abs(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD))
  );
};

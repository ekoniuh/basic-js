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

// module.exports = function dateSample(sampleActivity) {
//   return typeof sampleActivity === "string" &&
//     +sampleActivity < MODERN_ACTIVITY &&
//     +sampleActivity > 0
//     ? Math.ceil(
//         Math.abs(Math.log(parseFloat(sampleActivity) / 15) / (0.693 / 5730))
//       )
//     : false;
// };

// function dateSample(sampleActivity) {
//   if (
//     typeof sampleActivity === "string" &&
//     +sampleActivity < 15 &&
//     +sampleActivity > 0
//   ) {
//     return Math.ceil(Math.abs(Math.log(+sampleActivity / 15) / (0.693 / 5730)));
//   }
//   return false;
// };

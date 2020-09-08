const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const controlSequences = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  if (!(arr instanceof Array)) throw new Error("Not an Array!");
  const result = [];
  let isDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    if (isDiscarded) {
      isDiscarded = false;
    } else if (arr[i] === "--discard-next") {
      isDiscarded = true;
    } else if (arr[i] === "--discard-prev" && arr[i - 2] !== "--discard-next") {
      result.pop();
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1] !== undefined) result.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev" && arr[i - 2] !== "--discard-next") {
      if (arr[i - 1] !== undefined) result.push(arr[i - 1]);
    } else {
      if (!controlSequences.includes(arr[i])) result.push(arr[i]);
    }
  }
  return result;
};
/*module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let transformArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (i < arr.length - 1) {
        i++;
      }
    } else if (arr[i] == '--discard-prev') {
      if (i > 0) {
        transformArr.pop();
      }
    } else if (arr[i] == '--double-next') {
      if (i < arr.length - 1) {
        transformArr.push(arr[i + 1]);
      }
    } else if (arr[i] == '--double-prev') {
      if (i > 0) {
        transformArr.push(arr[i - 1]);
      }
    }
    transformArr.push(arr[i]);
  }
  return transformArr;
};*/
// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error();
//   }
//   let transformArr = [];
//   let shouldBePushed = true;

//   // console.log(arr);
//   debugger;
//   for (let i = 0; i < arr.length; i++) {
//     shouldBePushed = true;
//     if (arr[i] === '--discard-next') {
//       transformArr.push({ value: arr[i + 1], discard: true });
//       continue;
//     } else if (arr[i] === '--discard-prev') {
//       if (i > 0) {
//         transformArr[transformArr.length - 1].discard = true;
//       }
//       shouldBePushed = false;
//     } else if (arr[i] === '--double-next') {
//       if (i < arr.length - 2) {
//         transformArr.push({ value: arr[i + 1], double: true });
//       }
//       shouldBePushed = false;
//     } else if (arr[i] === '--double-prev') {
//       if (i > 1) {
//         transformArr[transformArr.length - 1].double = true;
//       }
//       shouldBePushed = false;
//     }
//     if (shouldBePushed) {
//       transformArr.push({ value: arr[i] });
//     }
//   }
//   return transformArr;
// };

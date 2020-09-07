const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const controlSequences = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  if (!(arr instanceof Array)) throw new Error("Not an Array!");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "asd") {
    }
  }
};

const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== 'number' ||
      position >= this.chain.length
    ) {
      this.chain = [];
      throw 'incorrect position';
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let arr = this.chain;
    this.chain = [];
    return arr.join('~~');
  },
};

module.exports = chainMaker;

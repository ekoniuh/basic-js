const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw 'error';
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
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

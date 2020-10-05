const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(isNotReverse = true) {
    this.isNotReverse = isNotReverse;
  }

  encrypt(message, key) {
    if (!key || !message) throw new Error('error');

    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    message = message.toUpperCase();

    let result = '';

    for (let i = 0, n = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        result += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(n) - 130) % 26) + 65
        );
        n++;
      } else {
        result += message[i];
      }
    }
    return this.isNotReverse ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!key || !message) throw new Error('error');

    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    message = message.toUpperCase();

    let result = '';

    for (let i = 0, n = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        result += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(n)) % 26) + 65
        );
        n++;
      } else {
        result += message[i];
      }
    }
    return this.isNotReverse ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

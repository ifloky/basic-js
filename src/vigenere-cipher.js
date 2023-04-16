const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyIndex = alphabet.indexOf(key[j % key.length]);
        const encodedIndex = (charIndex + keyIndex) % alphabet.length;
        result += alphabet[encodedIndex];
        j++;
      } else {
        result += char;
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyIndex = alphabet.indexOf(key[j % key.length]);
        const decodedIndex = (charIndex - keyIndex + alphabet.length) % alphabet.length;
        result += alphabet[decodedIndex];
        j++;
      } else {
        result += char;
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

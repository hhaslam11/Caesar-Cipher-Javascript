const encrypt = function(plaintext, key = 0) {
  if (!plaintext && !key) return;
  let textArray = plaintext.split('');

  for (let i in textArray) {
    if (textArray[i] === ' ') continue;
    textArray[i] = shift(textArray[i], key);
  }
  
  return textArray.join('');
};

const shift = function(char, shiftAmount) {
  const charDec = toDec(char);

  if (charDec + shiftAmount > 26) return toAscii((charDec + shiftAmount) - 26);
  if (charDec + shiftAmount < 1) return toAscii(26 + (charDec + shiftAmount));
  return toAscii(charDec + shiftAmount);
};

const toDec = x => x.charCodeAt(0) - 96;
const toAscii = x => String.fromCharCode(x + 96);

module.exports = encrypt;
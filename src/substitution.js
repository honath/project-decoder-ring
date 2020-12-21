function substitution(input, alphabet, encode = true) {
  //create normal alphabet for index comparison
  const stdAlphabet = "abcdefghijklmnopqrstuvwxyz";

  //test for alphabet length or duplicate letters
  if (
    alphabet.length != 26 ||
    checkAlphabetValue(alphabet) != checkAlphabetValue(stdAlphabet)
  ) {
    return false;
  }

  //container variable & floor input
  input = input.toLowerCase();
  const result = [];
  let temp = "";

  //check if encoding or decoding
  if (encode) {
    for (let i = 0; i < input.length; i++) {
      temp = input[i];

      /*set temp to index # of normal matching alphabet character, 
        then set it to the character found at same index in encoder alphabet*/
      if (temp != " ") {
        temp = stdAlphabet.indexOf(temp);
        temp = alphabet[temp];
      }

      result.push(temp);
    }
  } else {
    for (let i = 0; i < input.length; i++) {
      temp = input[i];

      /*set temp to index # of matching encoder alphabet character, 
        then set it to the character found at same index in standard alphabet*/
      if (temp != " ") {
        temp = alphabet.indexOf(temp);
        temp = stdAlphabet[temp];
      }

      result.push(temp);
    }
  }

  return result.join("");
}

function checkAlphabetValue(alphabet) {
  let total = 0;

  for (let i = 0; i < alphabet.length; i++) {
    total += alphabet[i].charCodeAt();
  }

  return total;
}

module.exports = substitution;

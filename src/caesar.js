function caesar(input, shift = 0, encode = true) {
  //test if shift is valid, exit function if not
  if (!shift || shift == 0 || shift < -25 || shift > 25) {
    return false;
  }

  //because function output must be lowercase regardless, convert input to lowercase first
  input = input.toLowerCase();

  //create holding variables
  let temp = 0;
  let result = [];

  for (i = 0; i < input.length; i++) {
    //convert current character to ASCII
    temp = input[i].charCodeAt();

    //check if encoding or decoding
    if (encode) {
      //check if char is alphabetical, if true, encode it
      if (temp > 96 && temp < 123) {
        temp += shift;
        //check if new character ASCII "leaves" alphabet, wrap if true
        if (temp > 122) {
          temp = 96 + (temp - 122);
        } else if (temp < 97) {
          temp = 123 - (97 - temp);
        }
      }
    } else {
      //check if char is alphabetical, if true, decode it
      if (temp > 96 && temp < 123) {
        temp -= shift;
        //check if new character ASCII "leaves" alphabet, wrap if true
        if (temp > 122) {
          temp = 96 + (temp - 122);
        } else if (temp < 97) {
          temp = 123 - (97 - temp);
        }
      }
    }

    //add current char to result array
    result.push(String.fromCharCode(temp));
  }

  return result.join("");
}

module.exports = caesar;

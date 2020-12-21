function polybius(input, encode = true) {
  //create table for polybius square
  const conversionTable = [
    { letter: "a", number: "11" },
    { letter: "f", number: "12" },
    { letter: "l", number: "13" },
    { letter: "q", number: "14" },
    { letter: "v", number: "15" },
    { letter: "b", number: "21" },
    { letter: "g", number: "22" },
    { letter: "m", number: "23" },
    { letter: "r", number: "24" },
    { letter: "w", number: "25" },
    { letter: "c", number: "31" },
    { letter: "h", number: "32" },
    { letter: "n", number: "33" },
    { letter: "s", number: "34" },
    { letter: "x", number: "35" },
    { letter: "d", number: "41" },
    { letter: "(i/j)", number: "42" },
    { letter: "o", number: "43" },
    { letter: "t", number: "44" },
    { letter: "y", number: "45" },
    { letter: "e", number: "51" },
    { letter: "k", number: "52" },
    { letter: "p", number: "53" },
    { letter: "u", number: "54" },
    { letter: "z", number: "55" },
  ];

  //floor input
  input = input.toLowerCase();

  //create holding variables
  let temp = "";
  const result = [];

  //check if encoding or decoding
  if (encode) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] >= "a" && input[i] <= "z") {
        temp = conversionTable.find((index) => index.letter.includes(input[i]));
        temp = temp.number;
        result.push(temp);
      } else {
        result.push(input[i]);
      }
    }
  } else {
    //check if length of string (without spaces) is even - if not, exit function
    for (let i = 0; i < input.length; i++) {
      if (!(input[i] == " ")) {
        temp += input[i];
      }
    }
    if (temp.length % 2) {
      return false;
    }

    for (let i = 0; i < input.length; ) {
      //check if current char is a space - if not, decode (current index + next index) & increment i by 2
      if (!(input[i] == " ")) {
        const currNum = input[i] + input[i + 1];
        temp = conversionTable.find((index) => index.number.includes(currNum));
        temp = temp.letter;
        i += 2;
      }
      //if current char is a space, increment i by 1
      else {
        temp = input[i];
        i++;
      }
      result.push(temp);
    }
  }

  return result.join("");
}

module.exports = polybius;

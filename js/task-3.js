function findLongestWord (string = '') {
    let splitString = string.split(' ');
    let longestWord = splitString [0];

    for (let i = 0; i < splitString.length; i += 1) {
        if (splitString[i].length > longestWord.length) {
            longestWord = splitString[i];
        }
    }
    return longestWord;
  }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'
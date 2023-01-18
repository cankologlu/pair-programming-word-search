
const wordSearch = (letters, word) => {
    const transposedLetter = transpose(letters);
  
    return (checkWord(letters, word) || checkWord(transposedLetter, word)) || false;
  };
  
  const checkWord = (data,word) => {
    const wordJoin = data.map(ls => ls.join(''));
    for (let l of wordJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  const transpose = function(matrix) {
    let results = [];
    for (let column = 0; column < matrix[0].length; column++) {
      let rows = [];
      for (let row = 0; row < matrix.length; row++) {
        rows.push(matrix[row][column]);
      }
      results.push(rows);
    }
    return results;
  };
module.exports = wordSearch
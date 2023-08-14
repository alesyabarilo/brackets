module.exports = function check(str, bracketsConfig) {
  const array = str.split('');

  let ind = -1;

  for (let i = 0; i < array.length; i++) {
    if (array.length === 0) break;

    bracketsConfig.some( item => {
      if (item[0] === array[i] && item[1] === array[i+1]) {
        ind = i;
        return true;
      }
    })

    if (ind >= 0) {
      array.splice(i, 2);
      i = -1;
      ind = -1;
    }
  }

  if (array[0]) return false;
  
  return true;
}

module.exports = function check(str, bracketsConfig) {
  const OpenBrackets = ['(', '{', '[', '1', '3', '5'];
  const CloseBrackets = [')', '}', ']', '2', '4', '6'];
  const IdenticalBrackets = ['|', '7', '8'];
  const PairBrackets = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (OpenBrackets.includes(str[i])) {
      arr.push(str[i]);
    } else if (IdenticalBrackets.includes(str[i]) && arr[arr.length - 1] !== str[i]) {
      arr.push(str[i]);
    } else if ((PairBrackets[str[i]] === arr[arr.length - 1])) {
      arr.pop();
    } else if (CloseBrackets.includes(str[i])) {
      arr.push(str[i]);
    }
  }

  if (arr.length === 0) {
    return true;
  } else { return false };

}

function longestPalindrome(s) {
  const newStr = preProcess(s);
  const result = {unparsed: '', length: ''};

  for (let i = 0; i < newStr.length; i++) {
    expandAround(newStr, i, result);
  }

  return parseStr(result.unparsed);
}

function preProcess(str) {
  let newStr = '#';

  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + '#';
  }

  return newStr;
}

function expandAround(str, i, result) {
  let start = i - 1;
  let end = i + 1;

  let left = '';
  let leftOrder = ''
  let right = '';

  while (start >= 0 && end < str.length) {
    left += str[start];
    leftOrder = str[start] + leftOrder;
    right += str[end];

    if (left === right) {
      if (left.length > result.length) {
        result.length = left.length;
        result.unparsed = leftOrder + str[i] + right;
      }
    }

    start--;
    end++;
  }
}

function parseStr(unparsed) {
  let parsed = '';

  for (let letter of unparsed) {
    if (letter !== '#') parsed += letter;
  }

  return parsed;
}

longestPalindrome('abcba');
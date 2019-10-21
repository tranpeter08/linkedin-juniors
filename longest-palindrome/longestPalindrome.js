function longestPalindrome(s) {
  function isPalindome(str) {
    const mid = Math.ceil(str.length / 2);
  
    for (let i = 0; i < mid; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
  
    return true;
  }

  const subStringLengths = {};

  // get all possible substrings
  let i = 0;
  while (i < s.length) {
    for (let j = i + 1; j <= s.length; j++) {
      const subStr = s.slice(i, j);
      if (subStringLengths[subStr] === undefined) {
        subStringLengths[subStr] = subStr.length;
      }
    }
    i++;
  }

  let max = 0;
  let palindrome = '';
  for (let subStr in subStringLengths) {
    if (isPalindome(subStr) && subStringLengths[subStr] > max) {
      max = subStringLengths[subStr];
      palindrome = subStr;
    } 
  }

  console.log(max, palindrome);
  return palindrome;
}

longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc");
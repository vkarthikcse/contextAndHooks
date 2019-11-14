function isSubStringPalindrome(subString) {
  return (
    subString ===
    subString
      .split("")
      .reverse()
      .join("")
  );
}

function findPalindromeMaxLengthAndPrimeNumber(completeString) {
  maxLength = 0;
  for (let i = 0; i < completeString.length; i++) {
    for (let j = 0; j < completeString.length - i; j++) {
      let subString = completeString.substring(j, j + i + 1);
      if (isSubStringPalindrome(subString) && subString.length > maxLength) {
        maxLength = subString.length;
      }
    }
  }
  return isNumberPrime(maxLength);
}

function isNumberPrime(palindromeLength) {
  const maxLoopLength = Math.floor(Math.sqrt(palindromeLength));
  let prime = palindromeLength !== 1 ? "YES" : "NO" ;
  for (let i = 2; i < maxLoopLength + 1; i++) {
    if (palindromeLength % i === 0) {
      prime = "YES";
      break;
    }
  }
  console.log(prime);
  return prime;
}

findPalindromeMaxLengthAndPrimeNumber("random12321random");



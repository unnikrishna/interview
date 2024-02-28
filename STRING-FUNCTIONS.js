// Example usage:

// const originalString = "aasbbccaa";
// console.log(compressString(originalString)); // Output: "a2b1c5a3"
function compressString(str) {
  var count = 1;
  var compressStr = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index + 1]) {
      count++;
    } else {
      compressStr += str[index] + count;
      count = 1;
    }
  }
  return compressStr.length < str.length ? compressStr : str;
}
// Example usage:
// const text =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elghjhjift. Sed et feugiat orci. Vivamus tincidunt ultricies libero, at tempor lacus tempor id. In hac habitasse platea dictumssdfsdsdt.";
// const maxWidth = 30;
// console.log(wrapText(text, maxWidth));
function wrapText(text, maxWidth) {
  const words = text.split(" ");
  let currentLine = "";
  const wrapTextOut = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (currentLine.length + word.length >= maxWidth) {
      wrapTextOut.push(currentLine);
      currentLine = word;
    } else {
      if (currentLine !== "") {
        currentLine += " ";
      }
      currentLine += word;
    }
  }
  if (currentLine.length) wrapTextOut.push(currentLine);
  return wrapTextOut.join("\n");
}


// Example usage:
// const inputString = "bdbgafagbtad";
// console.log(longestPalindrome(inputString)); // Output: "bab" or "aba"
function longestPalindrome(s) {
  if (s === null || s.length < 1) return "";
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i); // For odd length palindrome
    const len2 = expandAroundCenter(s, i, i + 1); // For even length palindrome
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}


// Example usage: 
// const s1 = "waterbottle";
// const s2 = "erbottlewat";
// console.log(isRotation(s1, s2)); // Output: true

function isRotation(s1, s2) {
  if (s1.length !== s2.length || s1.length === 0) {
    return false;
  }
  const doubledString = s1 + s1;
  return doubledString.includes(s2);
}

// Example usage:
console.log(isMatch("aa", "a")); // Output: false
console.log(isMatch("aa", "a*")); // Output: true
console.log(isMatch("ab", ".*")); // Output: true
console.log(isMatch("aab", "c*a*b")); // Output: true
console.log(isMatch("mississippi", "mis*is*p*.")); // Output: false
function isMatch(s, p) {
    let prevRow = new Array(p.length + 1).fill(false);
    prevRow[0] = true;

    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') {
            prevRow[i] = prevRow[i - 2];
        }
    }

    for (let i = 1; i <= s.length; i++) {
        let currRow = new Array(p.length + 1).fill(false);
        for (let j = 1; j <= p.length; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                currRow[j] = prevRow[j - 1];
            } else if (p[j - 1] === '*') {
                currRow[j] = currRow[j - 2] || (s[i - 1] === p[j - 2] || p[j - 2] === '.') && prevRow[j];
            }
        }
        prevRow = currRow;
    }

    return prevRow[p.length];
}



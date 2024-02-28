function longestCommonSubstring(str1, str2) {
    let maxLength = 0; // Track the length of the longest common substring
    let endIndex = 0; // Track the end index of the longest common substring in str1

    // Iterate through str1
    for (let i = 0; i < str1.length; i++) {
        let pointer1 = i;
        let pointer2 = 0;
        let currentLength = 0; // Track the length of the current common substring

        // Compare characters in str1 and str2 starting from pointer1 and pointer2
        while (pointer1 < str1.length && pointer2 < str2.length) {
            if (str1[pointer1] === str2[pointer2]) {
                currentLength++;
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    endIndex = pointer1; // Update the end index of the longest common substring
                }
                pointer1++;
                pointer2++;
            } else {
                currentLength = 0; // Reset the length of common substring if characters don't match
                pointer2 = 0; // Reset pointer2 to start from the beginning of str2
                i++; // Move to the next character in str1
                pointer1 = i; // Update pointer1
            }
        }
    }

    // Extract the longest common substring from str1
    const longestSubstring = str1.substring(endIndex - maxLength + 1, endIndex + 1);

    return longestSubstring;
}

// Example usage:
const str1 = "ASDFGHJ";
const str2 = "DFGHKAS";
console.log(longestCommonSubstring(str1, str2)); // Output: "DFGH"

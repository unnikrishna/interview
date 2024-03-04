////////////////////////////
///////////TWOSUM///////////
////////////////////////////
function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numIndices) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
  }

  return []; // No solution found
}
////////////////////////////
///////////ROTATE ARRAY/////
////////////////////////////
function rotateArray(nums, k) {
    const n = nums.length;
    k %= n; // Ensure k is within the range of array length
    console.log(k);
    reverse(nums, 0, n - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, n - 1); // Reverse the remaining elements
}

function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function rotateArray(nums, k) {
    const n = nums.length;
    k %= n; // Ensure k is within the range of array length

    nums.unshift(...nums.splice(n - k));
}



//////////////////////////////////////////////
////////////Merge Sorted ARRAY////////////////
/////////////////////////////////////////////
function mergeSortedArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0; // Pointer for nums1
    let j = 0; // Pointer for nums2
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }
    return mergedArray;
}


////////////////////////////
///////MAX SUBARRAY/////////
////////////////////////////
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum sum ending at the current index
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update the maximum sum found so far
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// Example usage:
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums)); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])

////////////////////////////
/////////GROUP ANAGRAM//////
////////////////////////////
function groupAnagrams(strs) {
    const anagramsMap = new Map();
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (anagramsMap.has(sortedStr)) {
            anagramsMap.get(sortedStr).push(str);
        } else {
            anagramsMap.set(sortedStr, [str]);
        }
    }
    return Array.from(anagramsMap.values());
}

{
  // Example usage:
//   const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
//   console.log(groupAnagrams(strs));
  // Output:
  // [
  //   ["eat","tea","ate"],
  //   ["tan","nat"],
  //   ["bat"]
  // ]
}


////////////////////////////
/////////////THREE SUM///////
////////////////////////////

function threeSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates
                // while (left < right && nums[left] === nums[left + 1]) left++;
                // while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Example usage:
// const nums = [-1, 0, 1, 2, 4, -1, -4];
// const target = 3;
// console.log(threeSum(nums, target)); // Output: [[-1, -1, 2], [-1, 0, 1]]


////////////////////////////////////////////////
////////////////////QUICK SORT////////////////////////////
////////////////////////////////////////////////
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(quickSort(arr));


/////////////////////////////////////////////////////
/////////////////////BUBBLE SORT////////////////////
////////////////////////////////////////////////////
function bubbleSort(arr){
 let n = arr.length;
  for(var i=0;i < n;i++) {
    for(var j=0;j < (n-i-1);j++) {
      if(arr[j] > arr[j+1])  {
       var temp=arr[j];
       arr[j]=arr[j+1];
       arr[j+1]=temp; 
     }
    }
  }
  return arr;
}
var arr=[2,3,1,4,7,6];
const sortedArray = bubbleSort(arr);

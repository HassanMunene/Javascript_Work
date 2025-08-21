# Arrays & Strings
    
## Two Sum
the Two Sum problem is a classic Data Structures & Algorithms (DSA) question that’s also a gateway into recognizing problem-solving patterns you’ll see again and again. Let’s break it down properly:

Given an array of integers nums and a target integer target, return indices of the two numbers such that they add up to target.

Example:

```
nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  // because nums[0] + nums[1] = 2 + 7 = 9
```

🔹 Naive Approach (Brute Force)
Loop over each pair and check if they add to target.
Time complexity: O(n²)

Code:
```
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```

Hash Map for Complements

Instead of searching for pairs blindly, store the difference you need (target - num) in a hash map.

As you iterate:

Check if the current number exists in the map (means we already saw its complement).

If yes → return indices.

If no → store the complement in the map.

Time complexity: O(n)
Code:
```
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
```

# Valid Palindrome
```
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // normalize

  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

## Maximum Subarray (Kadane's Algorithm)
Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.
Note: A subarray is a continuous part of an array.

Examples:
```
Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray [-2] has the largest sum -2.

Input: arr[] = [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.
```
### [Naive Approach] By iterating over all subarrays - O(n^2) Time and O(1) Space

The idea is to run two nested loops to iterate over all possible subarrays and find the maximum sum. The outer loop will mark the starting point of a subarray and inner loop will mark the ending point of the subarray.
```
function maxSubarraySum(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
```

### [Expected Approach] Using Kadane's Algorithm - O(n) Time and O(1) Space

The idea of Kadane's algorithm is to traverse over the array from left to right and for each element, find the maximum sum among all subarrays ending at that element. The result will be the maximum of all these values.

```
function maxSubarraySum(arr) {
    
    // Stores the result (maximum sum found so far)    
    let res = arr[0];
    
    // Maximum sum of subarray ending at current position
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        
        // Either extend the previous subarray or start 
        // new from current element
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        
        // Update result if the new subarray sum is larger
        res = Math.max(res, maxEnding);
    }
    return res;
}

// Driver Code
const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
```

## Merge two Sorted Arrays

    Contains Duplicate

    Rotate Array

    Reverse String

    Valid Parentheses

    Best Time to Buy/Sell Stock

    Plus One

# Linked Lists

    Reverse Linked List

    Merge Two Sorted Lists

    Linked List Cycle Detection

    Middle of Linked List

    Remove Duplicates from Sorted List

# Stacks/Queues

    Implement Stack using Queues

    Implement Queue using Stacks

    Next Greater Element

    Min Stack (you already covered this)
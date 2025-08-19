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

    Maximum Subarray (Kadane's Algorithm)

    Merge Sorted Arrays

    Contains Duplicate

    Rotate Array

    Reverse String

    Valid Parentheses (you already know this one)

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
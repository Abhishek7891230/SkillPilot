export const codingQuestions = [
  {
    id: "sum-of-two-numbers",
    title: "Sum of Two Numbers",
    difficulty: "easy",
    category: "Basics",
    description: `
Given two integers A and B, print their sum.
  `.trim(),
    inputFormat: `
 First line: integer A
 Second line: integer B
  `.trim(),
    outputFormat: `
 Print A + B
  `.trim(),
    constraints: `
 -10^9 <= A, B <= 10^9
  `.trim(),
    samples: [
      { input: "3\n4\n", output: "7\n", explanation: "3 + 4 = 7" },
      { input: "-5\n10\n", output: "5\n", explanation: "-5 + 10 = 5" },
    ],
  },
  {
    id: "max-of-array",
    title: "Maximum in an Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array of N integers, find the maximum element.
  `.trim(),
    inputFormat: `- First line: integer N
 Second line: N space-separated integers
  `.trim(),
    outputFormat: `
 Print the maximum element
  `.trim(),
    constraints: `
 1 <= N <= 10^5
  `.trim(),
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "5\n", explanation: "Max is 5" },
      { input: "4\n-5 -1 -7 -3\n", output: "-1\n", explanation: "Max is -1" },
    ],
  },
  {
    id: "count-evens",
    title: "Count Even Numbers",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array, count how many numbers are even.
  `.trim(),
    inputFormat: `
 First line: integer N
 Second line: N space-separated integers
  `.trim(),
    outputFormat: `
 Print the count of even integers
  `.trim(),
    samples: [
      { input: "5\n1 2 3 4 6\n", output: "3\n", explanation: "2,4,6 are even" },
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse a String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, print it in reverse.
  `.trim(),
    inputFormat: `
 A single line containing string S
  `.trim(),
    outputFormat: `
 Print reversed string
  `.trim(),
    samples: [{ input: "hello\n", output: "olleh\n" }],
  },
  {
    id: "check-palindrome",
    title: "Check Palindrome",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, determine whether it is a palindrome.
Print "YES" or "NO".
  `.trim(),
    inputFormat: `
 A single line string S
  `.trim(),
    outputFormat: `
 Output YES if palindrome else NO
  `.trim(),
    samples: [{ input: "madam\n", output: "YES\n" }],
  },
  {
    id: "factorial",
    title: "Factorial of N",
    difficulty: "easy",
    category: "Math",
    description: `
Given N, compute N! (factorial of N).
  `.trim(),
    inputFormat: `
 Integer N
  `.trim(),
    outputFormat: `
 Print N!
  `.trim(),
    samples: [{ input: "5\n", output: "120\n" }],
  },
  {
    id: "sum-of-array",
    title: "Sum of Array Elements",
    difficulty: "easy",
    category: "Arrays",
    description: `
Compute the sum of all elements of an array.
  `.trim(),
    inputFormat: `
 N
 N space-separated integers
  `.trim(),
    outputFormat: `
 Print the sum
  `.trim(),
    samples: [{ input: "4\n1 2 3 4\n", output: "10\n" }],
  },
  {
    id: "count-vowels",
    title: "Count Vowels",
    difficulty: "easy",
    category: "Strings",
    description: `
Count how many vowels (a,e,i,o,u) exist in the given string.
  `.trim(),
    inputFormat: `
 String S
  `.trim(),
    outputFormat: `
 Print number of vowels
  `.trim(),
    samples: [{ input: "hello\n", output: "2\n" }],
  },
  {
    id: "second-largest",
    title: "Second Largest Element",
    difficulty: "easy",
    category: "Arrays",
    description: `
Find the second largest distinct number in an array.
  `.trim(),
    inputFormat: `
 N
 N space-separated integers
  `.trim(),
    outputFormat: `
 Print second largest element
  `.trim(),
    samples: [{ input: "5\n1 2 3 4 5\n", output: "4\n" }],
  },
  {
    id: "count-digits",
    title: "Count Digits",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, count how many digits it has.
  `.trim(),
    inputFormat: `
 Integer N
  `.trim(),
    outputFormat: `
 Print number of digits
  `.trim(),
    samples: [{ input: "12345\n", output: "5\n" }],
  },
  {
    id: "gcd-of-two-numbers",
    title: "GCD of Two Numbers",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, find their Greatest Common Divisor (GCD).
  `.trim(),
    inputFormat: `
 First line: integer A
 Second line: integer B
  `.trim(),
    outputFormat: `
 Print the GCD of A and B
  `.trim(),
    constraints: `
 1 <= A, B <= 10^6
  `.trim(),
    samples: [
      { input: "12\n8\n", output: "4\n", explanation: "GCD(12, 8) = 4" },
      {
        input: "17\n19\n",
        output: "1\n",
        explanation: "GCD(17, 19) = 1 (coprime)",
      },
    ],
  },
  {
    id: "min-of-array",
    title: "Minimum in an Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array of N integers, find the minimum element.
  `.trim(),
    inputFormat: `
First line: integer N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the minimum element
  `.trim(),
    constraints: `
1 <= N <= 10^5
  `.trim(),
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "1\n", explanation: "Min is 1" },
      { input: "4\n-5 -1 -7 -3\n", output: "-7\n", explanation: "Min is -7" },
    ],
  },
  {
    id: "check-prime",
    title: "Check Prime Number",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, determine whether it is a prime number.
Print "YES" if prime, "NO" otherwise.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print YES if prime else NO
  `.trim(),
    constraints: `
1 <= N <= 10^6
  `.trim(),
    samples: [
      { input: "7\n", output: "YES\n", explanation: "7 is a prime number" },
      { input: "10\n", output: "NO\n", explanation: "10 is not a prime number" },
    ],
  },
  {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "easy",
    category: "Math",
    description: `
Given N, return the Nth Fibonacci number. The Fibonacci sequence starts with 0, 1.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print the Nth Fibonacci number
  `.trim(),
    constraints: `
0 <= N <= 30
  `.trim(),
    samples: [
      { input: "5\n", output: "5\n", explanation: "Fib sequence: 0,1,1,2,3,5" },
      { input: "0\n", output: "0\n", explanation: "Fib(0) = 0" },
    ],
  },
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array of integers and a target, find two indices such that they add up to the target.
Return the indices (0-indexed) space-separated.
  `.trim(),
    inputFormat: `
First line: N (array size)
Second line: N space-separated integers
Third line: target integer
  `.trim(),
    outputFormat: `
Print two indices space-separated
  `.trim(),
    constraints: `
2 <= N <= 10^4
  `.trim(),
    samples: [
      { input: "4\n2 7 11 15\n9\n", output: "0 1\n", explanation: "2 + 7 = 9" },
    ],
  },
  {
    id: "reverse-array",
    title: "Reverse an Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array, reverse it and print the elements.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print reversed array space-separated
  `.trim(),
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "5 4 3 2 1\n" },
    ],
  },
  {
    id: "power-of-two",
    title: "Power of Two",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, determine if it is a power of two. Print YES or NO.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "16\n", output: "YES\n", explanation: "16 = 2^4" },
      { input: "18\n", output: "NO\n" },
    ],
  },
  {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array containing N distinct numbers from 0 to N, find the missing number.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the missing number
  `.trim(),
    samples: [
      { input: "3\n3 0 1\n", output: "2\n" },
    ],
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array, determine if it contains any duplicates. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print YES if duplicate exists, else NO
  `.trim(),
    samples: [
      { input: "4\n1 2 3 1\n", output: "YES\n" },
      { input: "4\n1 2 3 4\n", output: "NO\n" },
    ],
  },
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "easy",
    category: "Strings",
    description: `
Given two strings, determine if they are anagrams. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: string s
Second line: string t
  `.trim(),
    outputFormat: `
Print YES if anagram, else NO
  `.trim(),
    samples: [
      { input: "anagram\nnagaram\n", output: "YES\n" },
      { input: "rat\ncar\n", output: "NO\n" },
    ],
  },
  {
    id: "single-number",
    title: "Single Number",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array where every element appears twice except one, find that single element.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the single number
  `.trim(),
    samples: [
      { input: "5\n4 1 2 1 2\n", output: "4\n" },
    ],
  },
  {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "easy",
    category: "Arrays",
    description: `
Move all zeroes to the end while maintaining relative order of non-zero elements.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print modified array space-separated
  `.trim(),
    samples: [
      { input: "5\n0 1 0 3 12\n", output: "1 3 12 0 0\n" },
    ],
  },
  {
    id: "best-time-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given stock prices array, find max profit from one buy and one sell.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (prices)
  `.trim(),
    outputFormat: `
Print maximum profit
  `.trim(),
    samples: [
      { input: "6\n7 1 5 3 6 4\n", output: "5\n", explanation: "Buy at 1, sell at 6" },
    ],
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string containing parentheses (), {}, [], determine if valid. Print YES or NO.
  `.trim(),
    inputFormat: `
String S
  `.trim(),
    outputFormat: `
Print YES if valid, else NO
  `.trim(),
    samples: [
      { input: "()[]{}\n", output: "YES\n" },
      { input: "([)]\n", output: "NO\n" },
    ],
  },
  {
    id: "merge-sorted-arrays",
    title: "Merge Two Sorted Arrays",
    difficulty: "easy",
    category: "Arrays",
    description: `
Merge two sorted arrays into one sorted array.
  `.trim(),
    inputFormat: `
First line: N (size of first array)
Second line: N space-separated integers
Third line: M (size of second array)
Fourth line: M space-separated integers
  `.trim(),
    outputFormat: `
Print merged sorted array space-separated
  `.trim(),
    samples: [
      { input: "3\n1 2 3\n3\n2 5 6\n", output: "1 2 2 3 5 6\n" },
    ],
  },
  {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "easy",
    category: "Arrays",
    description: `
Find the element that appears more than N/2 times in the array.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the majority element
  `.trim(),
    samples: [
      { input: "7\n3 2 3 3 3 2 3\n", output: "3\n" },
    ],
  },
  {
    id: "plus-one",
    title: "Plus One",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given array representing a non-negative integer, add one to it.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated digits
  `.trim(),
    outputFormat: `
Print result array space-separated
  `.trim(),
    samples: [
      { input: "3\n1 2 3\n", output: "1 2 4\n" },
      { input: "3\n9 9 9\n", output: "1 0 0 0\n" },
    ],
  },
  {
    id: "sqrt",
    title: "Square Root",
    difficulty: "easy",
    category: "Math",
    description: `
Compute the integer square root of X (floor of sqrt(X)).
  `.trim(),
    inputFormat: `
Integer X
  `.trim(),
    outputFormat: `
Print floor(sqrt(X))
  `.trim(),
    samples: [
      { input: "8\n", output: "2\n" },
      { input: "16\n", output: "4\n" },
    ],
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "easy",
    category: "Dynamic Programming",
    description: `
You can climb 1 or 2 steps at a time. How many ways to reach the top of N steps?
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print number of ways
  `.trim(),
    samples: [
      { input: "3\n", output: "3\n", explanation: "1+1+1, 1+2, 2+1" },
    ],
  },
  {
    id: "remove-duplicates",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given sorted array, return the length after removing duplicates in-place.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the new length
  `.trim(),
    samples: [
      { input: "3\n1 1 2\n", output: "2\n" },
    ],
  },
  {
    id: "search-insert",
    title: "Search Insert Position",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given sorted array and target, return index if found, else return index where it would be inserted.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: target
  `.trim(),
    outputFormat: `
Print the index
  `.trim(),
    samples: [
      { input: "4\n1 3 5 6\n5\n", output: "2\n" },
    ],
  },
  {
    id: "pascals-triangle",
    title: "Pascal's Triangle Row",
    difficulty: "easy",
    category: "Arrays",
    description: `
Return the Nth row of Pascal's triangle (0-indexed).
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print row space-separated
  `.trim(),
    samples: [
      { input: "3\n", output: "1 3 3 1\n" },
    ],
  },
  {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "easy",
    category: "Strings",
    description: `
Find the longest common prefix among array of strings.
  `.trim(),
    inputFormat: `
First line: N (number of strings)
Next N lines: strings
  `.trim(),
    outputFormat: `
Print longest common prefix
  `.trim(),
    samples: [
      { input: "3\nflower\nflow\nflight\n", output: "fl\n" },
    ],
  },
  {
    id: "rotate-array",
    title: "Rotate Array",
    difficulty: "medium",
    category: "Arrays",
    description: `
Rotate array to the right by K steps.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: K
  `.trim(),
    outputFormat: `
Print rotated array space-separated
  `.trim(),
    samples: [
      { input: "7\n1 2 3 4 5 6 7\n3\n", output: "5 6 7 1 2 3 4\n" },
    ],
  },
  {
    id: "product-except-self",
    title: "Product of Array Except Self",
    difficulty: "medium",
    category: "Arrays",
    description: `
Return array where each element is product of all elements except itself.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print result array space-separated
  `.trim(),
    samples: [
      { input: "4\n1 2 3 4\n", output: "24 12 8 6\n" },
    ],
  },
  {
    id: "container-water",
    title: "Container With Most Water",
    difficulty: "medium",
    category: "Arrays",
    description: `
Given heights array, find two lines that form container with max water.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (heights)
  `.trim(),
    outputFormat: `
Print max area
  `.trim(),
    samples: [
      { input: "9\n1 8 6 2 5 4 8 3 7\n", output: "49\n" },
    ],
  },
  {
    id: "three-sum",
    title: "3Sum",
    difficulty: "medium",
    category: "Arrays",
    description: `
Find all unique triplets in array that sum to zero. Print count of triplets.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print count of unique triplets
  `.trim(),
    samples: [
      { input: "6\n-1 0 1 2 -1 -4\n", output: "2\n" },
    ],
  },
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating",
    difficulty: "medium",
    category: "Strings",
    description: `
Find length of longest substring without repeating characters.
  `.trim(),
    inputFormat: `
String S
  `.trim(),
    outputFormat: `
Print the length
  `.trim(),
    samples: [
      { input: "abcabcbb\n", output: "3\n", explanation: "abc" },
    ],
  },
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "medium",
    category: "Strings",
    description: `
Group anagrams together. Print count of groups.
  `.trim(),
    inputFormat: `
First line: N
Next N lines: strings
  `.trim(),
    outputFormat: `
Print number of groups
  `.trim(),
    samples: [
      { input: "6\neat\ntea\ntan\nate\nnat\nbat\n", output: "3\n" },
    ],
  },
  {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "medium",
    category: "Arrays",
    description: `
Determine if a 9x9 Sudoku board is valid. Print YES or NO.
  `.trim(),
    inputFormat: `
9 lines of 9 characters each (use . for empty)
  `.trim(),
    outputFormat: `
Print YES if valid, else NO
  `.trim(),
    samples: [
      { input: "53..7....\n6..195...\n.98....6.\n8...6...3\n4..8.3..1\n7...2...6\n.6....28.\n...419..5\n....8..79\n", output: "YES\n" },
    ],
  },
  {
    id: "longest-palindrome-substring",
    title: "Longest Palindromic Substring",
    difficulty: "medium",
    category: "Strings",
    description: `
Find length of longest palindromic substring.
  `.trim(),
    inputFormat: `
String S
  `.trim(),
    outputFormat: `
Print the length
  `.trim(),
    samples: [
      { input: "babad\n", output: "3\n", explanation: "bab or aba" },
    ],
  },
  {
    id: "zigzag-conversion",
    title: "ZigZag Conversion",
    difficulty: "medium",
    category: "Strings",
    description: `
Convert string to zigzag pattern with numRows and read line by line.
  `.trim(),
    inputFormat: `
First line: string S
Second line: numRows
  `.trim(),
    outputFormat: `
Print converted string
  `.trim(),
    samples: [
      { input: "PAYPALISHIRING\n3\n", output: "PAHNAPLSIIGYIR\n" },
    ],
  },
  {
    id: "string-to-integer",
    title: "String to Integer (atoi)",
    difficulty: "medium",
    category: "Strings",
    description: `
Convert string to integer with rules: ignore whitespace, handle sign, stop at non-digit.
  `.trim(),
    inputFormat: `
String S
  `.trim(),
    outputFormat: `
Print the integer
  `.trim(),
    samples: [
      { input: "42\n", output: "42\n" },
      { input: "   -42\n", output: "-42\n" },
    ],
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "medium",
    category: "Arrays",
    description: `
Determine if you can reach last index. Each element is max jump length. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print YES if can reach last index, else NO
  `.trim(),
    samples: [
      { input: "5\n2 3 1 1 4\n", output: "YES\n" },
    ],
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "medium",
    category: "Arrays",
    description: `
Merge overlapping intervals. Print count of merged intervals.
  `.trim(),
    inputFormat: `
First line: N (number of intervals)
Next N lines: start end
  `.trim(),
    outputFormat: `
Print count after merging
  `.trim(),
    samples: [
      { input: "4\n1 3\n2 6\n8 10\n15 18\n", output: "3\n" },
    ],
  },
  {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "medium",
    category: "Arrays",
    description: `
Return all elements of matrix in spiral order.
  `.trim(),
    inputFormat: `
First line: M N (rows cols)
Next M lines: N space-separated integers
  `.trim(),
    outputFormat: `
Print elements in spiral order space-separated
  `.trim(),
    samples: [
      { input: "3 3\n1 2 3\n4 5 6\n7 8 9\n", output: "1 2 3 6 9 8 7 4 5\n" },
    ],
  },
  {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Robot in M x N grid. Count unique paths from top-left to bottom-right (only right/down moves).
  `.trim(),
    inputFormat: `
Two integers M N
  `.trim(),
    outputFormat: `
Print number of unique paths
  `.trim(),
    samples: [
      { input: "3 7\n", output: "28\n" },
    ],
  },
  {
    id: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Find path from top-left to bottom-right with minimum sum (only right/down moves).
  `.trim(),
    inputFormat: `
First line: M N
Next M lines: N space-separated integers
  `.trim(),
    outputFormat: `
Print minimum path sum
  `.trim(),
    samples: [
      { input: "3 3\n1 3 1\n1 5 1\n4 2 1\n", output: "7\n" },
    ],
  },
  {
    id: "word-search",
    title: "Word Search",
    difficulty: "medium",
    category: "Arrays",
    description: `
Given board and word, find if word exists in grid. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: M N
Next M lines: N characters
Last line: word
  `.trim(),
    outputFormat: `
Print YES if word exists, else NO
  `.trim(),
    samples: [
      { input: "3 4\nABCE\nSFCS\nADEE\nABCCED\n", output: "YES\n" },
    ],
  },
  {
    id: "subarray-sum",
    title: "Subarray Sum Equals K",
    difficulty: "medium",
    category: "Arrays",
    description: `
Count number of continuous subarrays whose sum equals K.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: K
  `.trim(),
    outputFormat: `
Print count of subarrays
  `.trim(),
    samples: [
      { input: "3\n1 1 1\n2\n", output: "2\n" },
    ],
  },
  {
    id: "next-permutation",
    title: "Next Permutation",
    difficulty: "medium",
    category: "Arrays",
    description: `
Rearrange numbers into next lexicographically greater permutation.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print next permutation space-separated
  `.trim(),
    samples: [
      { input: "3\n1 2 3\n", output: "1 3 2\n" },
    ],
  },
  {
    id: "search-rotated",
    title: "Search in Rotated Sorted Array",
    difficulty: "medium",
    category: "Arrays",
    description: `
Search target in rotated sorted array. Return index or -1.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: target
  `.trim(),
    outputFormat: `
Print index or -1
  `.trim(),
    samples: [
      { input: "7\n4 5 6 7 0 1 2\n0\n", output: "4\n" },
    ],
  },
  {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "medium",
    category: "Recursion",
    description: `
Count all unique combinations that sum to target (can reuse elements).
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: target
  `.trim(),
    outputFormat: `
Print count of combinations
  `.trim(),
    samples: [
      { input: "3\n2 3 6\n7\n", output: "2\n" },
    ],
  },
  {
    id: "permutations",
    title: "Permutations",
    difficulty: "medium",
    category: "Recursion",
    description: `
Return count of all possible permutations of array.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print count of permutations
  `.trim(),
    samples: [
      { input: "3\n1 2 3\n", output: "6\n" },
    ],
  },
  {
    id: "letter-combinations",
    title: "Letter Combinations of Phone Number",
    difficulty: "medium",
    category: "Recursion",
    description: `
Count all letter combinations for phone digits (2=abc, 3=def, etc).
  `.trim(),
    inputFormat: `
String of digits (2-9)
  `.trim(),
    outputFormat: `
Print count of combinations
  `.trim(),
    samples: [
      { input: "23\n", output: "9\n" },
    ],
  },
  {
    id: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "medium",
    category: "Recursion",
    description: `
Count all combinations of N pairs of valid parentheses.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print count
  `.trim(),
    samples: [
      { input: "3\n", output: "5\n" },
    ],
  },
  {
    id: "pow-x-n",
    title: "Pow(x, n)",
    difficulty: "medium",
    category: "Math",
    description: `
Calculate x raised to power n. Round to 2 decimal places.
  `.trim(),
    inputFormat: `
First line: x (float)
Second line: n (integer)
  `.trim(),
    outputFormat: `
Print result with 2 decimal places
  `.trim(),
    samples: [
      { input: "2.0\n10\n", output: "1024.00\n" },
    ],
  },
  {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "medium",
    category: "Arrays",
    description: `
If element is 0, set entire row and column to 0. Print count of zeroes in result.
  `.trim(),
    inputFormat: `
First line: M N
Next M lines: N space-separated integers
  `.trim(),
    outputFormat: `
Print count of zeroes
  `.trim(),
    samples: [
      { input: "3 3\n1 1 1\n1 0 1\n1 1 1\n", output: "5\n" },
    ],
  },
  {
    id: "sort-colors",
    title: "Sort Colors",
    difficulty: "medium",
    category: "Arrays",
    description: `
Sort array of 0s, 1s, and 2s in-place. Print sorted array.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (0/1/2)
  `.trim(),
    outputFormat: `
Print sorted array space-separated
  `.trim(),
    samples: [
      { input: "6\n2 0 2 1 1 0\n", output: "0 0 1 1 2 2\n" },
    ],
  },
  {
    id: "find-duplicate",
    title: "Find the Duplicate Number",
    difficulty: "medium",
    category: "Arrays",
    description: `
Array contains N+1 integers where each is between 1 and N. Find the duplicate.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the duplicate
  `.trim(),
    samples: [
      { input: "5\n1 3 4 2 2\n", output: "2\n" },
    ],
  },
  {
    id: "decode-ways",
    title: "Decode Ways",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Count ways to decode string where A=1, B=2,..., Z=26.
  `.trim(),
    inputFormat: `
String of digits
  `.trim(),
    outputFormat: `
Print count of ways
  `.trim(),
    samples: [
      { input: "226\n", output: "3\n", explanation: "BZ, VF, BBF" },
    ],
  },
  {
    id: "house-robber",
    title: "House Robber",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Rob houses for max money without robbing adjacent houses.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (money)
  `.trim(),
    outputFormat: `
Print maximum money
  `.trim(),
    samples: [
      { input: "4\n1 2 3 1\n", output: "4\n" },
    ],
  },
  {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Find minimum coins needed to make amount. Return -1 if impossible.
  `.trim(),
    inputFormat: `
First line: N (number of coin types)
Second line: N space-separated integers (coin values)
Third line: amount
  `.trim(),
    outputFormat: `
Print minimum coins or -1
  `.trim(),
    samples: [
      { input: "3\n1 2 5\n11\n", output: "3\n", explanation: "5+5+1" },
    ],
  },
  {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Find length of longest strictly increasing subsequence.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the length
  `.trim(),
    samples: [
      { input: "8\n10 9 2 5 3 7 101 18\n", output: "4\n" },
    ],
  },
  {
    id: "word-break",
    title: "Word Break",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Determine if string can be segmented into words from dictionary. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: string S
Second line: N (dict size)
Next N lines: dictionary words
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "leetcode\n2\nleet\ncode\n", output: "YES\n" },
    ],
  },
  {
    id: "partition-equal-subset",
    title: "Partition Equal Subset Sum",
    difficulty: "medium",
    category: "Dynamic Programming",
    description: `
Check if array can be partitioned into two subsets with equal sum. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "4\n1 5 11 5\n", output: "YES\n" },
    ],
  },
  {
    id: "max-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "medium",
    category: "Arrays",
    description: `
Find contiguous subarray with largest product.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print maximum product
  `.trim(),
    samples: [
      { input: "3\n2 3 -2\n", output: "6\n" },
    ],
  },
  {
    id: "kth-largest",
    title: "Kth Largest Element",
    difficulty: "medium",
    category: "Arrays",
    description: `
Find the Kth largest element in unsorted array.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: K
  `.trim(),
    outputFormat: `
Print Kth largest element
  `.trim(),
    samples: [
      { input: "6\n3 2 1 5 6 4\n2\n", output: "5\n" },
    ],
  },
  {
    id: "top-k-frequent",
    title: "Top K Frequent Elements",
    difficulty: "medium",
    category: "Arrays",
    description: `
Return K most frequent elements (sorted by frequency descending).
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: K
  `.trim(),
    outputFormat: `
Print K elements space-separated
  `.trim(),
    samples: [
      { input: "6\n1 1 1 2 2 3\n2\n", output: "1 2\n" },
    ],
  },
  {
    id: "median-two-sorted",
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    category: "Arrays",
    description: `
Find median of two sorted arrays. Print with 1 decimal place.
  `.trim(),
    inputFormat: `
First line: N1
Second line: N1 space-separated integers
Third line: N2
Fourth line: N2 space-separated integers
  `.trim(),
    outputFormat: `
Print median with 1 decimal
  `.trim(),
    samples: [
      { input: "2\n1 3\n1\n2\n", output: "2.0\n" },
    ],
  },
  {
    id: "regular-expression",
    title: "Regular Expression Matching",
    difficulty: "hard",
    category: "Strings",
    description: `
Implement regex matching with '.' and '*'. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: string S
Second line: pattern P
  `.trim(),
    outputFormat: `
Print YES if match, else NO
  `.trim(),
    samples: [
      { input: "aa\na*\n", output: "YES\n" },
    ],
  },
  {
    id: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "hard",
    category: "Strings",
    description: `
Implement wildcard matching with '?' and '*'. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: string S
Second line: pattern P
  `.trim(),
    outputFormat: `
Print YES if match, else NO
  `.trim(),
    samples: [
      { input: "aa\n*\n", output: "YES\n" },
    ],
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "hard",
    category: "Arrays",
    description: `
Compute water trapped after raining given elevation map.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (heights)
  `.trim(),
    outputFormat: `
Print units of water trapped
  `.trim(),
    samples: [
      { input: "12\n0 1 0 2 1 0 1 3 2 1 2 1\n", output: "6\n" },
    ],
  },
  {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "hard",
    category: "Recursion",
    description: `
Count distinct solutions to N-Queens puzzle.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print count of solutions
  `.trim(),
    samples: [
      { input: "4\n", output: "2\n" },
    ],
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    difficulty: "hard",
    category: "Recursion",
    description: `
Solve 9x9 Sudoku. Print YES if solvable, else NO.
  `.trim(),
    inputFormat: `
9 lines of 9 characters (use . for empty)
  `.trim(),
    outputFormat: `
Print YES if solvable, else NO
  `.trim(),
    samples: [
      { input: "53..7....\n6..195...\n.98....6.\n8...6...3\n4..8.3..1\n7...2...6\n.6....28.\n...419..5\n....8..79\n", output: "YES\n" },
    ],
  },
  {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "hard",
    category: "Dynamic Programming",
    description: `
Find minimum operations (insert/delete/replace) to convert word1 to word2.
  `.trim(),
    inputFormat: `
First line: word1
Second line: word2
  `.trim(),
    outputFormat: `
Print minimum operations
  `.trim(),
    samples: [
      { input: "horse\nros\n", output: "3\n" },
    ],
  },
  {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "hard",
    category: "Strings",
    description: `
Find length of longest valid parentheses substring.
  `.trim(),
    inputFormat: `
String S
  `.trim(),
    outputFormat: `
Print the length
  `.trim(),
    samples: [
      { input: "(()\n", output: "2\n" },
    ],
  },
  {
    id: "largest-rectangle",
    title: "Largest Rectangle in Histogram",
    difficulty: "hard",
    category: "Arrays",
    description: `
Find area of largest rectangle in histogram.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (heights)
  `.trim(),
    outputFormat: `
Print largest area
  `.trim(),
    samples: [
      { input: "6\n2 1 5 6 2 3\n", output: "10\n" },
    ],
  },
  {
    id: "maximal-rectangle",
    title: "Maximal Rectangle",
    difficulty: "hard",
    category: "Arrays",
    description: `
Find largest rectangle containing only 1s in binary matrix.
  `.trim(),
    inputFormat: `
First line: M N
Next M lines: N space-separated 0/1
  `.trim(),
    outputFormat: `
Print max area
  `.trim(),
    samples: [
      { input: "4 5\n1 0 1 0 0\n1 0 1 1 1\n1 1 1 1 1\n1 0 0 1 0\n", output: "6\n" },
    ],
  },
  {
    id: "distinct-subsequences",
    title: "Distinct Subsequences",
    difficulty: "hard",
    category: "Dynamic Programming",
    description: `
Count distinct subsequences of S that equal T.
  `.trim(),
    inputFormat: `
First line: string S
Second line: string T
  `.trim(),
    outputFormat: `
Print count
  `.trim(),
    samples: [
      { input: "rabbbit\nrabbit\n", output: "3\n" },
    ],
  },
  {
    id: "interleaving-string",
    title: "Interleaving String",
    difficulty: "hard",
    category: "Dynamic Programming",
    description: `
Check if S3 is formed by interleaving S1 and S2. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: S1
Second line: S2
Third line: S3
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "aabcc\ndbbca\naadbbcbcac\n", output: "YES\n" },
    ],
  },
  {
    id: "scramble-string",
    title: "Scramble String",
    difficulty: "hard",
    category: "Recursion",
    description: `
Check if S2 is scrambled string of S1. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: S1
Second line: S2
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "great\nrgeat\n", output: "YES\n" },
    ],
  },
  {
    id: "min-window-substring",
    title: "Minimum Window Substring",
    difficulty: "hard",
    category: "Strings",
    description: `
Find minimum window in S that contains all characters of T. Print length.
  `.trim(),
    inputFormat: `
First line: string S
Second line: string T
  `.trim(),
    outputFormat: `
Print minimum length or 0
  `.trim(),
    samples: [
      { input: "ADOBECODEBANC\nABC\n", output: "4\n" },
    ],
  },
  {
    id: "sliding-window-max",
    title: "Sliding Window Maximum",
    difficulty: "hard",
    category: "Arrays",
    description: `
Return max in each sliding window of size K.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: K
  `.trim(),
    outputFormat: `
Print max values space-separated
  `.trim(),
    samples: [
      { input: "8\n1 3 -1 -3 5 3 6 7\n3\n", output: "3 3 5 5 6 7\n" },
    ],
  },
  {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "hard",
    category: "Strings",
    description: `
Find shortest transformation length from beginWord to endWord. Return 0 if impossible.
  `.trim(),
    inputFormat: `
First line: beginWord
Second line: endWord
Third line: N (wordList size)
Next N lines: words
  `.trim(),
    outputFormat: `
Print shortest length or 0
  `.trim(),
    samples: [
      { input: "hit\ncog\n6\nhot\ndot\ndog\nlot\nlog\ncog\n", output: "5\n" },
    ],
  },
  {
    id: "palindrome-pairs",
    title: "Palindrome Pairs",
    difficulty: "hard",
    category: "Strings",
    description: `
Count pairs of indices where concatenation forms palindrome.
  `.trim(),
    inputFormat: `
First line: N
Next N lines: words
  `.trim(),
    outputFormat: `
Print count of pairs
  `.trim(),
    samples: [
      { input: "4\nabcd\ndcba\nlls\ns\n", output: "4\n" },
    ],
  },
  {
    id: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "hard",
    category: "Dynamic Programming",
    description: `
Burst balloons to maximize coins. Each burst gives nums[i-1]*nums[i]*nums[i+1] coins.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print maximum coins
  `.trim(),
    samples: [
      { input: "4\n3 1 5 8\n", output: "167\n" },
    ],
  },
  {
    id: "frog-jump",
    title: "Frog Jump",
    difficulty: "hard",
    category: "Dynamic Programming",
    description: `
Check if frog can cross river by jumping on stones. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers (stone positions)
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "5\n0 1 3 5 6\n", output: "YES\n" },
    ],
  },
  {
    id: "count-ranges",
    title: "Count of Range Sum",
    difficulty: "hard",
    category: "Arrays",
    description: `
Count range sums that lie in [lower, upper].
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
Third line: lower upper
  `.trim(),
    outputFormat: `
Print count
  `.trim(),
    samples: [
      { input: "3\n-2 5 -1\n-2 2\n", output: "3\n" },
    ],
  },
  {
    id: "serialize-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "hard",
    category: "Trees",
    description: `
Count nodes in tree given preorder traversal (N means null).
  `.trim(),
    inputFormat: `
Space-separated node values/N
  `.trim(),
    outputFormat: `
Print node count
  `.trim(),
    samples: [
      { input: "1 2 N N 3 4 N N 5 N N\n", output: "5\n" },
    ],
  },
  {
    id: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "hard",
    category: "Strings",
    description: `
Determine if word order is valid in alien language alphabet. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: N
Next N lines: words
Last line: alien alphabet order
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "3\nhello\nleetcode\ncc\nhlabcdefgijkmnopqrstuvwxyz\n", output: "YES\n" },
    ],
  },
  {
    id: "longest-consecutive",
    title: "Longest Consecutive Sequence",
    difficulty: "medium",
    category: "Arrays",
    description: `
Find length of longest consecutive elements sequence in unsorted array.
  `.trim(),
    inputFormat: `
First line: N
Second line: N space-separated integers
  `.trim(),
    outputFormat: `
Print the length
  `.trim(),
    samples: [
      { input: "6\n100 4 200 1 3 2\n", output: "4\n", explanation: "1,2,3,4" },
    ],
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "easy",
    category: "Math",
    description: `
Reverse digits of integer. Return 0 if overflow.
  `.trim(),
    inputFormat: `
Integer X
  `.trim(),
    outputFormat: `
Print reversed integer
  `.trim(),
    samples: [
      { input: "123\n", output: "321\n" },
      { input: "-123\n", output: "-321\n" },
    ],
  },
  {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "easy",
    category: "Math",
    description: `
Convert Roman numeral to integer.
  `.trim(),
    inputFormat: `
Roman numeral string
  `.trim(),
    outputFormat: `
Print integer value
  `.trim(),
    samples: [
      { input: "III\n", output: "3\n" },
      { input: "MCMXCIV\n", output: "1994\n" },
    ],
  },
  {
    id: "integer-to-roman",
    title: "Integer to Roman",
    difficulty: "medium",
    category: "Math",
    description: `
Convert integer to Roman numeral.
  `.trim(),
    inputFormat: `
Integer N (1 to 3999)
  `.trim(),
    outputFormat: `
Print Roman numeral
  `.trim(),
    samples: [
      { input: "3\n", output: "III\n" },
      { input: "1994\n", output: "MCMXCIV\n" },
    ],
  },
  {
    id: "hamming-distance",
    title: "Hamming Distance",
    difficulty: "easy",
    category: "Bit Manipulation",
    description: `
Find Hamming distance between two integers (count differing bits).
  `.trim(),
    inputFormat: `
Two integers X Y
  `.trim(),
    outputFormat: `
Print Hamming distance
  `.trim(),
    samples: [
      { input: "1 4\n", output: "2\n" },
    ],
  },
  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "medium",
    category: "Arrays",
    description: `
Count islands in 2D grid (1=land, 0=water). Islands are connected horizontally/vertically.
  `.trim(),
    inputFormat: `
First line: M N
Next M lines: N space-separated 0/1
  `.trim(),
    outputFormat: `
Print number of islands
  `.trim(),
    samples: [
      { input: "4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1\n", output: "3\n" },
    ],
  },
  {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "medium",
    category: "Graphs",
    description: `
Determine if you can finish all courses given prerequisites. Print YES or NO.
  `.trim(),
    inputFormat: `
First line: numCourses
Second line: N (prerequisites count)
Next N lines: course prerequisite
  `.trim(),
    outputFormat: `
Print YES if possible, else NO
  `.trim(),
    samples: [
      { input: "2\n1\n1 0\n", output: "YES\n" },
    ],
  },
  {
    id: "implement-trie",
    title: "Implement Trie Count",
    difficulty: "medium",
    category: "Strings",
    description: `
Count how many words were inserted into Trie.
  `.trim(),
    inputFormat: `
First line: N (operations)
Next N lines: operation word
  `.trim(),
    outputFormat: `
Print count of insert operations
  `.trim(),
    samples: [
      { input: "3\ninsert apple\nsearch apple\ninsert app\n", output: "2\n" },
    ],
  },
  {
    id: "lru-cache",
    title: "LRU Cache Operations",
    difficulty: "medium",
    category: "Design",
    description: `
Count successful get operations in LRU cache.
  `.trim(),
    inputFormat: `
First line: capacity
Second line: N (operations)
Next N lines: operation key [value]
  `.trim(),
    outputFormat: `
Print count of successful gets
  `.trim(),
    samples: [
      { input: "2\n4\nput 1 1\nput 2 2\nget 1\nget 2\n", output: "2\n" },
    ],
  },
  {
    id: "binary-tree-max-path",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "hard",
    category: "Trees",
    description: `
Find max path sum in binary tree given level-order (N for null).
  `.trim(),
    inputFormat: `
Space-separated values/N
  `.trim(),
    outputFormat: `
Print maximum path sum
  `.trim(),
    samples: [
      { input: "1 2 3\n", output: "6\n" },
    ],
  },
  {
    id: "count-primes",
    title: "Count Primes",
    difficulty: "medium",
    category: "Math",
    description: `
Count prime numbers less than N.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print count of primes
  `.trim(),
    samples: [
      { input: "10\n", output: "4\n", explanation: "2,3,5,7" },
    ],
  },
  {
    id: "happy-number",
    title: "Happy Number",
    difficulty: "easy",
    category: "Math",
    description: `
Determine if N is happy number (sum of squares of digits eventually becomes 1). Print YES or NO.
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print YES or NO
  `.trim(),
    samples: [
      { input: "19\n", output: "YES\n" },
    ],
  },
  {
    id: "ugly-number",
    title: "Ugly Number II",
    difficulty: "medium",
    category: "Math",
    description: `
Find the Nth ugly number (positive number whose prime factors are only 2, 3, 5).
  `.trim(),
    inputFormat: `
Integer N
  `.trim(),
    outputFormat: `
Print Nth ugly number
  `.trim(),
    samples: [
      { input: "10\n", output: "12\n" },
    ],
  },
];

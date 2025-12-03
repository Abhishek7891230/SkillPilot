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
- First line: integer A
- Second line: integer B
  `.trim(),
    outputFormat: `
- Print A + B
  `.trim(),
    constraints: `
- -10^9 <= A, B <= 10^9
  `.trim(),
    samples: [
      { input: "3\n4\n", output: "7\n", explanation: "3 + 4 = 7" },
      { input: "-5\n10\n", output: "5\n", explanation: "-5 + 10 = 5" },
    ],
    testCases: [
      { input: "0\n0\n", expected: "0" },
      { input: "100\n200\n", expected: "300" },
      { input: "-10\n-20\n", expected: "-30" },
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
    inputFormat: `
- First line: integer N
- Second line: N space-separated integers
  `.trim(),
    outputFormat: `
- Print the maximum element
  `.trim(),
    constraints: `
- 1 <= N <= 10^5
  `.trim(),
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "5\n", explanation: "Max is 5" },
      { input: "4\n-5 -1 -7 -3\n", output: "-1\n", explanation: "Max is -1" },
    ],
    testCases: [
      { input: "1\n42\n", expected: "42" },
      { input: "3\n10 10 10\n", expected: "10" },
      { input: "6\n-1 0 -2 10 3 9\n", expected: "10" },
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
- First line: integer N
- Second line: N space-separated integers
  `.trim(),
    outputFormat: `
- Print the count of even integers
  `.trim(),
    samples: [
      { input: "5\n1 2 3 4 6\n", output: "3\n", explanation: "2,4,6 are even" },
    ],
    testCases: [
      { input: "4\n1 3 5 7\n", expected: "0" },
      { input: "4\n2 4 6 8\n", expected: "4" },
      { input: "6\n1 2 3 4 5 6\n", expected: "3" },
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
- A single line containing string S
  `.trim(),
    outputFormat: `
- Print reversed string
  `.trim(),
    samples: [{ input: "hello\n", output: "olleh\n" }],
    testCases: [
      { input: "abc\n", expected: "cba" },
      { input: "racecar\n", expected: "racecar" },
      { input: "SkillPilot\n", expected: "toliPlikS" },
    ],
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
- A single line string S
  `.trim(),
    outputFormat: `
- Output YES if palindrome else NO
  `.trim(),
    samples: [{ input: "madam\n", output: "YES\n" }],
    testCases: [
      { input: "abba\n", expected: "YES" },
      { input: "abc\n", expected: "NO" },
      { input: "a\n", expected: "YES" },
    ],
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
- Integer N
  `.trim(),
    outputFormat: `
- Print N!
  `.trim(),
    samples: [{ input: "5\n", output: "120\n" }],
    testCases: [
      { input: "0\n", expected: "1" },
      { input: "3\n", expected: "6" },
      { input: "6\n", expected: "720" },
    ],
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
- N
- N space-separated integers
  `.trim(),
    outputFormat: `
- Print the sum
  `.trim(),
    samples: [{ input: "4\n1 2 3 4\n", output: "10\n" }],
    testCases: [
      { input: "3\n10 10 10\n", expected: "30" },
      { input: "5\n-1 -2 -3 -4 -5\n", expected: "-15" },
      { input: "1\n999\n", expected: "999" },
    ],
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
- String S
  `.trim(),
    outputFormat: `
- Print number of vowels
  `.trim(),
    samples: [{ input: "hello\n", output: "2\n" }],
    testCases: [
      { input: "SkillPilot\n", expected: "3" },
      { input: "bcd\n", expected: "0" },
      { input: "aeiouAEIOU\n", expected: "10" },
    ],
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
- N
- N space-separated integers
  `.trim(),
    outputFormat: `
- Print second largest element
  `.trim(),
    samples: [{ input: "5\n1 2 3 4 5\n", output: "4\n" }],
    testCases: [
      { input: "4\n10 20 30 40\n", expected: "30" },
      { input: "3\n5 5 3\n", expected: "3" },
      { input: "5\n9 8 7 6 5\n", expected: "8" },
    ],
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
- Integer N
  `.trim(),
    outputFormat: `
- Print number of digits
  `.trim(),
    samples: [{ input: "12345\n", output: "5\n" }],
    testCases: [
      { input: "0\n", expected: "1" },
      { input: "999\n", expected: "3" },
      { input: "-12345\n", expected: "5" },
    ],
  },
];

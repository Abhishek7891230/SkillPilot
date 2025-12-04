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
  },
];

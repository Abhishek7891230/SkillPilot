export const mockCodingQuestions = [
  {
    id: "sum-of-positives",
    title: "Sum of Positive Numbers",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array of integers, compute the sum of only the positive values.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `
Print sum of positive numbers
`.trim(),
    samples: [
      { input: "5\n1 -2 3 4 -1\n", output: "8\n", explanation: "1+3+4=8" },
    ],
  },

  {
    id: "remove-spaces",
    title: "Remove All Spaces",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, remove all spaces from it.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print S without spaces`,
    samples: [{ input: "a b  c\n", output: "abc\n" }],
  },

  {
    id: "product-of-numbers",
    title: "Product of Numbers",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, print their product.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print A * B`,
    samples: [
      { input: "3 4\n", output: "12\n" },
      { input: "-2 5\n", output: "-10\n" },
    ],
  },

  {
    id: "string-toggle-case",
    title: "Toggle Case of String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, convert lowercase letters to uppercase and uppercase to lowercase.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print toggled-case string`,
    samples: [{ input: "HeLLo\n", output: "hEllO\n" }],
  },

  {
    id: "count-frequency",
    title: "Count Frequency of a Number",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers and a target X, count how many times X appears.
`.trim(),
    inputFormat: `
N
N space-separated integers
X
`.trim(),
    outputFormat: `Print count`,
    samples: [{ input: "5\n1 2 3 2 2\n2\n", output: "3\n" }],
  },

  {
    id: "sum-until-zero",
    title: "Sum Until Zero",
    difficulty: "easy",
    category: "Loops",
    description: `
Keep reading integers until a 0 is encountered.
Print the sum of all non-zero values.
`.trim(),
    inputFormat: `Integers until 0`,
    outputFormat: `Print sum`,
    samples: [{ input: "3\n5\n-2\n0\n", output: "6\n" }],
  },

  {
    id: "longest-word",
    title: "Find Longest Word",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a sentence S containing multiple words, print the longest word. If ties, print the first longest.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print the longest word`,
    samples: [{ input: "I love programming\n", output: "programming\n" }],
  },

  {
    id: "count-uppercase",
    title: "Count Uppercase Letters",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, count how many characters are uppercase English letters.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print count`,
    samples: [{ input: "HeLLo WorLD\n", output: "6\n" }],
  },

  {
    id: "array-reverse-print",
    title: "Reverse Array Output",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, print them in reverse order (space-separated).
`.trim(),
    inputFormat: `
N
N numbers
`.trim(),
    outputFormat: `Print numbers in reverse`,
    samples: [{ input: "5\n1 2 3 4 5\n", output: "5 4 3 2 1\n" }],
  },

  {
    id: "is-anagram",
    title: "Check Anagram",
    difficulty: "easy",
    category: "Strings",
    description: `
Given two strings A and B, determine if they are anagrams.
Print YES or NO.
Ignore case differences.
`.trim(),
    inputFormat: `
String A
String B
`.trim(),
    outputFormat: `YES or NO`,
    samples: [
      { input: "Listen\nSilent\n", output: "YES\n" },
      { input: "Hello\nWorld\n", output: "NO\n" },
    ],
  },
];

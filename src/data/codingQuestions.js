export const codingQuestions = [
  {
    id: "sum-of-two-numbers",
    title: "Sum of Two Numbers",
    difficulty: "easy",
    category: "Basics",
    description: `
Given two integers A and B, print their sum.

You need to read the input from standard input (stdin) and print the result to standard output (stdout).
    `.trim(),
    inputFormat: `
- The first line contains an integer A.
- The second line contains an integer B.
    `.trim(),
    outputFormat: `
- Print a single integer: the sum of A and B.
    `.trim(),
    constraints: `
- -10^9 <= A, B <= 10^9
    `.trim(),
    samples: [
      {
        input: "3\n4\n",
        output: "7\n",
        explanation: "3 + 4 = 7",
      },
      {
        input: "-5\n10\n",
        output: "5\n",
        explanation: "-5 + 10 = 5",
      },
    ],
    // This will be used LATER by backend only (NOT exposed to user)
    testCases: [
      { input: "0\n0\n", output: "0\n" },
      { input: "100\n200\n", output: "300\n" },
      { input: "-10\n-20\n", output: "-30\n" },
    ],
  },

  {
    id: "max-of-array",
    title: "Maximum in an Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given an array of N integers, find the maximum element.

Read from stdin and print the answer to stdout.
    `.trim(),
    inputFormat: `
- First line: integer N (size of array)
- Second line: N space-separated integers
    `.trim(),
    outputFormat: `
- Print a single integer: the maximum element in the array.
    `.trim(),
    constraints: `
- 1 <= N <= 10^5
- -10^9 <= arr[i] <= 10^9
    `.trim(),
    samples: [
      {
        input: "5\n1 2 3 4 5\n",
        output: "5\n",
        explanation: "Max of [1,2,3,4,5] is 5",
      },
      {
        input: "4\n-5 -1 -7 -3\n",
        output: "-1\n",
        explanation: "Max of [-5,-1,-7,-3] is -1",
      },
    ],
    testCases: [
      { input: "1\n42\n", output: "42\n" },
      { input: "3\n10 10 10\n", output: "10\n" },
      { input: "6\n-1 0 -2 10 3 9\n", output: "10\n" },
    ],
  },
];

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
  {
    id: "find-max-min",
    title: "Find Maximum and Minimum",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, find and print the maximum and minimum values.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print max and min space-separated`,
    samples: [
      { input: "5\n3 1 4 1 5\n", output: "5 1\n" },
    ],
  },
  {
    id: "count-words",
    title: "Count Words in String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, count how many words it contains.
Words are separated by spaces.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print word count`,
    samples: [
      { input: "Hello world from code\n", output: "4\n" },
    ],
  },
  {
    id: "sum-digits",
    title: "Sum of Digits",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, compute the sum of its digits.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print sum of digits`,
    samples: [
      { input: "12345\n", output: "15\n" },
    ],
  },
  {
    id: "check-even-odd",
    title: "Check Even or Odd",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, print "EVEN" if it's even, "ODD" otherwise.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print EVEN or ODD`,
    samples: [
      { input: "4\n", output: "EVEN\n" },
      { input: "7\n", output: "ODD\n" },
    ],
  },
  {
    id: "reverse-number",
    title: "Reverse a Number",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, reverse its digits and print the result.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print reversed number`,
    samples: [
      { input: "12345\n", output: "54321\n" },
    ],
  },
  {
    id: "check-palindrome-number",
    title: "Check Palindrome Number",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, check if it's a palindrome. Print YES or NO.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "121\n", output: "YES\n" },
      { input: "123\n", output: "NO\n" },
    ],
  },
  {
    id: "find-average",
    title: "Find Average of Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute and print their average (rounded to 2 decimal places).
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print average with 2 decimals`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "3.00\n" },
    ],
  },
  {
    id: "count-lowercase",
    title: "Count Lowercase Letters",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, count how many characters are lowercase English letters.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print count`,
    samples: [
      { input: "HeLLo WorLD\n", output: "4\n" },
    ],
  },
  {
    id: "remove-duplicates-string",
    title: "Remove Duplicate Characters",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, remove all duplicate characters and print the result.
Keep the first occurrence of each character.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print string without duplicates`,
    samples: [
      { input: "programming\n", output: "progamin\n" },
    ],
  },
  {
    id: "find-second-max",
    title: "Find Second Maximum",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, find the second largest value.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print second maximum`,
    samples: [
      { input: "5\n1 5 3 4 2\n", output: "4\n" },
    ],
  },
  {
    id: "count-consonants",
    title: "Count Consonants",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, count how many characters are consonants (non-vowels).
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print consonant count`,
    samples: [
      { input: "Hello World\n", output: "7\n" },
    ],
  },
  {
    id: "multiply-array",
    title: "Multiply All Array Elements",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute and print the product of all elements.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print product`,
    samples: [
      { input: "4\n2 3 4 5\n", output: "120\n" },
    ],
  },
  {
    id: "check-substring",
    title: "Check if Substring Exists",
    difficulty: "easy",
    category: "Strings",
    description: `
Given two strings S and T, check if T is a substring of S. Print YES or NO.
`.trim(),
    inputFormat: `
String S
String T
`.trim(),
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "programming\nram\n", output: "YES\n" },
    ],
  },
  {
    id: "find-median",
    title: "Find Median of Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers (N is odd), find and print the median value.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print median`,
    samples: [
      { input: "5\n1 3 2 5 4\n", output: "3\n" },
    ],
  },
  {
    id: "capitalize-first",
    title: "Capitalize First Letter",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, capitalize the first letter of each word.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print capitalized string`,
    samples: [
      { input: "hello world\n", output: "Hello World\n" },
    ],
  },
  {
    id: "count-zeros",
    title: "Count Zeros in Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, count how many are zero.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print count of zeros`,
    samples: [
      { input: "5\n0 1 0 2 0\n", output: "3\n" },
    ],
  },
  {
    id: "reverse-words",
    title: "Reverse Words in String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S with words separated by spaces, reverse the order of words.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print reversed words`,
    samples: [
      { input: "hello world from code\n", output: "code from world hello\n" },
    ],
  },
  {
    id: "find-range",
    title: "Find Range of Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, find the range (max - min) and print it.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print range`,
    samples: [
      { input: "5\n1 5 3 2 4\n", output: "4\n" },
    ],
  },
  {
    id: "check-sorted",
    title: "Check if Array is Sorted",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, check if they are sorted in ascending order. Print YES or NO.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "YES\n" },
      { input: "5\n1 3 2 4 5\n", output: "NO\n" },
    ],
  },
  {
    id: "count-special-chars",
    title: "Count Special Characters",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, count special characters (non-alphanumeric).
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print count`,
    samples: [
      { input: "Hello@World#123\n", output: "2\n" },
    ],
  },
  {
    id: "find-mode",
    title: "Find Mode of Array",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, find the most frequently occurring value.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print mode`,
    samples: [
      { input: "5\n1 2 2 3 2\n", output: "2\n" },
    ],
  },
  {
    id: "remove-vowels",
    title: "Remove Vowels from String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, remove all vowels and print the result.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print string without vowels`,
    samples: [
      { input: "Hello World\n", output: "Hll Wrld\n" },
    ],
  },
  {
    id: "sum-diagonal",
    title: "Sum of Diagonal Elements",
    difficulty: "medium",
    category: "Arrays",
    description: `
Given a square matrix of size N, compute the sum of main diagonal elements.
`.trim(),
    inputFormat: `
N
N lines of N space-separated integers
`.trim(),
    outputFormat: `Print diagonal sum`,
    samples: [
      { input: "3\n1 2 3\n4 5 6\n7 8 9\n", output: "15\n" },
    ],
  },
  {
    id: "find-longest-palindrome",
    title: "Find Longest Palindrome Substring",
    difficulty: "medium",
    category: "Strings",
    description: `
Given a string S, find the length of the longest palindromic substring.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print length`,
    samples: [
      { input: "babad\n", output: "3\n" },
    ],
  },
  {
    id: "rotate-matrix",
    title: "Rotate Matrix 90 Degrees",
    difficulty: "medium",
    category: "Arrays",
    description: `
Given a square matrix, rotate it 90 degrees clockwise and print it.
`.trim(),
    inputFormat: `
N
N lines of N space-separated integers
`.trim(),
    outputFormat: `Print rotated matrix`,
    samples: [
      { input: "3\n1 2 3\n4 5 6\n7 8 9\n", output: "7 4 1\n8 5 2\n9 6 3\n" },
    ],
  },
  {
    id: "find-common-elements",
    title: "Find Common Elements",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given two arrays, find and print common elements (space-separated).
`.trim(),
    inputFormat: `
N M
N space-separated integers
M space-separated integers
`.trim(),
    outputFormat: `Print common elements`,
    samples: [
      { input: "3 3\n1 2 3\n2 3 4\n", output: "2 3\n" },
    ],
  },
  {
    id: "check-perfect-square",
    title: "Check Perfect Square",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, check if it's a perfect square. Print YES or NO.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "16\n", output: "YES\n" },
      { input: "15\n", output: "NO\n" },
    ],
  },
  {
    id: "find-gcd",
    title: "Find GCD of Two Numbers",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, find their Greatest Common Divisor.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print GCD`,
    samples: [
      { input: "12 8\n", output: "4\n" },
    ],
  },
  {
    id: "find-lcm",
    title: "Find LCM of Two Numbers",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, find their Least Common Multiple.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print LCM`,
    samples: [
      { input: "12 8\n", output: "24\n" },
    ],
  },
  {
    id: "count-primes-in-range",
    title: "Count Primes in Range",
    difficulty: "medium",
    category: "Math",
    description: `
Given two integers L and R, count how many prime numbers are in the range [L, R].
`.trim(),
    inputFormat: `L R`,
    outputFormat: `Print count`,
    samples: [
      { input: "10 20\n", output: "4\n" },
    ],
  },
  {
    id: "find-factors",
    title: "Find All Factors",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, find and print all its factors (space-separated).
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print factors space-separated`,
    samples: [
      { input: "12\n", output: "1 2 3 4 6 12\n" },
    ],
  },
  {
    id: "check-armstrong",
    title: "Check Armstrong Number",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, check if it's an Armstrong number. Print YES or NO.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "153\n", output: "YES\n" },
    ],
  },
  {
    id: "find-fibonacci-series",
    title: "Print Fibonacci Series",
    difficulty: "easy",
    category: "Math",
    description: `
Given N, print first N Fibonacci numbers (space-separated).
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print N Fibonacci numbers`,
    samples: [
      { input: "7\n", output: "0 1 1 2 3 5 8\n" },
    ],
  },
  {
    id: "check-prime-factor",
    title: "Check Prime Factorization",
    difficulty: "medium",
    category: "Math",
    description: `
Given an integer N, print its prime factors (space-separated).
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print prime factors`,
    samples: [
      { input: "12\n", output: "2 2 3\n" },
    ],
  },
  {
    id: "find-perfect-number",
    title: "Check Perfect Number",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, check if sum of its proper divisors equals N. Print YES or NO.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "6\n", output: "YES\n" },
    ],
  },
  {
    id: "count-digits-recursive",
    title: "Count Digits Recursively",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, count its digits using recursion concept.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print digit count`,
    samples: [
      { input: "12345\n", output: "5\n" },
    ],
  },
  {
    id: "find-power",
    title: "Calculate Power",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers X and N, compute X raised to power N.
`.trim(),
    inputFormat: `X N`,
    outputFormat: `Print X^N`,
    samples: [
      { input: "2 10\n", output: "1024\n" },
    ],
  },
  {
    id: "find-square-root",
    title: "Find Square Root",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, find its integer square root (floor value).
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print square root`,
    samples: [
      { input: "16\n", output: "4\n" },
      { input: "15\n", output: "3\n" },
    ],
  },
  {
    id: "check-triangle",
    title: "Check Valid Triangle",
    difficulty: "easy",
    category: "Math",
    description: `
Given three integers A, B, C, check if they form a valid triangle. Print YES or NO.
`.trim(),
    inputFormat: `A B C`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "3 4 5\n", output: "YES\n" },
      { input: "1 2 5\n", output: "NO\n" },
    ],
  },
  {
    id: "find-area-circle",
    title: "Find Area of Circle",
    difficulty: "easy",
    category: "Math",
    description: `
Given radius R, compute and print area of circle (rounded to 2 decimals).
`.trim(),
    inputFormat: `R`,
    outputFormat: `Print area`,
    samples: [
      { input: "5\n", output: "78.54\n" },
    ],
  },
  {
    id: "find-perimeter-rectangle",
    title: "Find Perimeter of Rectangle",
    difficulty: "easy",
    category: "Math",
    description: `
Given length L and width W, compute perimeter of rectangle.
`.trim(),
    inputFormat: `L W`,
    outputFormat: `Print perimeter`,
    samples: [
      { input: "5 3\n", output: "16\n" },
    ],
  },
  {
    id: "swap-without-temp",
    title: "Swap Two Numbers",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, swap them without using a temporary variable and print.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print swapped values`,
    samples: [
      { input: "5 10\n", output: "10 5\n" },
    ],
  },
  {
    id: "find-absolute-difference",
    title: "Find Absolute Difference",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, find absolute difference |A - B|.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print absolute difference`,
    samples: [
      { input: "5 10\n", output: "5\n" },
      { input: "10 5\n", output: "5\n" },
    ],
  },
  {
    id: "check-divisible",
    title: "Check Divisibility",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers N and D, check if N is divisible by D. Print YES or NO.
`.trim(),
    inputFormat: `N D`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "12 4\n", output: "YES\n" },
      { input: "12 5\n", output: "NO\n" },
    ],
  },
  {
    id: "find-remainder",
    title: "Find Remainder",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, find A mod B (remainder when A is divided by B).
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print remainder`,
    samples: [
      { input: "17 5\n", output: "2\n" },
    ],
  },
  {
    id: "find-quotient",
    title: "Find Quotient",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, find integer division A / B.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print quotient`,
    samples: [
      { input: "17 5\n", output: "3\n" },
    ],
  },
  {
    id: "check-multiple",
    title: "Check if Multiple",
    difficulty: "easy",
    category: "Math",
    description: `
Given two integers A and B, check if A is a multiple of B. Print YES or NO.
`.trim(),
    inputFormat: `A B`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "12 4\n", output: "YES\n" },
    ],
  },
  {
    id: "find-sum-squares",
    title: "Sum of Squares",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, compute sum of squares from 1 to N.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print sum of squares`,
    samples: [
      { input: "5\n", output: "55\n" },
    ],
  },
  {
    id: "find-sum-cubes",
    title: "Sum of Cubes",
    difficulty: "easy",
    category: "Math",
    description: `
Given an integer N, compute sum of cubes from 1 to N.
`.trim(),
    inputFormat: `Integer N`,
    outputFormat: `Print sum of cubes`,
    samples: [
      { input: "3\n", output: "36\n" },
    ],
  },
  {
    id: "check-leap-year",
    title: "Check Leap Year",
    difficulty: "easy",
    category: "Math",
    description: `
Given a year Y, check if it's a leap year. Print YES or NO.
`.trim(),
    inputFormat: `Y`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "2024\n", output: "YES\n" },
      { input: "2023\n", output: "NO\n" },
    ],
  },
  {
    id: "find-day-of-week",
    title: "Find Day of Week",
    difficulty: "medium",
    category: "Math",
    description: `
Given date (DD MM YYYY), find day of week. Print day name.
`.trim(),
    inputFormat: `DD MM YYYY`,
    outputFormat: `Print day name`,
    samples: [
      { input: "01 01 2024\n", output: "Monday\n" },
    ],
  },
  {
    id: "count-characters",
    title: "Count Characters in String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, count total characters (excluding spaces).
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print character count`,
    samples: [
      { input: "Hello World\n", output: "10\n" },
    ],
  },
  {
    id: "find-first-char",
    title: "Find First Character",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, print its first character.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print first character`,
    samples: [
      { input: "Hello\n", output: "H\n" },
    ],
  },
  {
    id: "find-last-char",
    title: "Find Last Character",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, print its last character.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print last character`,
    samples: [
      { input: "Hello\n", output: "o\n" },
    ],
  },
  {
    id: "extract-substring",
    title: "Extract Substring",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S, start index I, and length L, extract and print substring.
`.trim(),
    inputFormat: `
String S
I L
`.trim(),
    outputFormat: `Print substring`,
    samples: [
      { input: "programming\n3 4\n", output: "gram\n" },
    ],
  },
  {
    id: "replace-char",
    title: "Replace Character",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S, old character O, and new character N, replace all O with N.
`.trim(),
    inputFormat: `
String S
O N
`.trim(),
    outputFormat: `Print replaced string`,
    samples: [
      { input: "hello\nl x\n", output: "hexxo\n" },
    ],
  },
  {
    id: "check-prefix",
    title: "Check Prefix",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S and prefix P, check if S starts with P. Print YES or NO.
`.trim(),
    inputFormat: `
String S
String P
`.trim(),
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "programming\npro\n", output: "YES\n" },
    ],
  },
  {
    id: "check-suffix",
    title: "Check Suffix",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S and suffix P, check if S ends with P. Print YES or NO.
`.trim(),
    inputFormat: `
String S
String P
`.trim(),
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "programming\ning\n", output: "YES\n" },
    ],
  },
  {
    id: "count-occurrences",
    title: "Count Character Occurrences",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S and character C, count how many times C appears in S.
`.trim(),
    inputFormat: `
String S
Character C
`.trim(),
    outputFormat: `Print count`,
    samples: [
      { input: "programming\ng\n", output: "2\n" },
    ],
  },
  {
    id: "remove-char",
    title: "Remove Character",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S and character C, remove all occurrences of C from S.
`.trim(),
    inputFormat: `
String S
Character C
`.trim(),
    outputFormat: `Print string without C`,
    samples: [
      { input: "programming\ng\n", output: "prorammin\n" },
    ],
  },
  {
    id: "insert-char",
    title: "Insert Character at Position",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S, character C, and position P, insert C at position P.
`.trim(),
    inputFormat: `
String S
C P
`.trim(),
    outputFormat: `Print modified string`,
    samples: [
      { input: "hello\nX 2\n", output: "heXllo\n" },
    ],
  },
  {
    id: "find-char-position",
    title: "Find Character Position",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S and character C, find first occurrence index of C. Print -1 if not found.
`.trim(),
    inputFormat: `
String S
Character C
`.trim(),
    outputFormat: `Print index or -1`,
    samples: [
      { input: "programming\ng\n", output: "3\n" },
    ],
  },
  {
    id: "find-all-positions",
    title: "Find All Character Positions",
    difficulty: "easy",
    category: "Strings",
    description: `
Given string S and character C, find all positions where C appears (space-separated).
`.trim(),
    inputFormat: `
String S
Character C
`.trim(),
    outputFormat: `Print positions`,
    samples: [
      { input: "programming\ng\n", output: "3 10\n" },
    ],
  },
  {
    id: "check-alphanumeric",
    title: "Check Alphanumeric",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, check if all characters are alphanumeric. Print YES or NO.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "Hello123\n", output: "YES\n" },
      { input: "Hello@123\n", output: "NO\n" },
    ],
  },
  {
    id: "convert-to-lowercase",
    title: "Convert to Lowercase",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, convert all characters to lowercase.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print lowercase string`,
    samples: [
      { input: "HeLLo WoRLd\n", output: "hello world\n" },
    ],
  },
  {
    id: "convert-to-uppercase",
    title: "Convert to Uppercase",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, convert all characters to uppercase.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print uppercase string`,
    samples: [
      { input: "HeLLo WoRLd\n", output: "HELLO WORLD\n" },
    ],
  },
  {
    id: "find-shortest-word",
    title: "Find Shortest Word",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a sentence S, find and print the shortest word.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print shortest word`,
    samples: [
      { input: "I love programming\n", output: "I\n" },
    ],
  },
  {
    id: "sort-words",
    title: "Sort Words Alphabetically",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a sentence S, sort words alphabetically and print them (space-separated).
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print sorted words`,
    samples: [
      { input: "hello world from code\n", output: "code from hello world\n" },
    ],
  },
  {
    id: "remove-leading-zeros",
    title: "Remove Leading Zeros",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S representing a number, remove leading zeros and print.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print number without leading zeros`,
    samples: [
      { input: "00012345\n", output: "12345\n" },
    ],
  },
  {
    id: "check-binary-string",
    title: "Check Binary String",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, check if it contains only 0s and 1s. Print YES or NO.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "101010\n", output: "YES\n" },
      { input: "1012\n", output: "NO\n" },
    ],
  },
  {
    id: "find-binary-sum",
    title: "Sum of Binary Strings",
    difficulty: "medium",
    category: "Strings",
    description: `
Given two binary strings A and B, compute their sum as binary string.
`.trim(),
    inputFormat: `
String A
String B
`.trim(),
    outputFormat: `Print binary sum`,
    samples: [
      { input: "11\n1\n", output: "100\n" },
    ],
  },
  {
    id: "count-word-frequency",
    title: "Count Word Frequency",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a sentence S and word W, count how many times W appears in S.
`.trim(),
    inputFormat: `
String S
String W
`.trim(),
    outputFormat: `Print frequency`,
    samples: [
      { input: "hello world hello\nhello\n", output: "2\n" },
    ],
  },
  {
    id: "find-unique-words",
    title: "Find Unique Words",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a sentence S, find and print unique words (space-separated).
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print unique words`,
    samples: [
      { input: "hello world hello\n", output: "hello world\n" },
    ],
  },
  {
    id: "check-pangram",
    title: "Check Pangram",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, check if it contains all letters of alphabet. Print YES or NO.
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "The quick brown fox jumps over the lazy dog\n", output: "YES\n" },
    ],
  },
  {
    id: "find-missing-letters",
    title: "Find Missing Letters",
    difficulty: "easy",
    category: "Strings",
    description: `
Given a string S, find letters of alphabet that are missing. Print them (lowercase, no spaces).
`.trim(),
    inputFormat: `String S`,
    outputFormat: `Print missing letters`,
    samples: [
      { input: "The quick brown fox\n", output: "dgjlpsuvwyz\n" },
    ],
  },
  {
    id: "sort-array-ascending",
    title: "Sort Array Ascending",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, sort them in ascending order and print (space-separated).
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print sorted array`,
    samples: [
      { input: "5\n3 1 4 1 5\n", output: "1 1 3 4 5\n" },
    ],
  },
  {
    id: "sort-array-descending",
    title: "Sort Array Descending",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, sort them in descending order and print (space-separated).
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print sorted array`,
    samples: [
      { input: "5\n3 1 4 1 5\n", output: "5 4 3 1 1\n" },
    ],
  },
  {
    id: "find-kth-smallest",
    title: "Find Kth Smallest Element",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers and K, find the Kth smallest element.
`.trim(),
    inputFormat: `
N
N space-separated integers
K
`.trim(),
    outputFormat: `Print Kth smallest`,
    samples: [
      { input: "5\n3 1 4 1 5\n2\n", output: "1\n" },
    ],
  },
  {
    id: "find-kth-largest",
    title: "Find Kth Largest Element",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers and K, find the Kth largest element.
`.trim(),
    inputFormat: `
N
N space-separated integers
K
`.trim(),
    outputFormat: `Print Kth largest`,
    samples: [
      { input: "5\n3 1 4 1 5\n2\n", output: "4\n" },
    ],
  },
  {
    id: "find-pairs-sum",
    title: "Find Pairs with Given Sum",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers and target T, count pairs that sum to T.
`.trim(),
    inputFormat: `
N
N space-separated integers
T
`.trim(),
    outputFormat: `Print count of pairs`,
    samples: [
      { input: "5\n1 2 3 4 5\n5\n", output: "2\n" },
    ],
  },
  {
    id: "find-triplets-sum",
    title: "Find Triplets with Given Sum",
    difficulty: "medium",
    category: "Arrays",
    description: `
Given N integers and target T, count triplets that sum to T.
`.trim(),
    inputFormat: `
N
N space-separated integers
T
`.trim(),
    outputFormat: `Print count of triplets`,
    samples: [
      { input: "6\n1 2 3 4 5 6\n6\n", output: "1\n" },
    ],
  },
  {
    id: "find-missing-number-range",
    title: "Find Missing Number in Range",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N-1 integers from range 1 to N, find the missing number.
`.trim(),
    inputFormat: `
N
N-1 space-separated integers
`.trim(),
    outputFormat: `Print missing number`,
    samples: [
      { input: "5\n1 2 4 5\n", output: "3\n" },
    ],
  },
  {
    id: "find-duplicate-number",
    title: "Find Duplicate Number",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N+1 integers containing one duplicate, find the duplicate.
`.trim(),
    inputFormat: `
N
N+1 space-separated integers
`.trim(),
    outputFormat: `Print duplicate`,
    samples: [
      { input: "4\n1 2 3 2 4\n", output: "2\n" },
    ],
  },
  {
    id: "merge-arrays",
    title: "Merge Two Arrays",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given two arrays, merge them and print (space-separated).
`.trim(),
    inputFormat: `
N M
N space-separated integers
M space-separated integers
`.trim(),
    outputFormat: `Print merged array`,
    samples: [
      { input: "3 2\n1 2 3\n4 5\n", output: "1 2 3 4 5\n" },
    ],
  },
  {
    id: "find-union",
    title: "Find Union of Arrays",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given two arrays, find union (all unique elements, space-separated).
`.trim(),
    inputFormat: `
N M
N space-separated integers
M space-separated integers
`.trim(),
    outputFormat: `Print union`,
    samples: [
      { input: "3 3\n1 2 3\n2 3 4\n", output: "1 2 3 4\n" },
    ],
  },
  {
    id: "find-intersection",
    title: "Find Intersection of Arrays",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given two arrays, find intersection (common elements, space-separated).
`.trim(),
    inputFormat: `
N M
N space-separated integers
M space-separated integers
`.trim(),
    outputFormat: `Print intersection`,
    samples: [
      { input: "3 3\n1 2 3\n2 3 4\n", output: "2 3\n" },
    ],
  },
  {
    id: "find-difference",
    title: "Find Difference of Arrays",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given two arrays A and B, find elements in A but not in B (space-separated).
`.trim(),
    inputFormat: `
N M
N space-separated integers
M space-separated integers
`.trim(),
    outputFormat: `Print difference`,
    samples: [
      { input: "3 3\n1 2 3\n2 3 4\n", output: "1\n" },
    ],
  },
  {
    id: "check-array-equal",
    title: "Check if Arrays are Equal",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given two arrays, check if they contain same elements. Print YES or NO.
`.trim(),
    inputFormat: `
N M
N space-separated integers
M space-separated integers
`.trim(),
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "3 3\n1 2 3\n1 2 3\n", output: "YES\n" },
      { input: "3 3\n1 2 3\n1 3 2\n", output: "NO\n" },
    ],
  },
  {
    id: "find-array-sum",
    title: "Sum of Array Elements",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute and print their sum.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print sum`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "15\n" },
    ],
  },
  {
    id: "find-array-product",
    title: "Product of Array Elements",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute and print their product.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print product`,
    samples: [
      { input: "4\n2 3 4 5\n", output: "120\n" },
    ],
  },
  {
    id: "find-array-average",
    title: "Average of Array Elements",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute and print their average (rounded to 2 decimals).
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print average`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "3.00\n" },
    ],
  },
  {
    id: "count-positive-negative",
    title: "Count Positive and Negative",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, count positive and negative numbers. Print counts space-separated.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print positive_count negative_count`,
    samples: [
      { input: "5\n1 -2 3 -4 5\n", output: "3 2\n" },
    ],
  },
  {
    id: "find-even-odd-count",
    title: "Count Even and Odd Numbers",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, count even and odd numbers. Print counts space-separated.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print even_count odd_count`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "2 3\n" },
    ],
  },
  {
    id: "find-sum-even",
    title: "Sum of Even Numbers",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute sum of only even numbers.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print sum of evens`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "6\n" },
    ],
  },
  {
    id: "find-sum-odd",
    title: "Sum of Odd Numbers",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, compute sum of only odd numbers.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print sum of odds`,
    samples: [
      { input: "5\n1 2 3 4 5\n", output: "9\n" },
    ],
  },
  {
    id: "find-max-min-difference",
    title: "Difference of Max and Min",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, find difference between maximum and minimum.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print max - min`,
    samples: [
      { input: "5\n1 5 3 2 4\n", output: "4\n" },
    ],
  },
  {
    id: "find-second-min",
    title: "Find Second Minimum",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, find the second smallest value.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print second minimum`,
    samples: [
      { input: "5\n1 5 3 2 4\n", output: "2\n" },
    ],
  },
  {
    id: "check-array-palindrome",
    title: "Check if Array is Palindrome",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers, check if array reads same forwards and backwards. Print YES or NO.
`.trim(),
    inputFormat: `
N
N space-separated integers
`.trim(),
    outputFormat: `Print YES or NO`,
    samples: [
      { input: "5\n1 2 3 2 1\n", output: "YES\n" },
      { input: "5\n1 2 3 4 5\n", output: "NO\n" },
    ],
  },
  {
    id: "find-array-rotation",
    title: "Rotate Array Left",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers and K, rotate array left by K positions and print.
`.trim(),
    inputFormat: `
N K
N space-separated integers
`.trim(),
    outputFormat: `Print rotated array`,
    samples: [
      { input: "5 2\n1 2 3 4 5\n", output: "3 4 5 1 2\n" },
    ],
  },
  {
    id: "find-array-rotation-right",
    title: "Rotate Array Right",
    difficulty: "easy",
    category: "Arrays",
    description: `
Given N integers and K, rotate array right by K positions and print.
`.trim(),
    inputFormat: `
N K
N space-separated integers
`.trim(),
    outputFormat: `Print rotated array`,
    samples: [
      { input: "5 2\n1 2 3 4 5\n", output: "4 5 1 2 3\n" },
    ],
  },
];

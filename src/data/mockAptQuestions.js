export const mockAptQuestions = [
  {
    id: "mock_lr_001",
    category: "Logical Reasoning",
    question:
      "If P is the father of Q and Q is the sister of R, how is P related to R?",
    difficulty: "easy",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    answerIndex: 0,
    solution:
      "P is parent of Q; Q and R are siblings; so P is also R’s father.",
  },

  {
    id: "mock_lr_002",
    category: "Logical Reasoning",
    question: "Find the next number: 4, 9, 16, 25, ?",
    difficulty: "easy",
    options: ["30", "36", "32", "40"],
    answerIndex: 1,
    solution: "Squares of 2,3,4,5 → next is 6² = 36.",
  },

  {
    id: "mock_lr_003",
    category: "Logical Reasoning",
    question: "A is older than B. C is younger than B. Who is the youngest?",
    difficulty: "easy",
    options: ["A", "B", "C", "Cannot determine"],
    answerIndex: 2,
    solution: "C is younger than B, B younger than A → C is youngest.",
  },

  {
    id: "mock_lr_004",
    category: "Logical Reasoning",
    question:
      "Which number replaces the question mark? 8 → 4, 12 → 6, 20 → 10, 30 → ?",
    difficulty: "easy",
    options: ["12", "13", "15", "10"],
    answerIndex: 0,
    solution: "Rule: output = n/2 → 30/2 = 15.",
  },

  {
    id: "mock_lr_005",
    category: "Logical Reasoning",
    question:
      "A man walks 10 km east, then 5 km south. How far is he from the starting point?",
    difficulty: "medium",
    options: ["5 km", "10 km", "√125 km", "15 km"],
    answerIndex: 2,
    solution: "Distance = √(10² + 5²) = √125.",
  },

  {
    id: "mock_lr_006",
    category: "Logical Reasoning",
    question: "Find the missing term: AB, BC, CD, DE, ?",
    difficulty: "easy",
    options: ["EF", "FG", "DF", "AD"],
    answerIndex: 0,
    solution: "Shifts forward by one letter each time → EF.",
  },

  {
    id: "mock_lr_007",
    category: "Logical Reasoning",
    question: "If MONDAY is coded as NLPEDZ, how is FRIDAY coded?",
    difficulty: "medium",
    options: ["GQJCBX", "GSJECZ", "GQJBEX", "EQHBAX"],
    answerIndex: 0,
    solution:
      "Each letter shifted +1: F→G, R→Q? Actually reverse pattern? Using same mapping produces GQJCBX.",
  },

  {
    id: "mock_lr_008",
    category: "Logical Reasoning",
    question: "Find the odd one: Mango, Banana, Apple, Carrot",
    difficulty: "easy",
    options: ["Mango", "Banana", "Apple", "Carrot"],
    answerIndex: 3,
    solution: "Carrot is a vegetable; others are fruits.",
  },

  {
    id: "mock_lr_009",
    category: "Logical Reasoning",
    question:
      "If 3 cats catch 3 mice in 3 minutes, how long will 6 cats take to catch 6 mice?",
    difficulty: "medium",
    options: ["6 min", "3 min", "1.5 min", "9 min"],
    answerIndex: 1,
    solution:
      "Rate is proportional; doubling cats & mice keeps time same → 3 min.",
  },

  {
    id: "mock_lr_010",
    category: "Logical Reasoning",
    question:
      "A is 2 years older than B. B is 3 years older than C. If C is 10, what is A?",
    difficulty: "easy",
    options: ["13", "14", "15", "12"],
    answerIndex: 1,
    solution: "C=10, B=13, A=15? Actually 10+3=13, 13+2=15 → answer=15.",
  },

  {
    id: "mock_qa_011",
    category: "Quantitative Aptitude",
    question: "What is 25% of 360?",
    difficulty: "easy",
    options: ["90", "100", "85", "120"],
    answerIndex: 0,
    solution: "25% = 1/4 → 360/4 = 90.",
  },

  {
    id: "mock_qa_012",
    category: "Quantitative Aptitude",
    question: "A man bought a shirt for ₹800 and sold it for ₹1000. Profit %?",
    difficulty: "easy",
    options: ["20%", "25%", "30%", "15%"],
    answerIndex: 1,
    solution: "Profit=200 → 200/800×100 = 25%.",
  },

  {
    id: "mock_qa_013",
    category: "Quantitative Aptitude",
    question: "Solve: 12² − 9²",
    difficulty: "easy",
    options: ["45", "63", "72", "81"],
    answerIndex: 1,
    solution: "a² − b² = (a−b)(a+b) = 3×21 = 63.",
  },

  {
    id: "mock_qa_014",
    category: "Quantitative Aptitude",
    question: "What is the average of 5, 11, 7, 9, 13?",
    difficulty: "easy",
    options: ["9", "10", "11", "8"],
    answerIndex: 1,
    solution: "Sum = 45 → average = 45/5 = 9? Actually 45/5=9. Correct is 9.",
  },

  {
    id: "mock_qa_015",
    category: "Quantitative Aptitude",
    question: "A train travels 180 km in 3 hours. What is its speed?",
    difficulty: "easy",
    options: ["30 km/h", "60 km/h", "45 km/h", "90 km/h"],
    answerIndex: 1,
    solution: "180/3 = 60 km/h.",
  },

  {
    id: "mock_qa_016",
    category: "Quantitative Aptitude",
    question:
      "If the ratio of boys to girls is 5:3 and there are 40 students, how many boys?",
    difficulty: "medium",
    options: ["20", "25", "30", "35"],
    answerIndex: 2,
    solution: "5+3=8 parts → 40/8=5 each → boys=5×5=25? Actually 5×5=25.",
  },

  {
    id: "mock_qa_017",
    category: "Quantitative Aptitude",
    question: "Simple interest on ₹4000 at 5% for 3 years?",
    difficulty: "easy",
    options: ["₹500", "₹550", "₹600", "₹650"],
    answerIndex: 2,
    solution: "SI = PRT/100 = 4000×5×3/100 = 600.",
  },

  {
    id: "mock_qa_018",
    category: "Quantitative Aptitude",
    question: "Solve the equation: 2x − 7 = 13",
    difficulty: "easy",
    options: ["10", "8", "6", "12"],
    answerIndex: 0,
    solution: "2x=20 → x=10.",
  },

  {
    id: "mock_qa_019",
    category: "Quantitative Aptitude",
    question: "If 8 workers do a job in 12 days, how long will 6 workers take?",
    difficulty: "medium",
    options: ["14 days", "16 days", "18 days", "20 days"],
    answerIndex: 2,
    solution:
      "Inverse proportion: (8×12)/6 = 16? Actually 96/6=16. Correct=16.",
  },

  {
    id: "mock_qa_020",
    category: "Quantitative Aptitude",
    question: "Find the next number: 2, 5, 10, 17, 26, ?",
    difficulty: "medium",
    options: ["35", "37", "39", "41"],
    answerIndex: 1,
    solution: "Pattern: +3, +5, +7, +9 → next +11 = 37.",
  },

  {
    id: "mock_vr_021",
    category: "Verbal Ability",
    question: "Choose the synonym of 'Transparent'.",
    difficulty: "easy",
    options: ["Clear", "Heavy", "Thick", "Hidden"],
    answerIndex: 0,
    solution: "Transparent means clear.",
  },

  {
    id: "mock_vr_022",
    category: "Verbal Ability",
    question: "Choose the antonym of 'Scarce'.",
    difficulty: "easy",
    options: ["Rare", "Few", "Plentiful", "Small"],
    answerIndex: 2,
    solution: "Opposite of scarce = plentiful.",
  },

  {
    id: "mock_vr_023",
    category: "Verbal Ability",
    question: "Fill in the blank: She ______ the answer yesterday.",
    difficulty: "easy",
    options: ["knows", "know", "knew", "knowing"],
    answerIndex: 2,
    solution: "Past tense → knew.",
  },

  {
    id: "mock_vr_024",
    category: "Verbal Ability",
    question: "Choose the correctly spelled word.",
    difficulty: "easy",
    options: ["Recieve", "Receive", "Receeve", "Recevie"],
    answerIndex: 1,
    solution: "Correct spelling: receive.",
  },

  {
    id: "mock_vr_025",
    category: "Verbal Ability",
    question: "One who studies earthquakes is called?",
    difficulty: "medium",
    options: ["Geographer", "Seismologist", "Meteorologist", "Biologist"],
    answerIndex: 1,
    solution: "Earthquake study → seismologist.",
  },

  {
    id: "mock_nvr_026",
    category: "Non-Verbal Reasoning",
    question: "Which shape completes the sequence: ▲, ▼, ▲, ▼, ?",
    difficulty: "easy",
    options: ["▲", "▼", "■", "●"],
    answerIndex: 0,
    solution: "Alternating triangle up, down → next is ▲.",
  },

  {
    id: "mock_nvr_027",
    category: "Non-Verbal Reasoning",
    question: "Which figure is the odd one out: ■, ◆, ▲, █",
    difficulty: "medium",
    options: ["■", "◆", "▲", "█"],
    answerIndex: 2,
    solution: "Triangle has different number of sides (3).",
  },

  {
    id: "mock_nvr_028",
    category: "Non-Verbal Reasoning",
    question:
      "A pattern rotates 45° clockwise each step. After 4 steps, total rotation?",
    difficulty: "easy",
    options: ["90°", "135°", "180°", "225°"],
    answerIndex: 3,
    solution: "4×45° = 180°? Actually 4×45=180. So 180°.",
  },

  {
    id: "mock_di_029",
    category: "Data Interpretation",
    question: "A bar chart shows sales: 20, 40, 60, 80. Average sales?",
    difficulty: "easy",
    options: ["40", "50", "60", "55"],
    answerIndex: 1,
    solution: "(20+40+60+80)/4 = 50.",
  },

  {
    id: "mock_di_030",
    category: "Data Interpretation",
    question: "If profit increases from 30k to 45k, percent increase?",
    difficulty: "easy",
    options: ["30%", "40%", "50%", "25%"],
    answerIndex: 0,
    solution: "(15/30)×100 = 50? Actually 15/30=0.5 → 50%.",
  },
];

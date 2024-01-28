const questionsArray = [
  {
    question: "/q1.png",
    answers: ["Будет ошибка", "10", "undefined"],
    correctAnswer: 2,
  },
  {
    question: "/q2.png",
    answers: ["0", "1", "2"],
    correctAnswer: 0,
  },
  {
    question: "/q3.png",
    answers: ["[3]", "[1, 2, 3]", "[1, 2]"],
    correctAnswer: 2,
  },
  {
    question: "/q4.png",
    answers: ["2, 4, 3, 1", "1, 2, 3, 4", "2, 3, 4, 1"],
    correctAnswer: 0,
  },
  {
    question: "/q5.png",
    answers: ["true", "false", "Будет ошибка"],
    correctAnswer: 1,
  },
  {
    question: "/q6.png",
    answers: ["5", "Будет ошибка", "6"],
    correctAnswer: 1,
  },
  {
    question: "/q7.png",
    answers: ["10", "'1234'", "'334'"],
    correctAnswer: 2,
  },
  {
    question: "/q8.png",
    answers: ["[1, 2, 3, 4]", "1, 2, 34", "[1, 2, 3, [4]]"],
    correctAnswer: 1,
  },
  {
    question: "/q9.png",
    answers: ["  1  ", "  2  ", "  a++  "],
    correctAnswer: 0,
  },
  {
    question: "/q10.png",
    answers: ["[2, 2, 2]", "NaN", "8"],
    correctAnswer: 2,
  },
  {
    question: "/q11.png",
    answers: ["1", "undefined", "2"],
    correctAnswer: 2,
  },
  {
    question: "/q12.png",
    answers: ["6", "3.5", "Будет ошибка"],
    correctAnswer: 0,
  },
  {
    question: "/q13.png",
    answers: ["7", "   null    ", "5"],
    correctAnswer: 2,
  },
  {
    question: "/q14.png",
    answers: ["1", "   2   ", "Будет ошибка"],
    correctAnswer: 1,
  },
  {
    question: "/q15.png",
    answers: ["confirm", "alert", "  prompt  "],
    correctAnswer: 0,
  },
  {
    question: "/q16.png",
    answers: ["Первый", "Второй", "Оба варианта равнозначны"],
    correctAnswer: 2,
  },
  {
    question: "/q17.png",
    answers: ["Нет такого оператора", "5", "0"],
    correctAnswer: 2,
  },
  {
    question: "/q18.png",
    answers: ["2 затем 2", "2 затем 5", "5 затем 5"],
    correctAnswer: 1,
  },
  {
    question: "/q19.png",
    answers: ["'Неправильно'", "'Правильно", "undefined"],
    correctAnswer: 0,
  },
  {
    question: "/q20.png",
    answers: ["2", "Будет ошибка", "3"],
    correctAnswer: 1,
  },
  {
    question: "/q21.png",
    answers: ["while", "for( ; ; )", "  do while   "],
    correctAnswer: 2,
  },
  {
    question: "/q22.png",
    answers: ["Привет", "Будет ошибка", "Пока"],
    correctAnswer: 1,
  },
  {
    question: "/q23.png",
    answers: ["Math.round()", "Math.ceil()", "Math.floor()"],
    correctAnswer: 2,
  },
  {
    question: "/q24.png",
    answers: ["Pete", "John", " Будет ошибка "],
    correctAnswer: 0,
  },
  {
    question: "/q25.png",
    answers: ["3", "12", " Будет ошибка "],
    correctAnswer: 0,
  },
  {
    question: "/q1.png",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 1,
  },
  {
    question: "/q1.png",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "/q1.png",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 1,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },
  {
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 0,
  },

  {
    question: "Question 100",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: 2,
  },
];

export default questionsArray;

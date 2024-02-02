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
    question: "/q26.png",
    answers: ["'ba+aa", "'baNaNa'", "'baaa'"],
    correctAnswer: 1,
  },
  {
    question: "/q27.png",
    answers: ["false", "undefined", "true"],
    correctAnswer: 0,
  },
  {
    question: "/q28.png",
    answers: ["true, true, true", "false, true, false", "true, false, false"],
    correctAnswer: 1,
  },
  {
    question: "/q29.png",
    answers: ["2", "NaN", " undefined "],
    correctAnswer: 0,
  },
  {
    question: "/q30.png",
    answers: ["true, true, true", "false, false, true", "true, true, false"],
    correctAnswer: 2,
  },
  {
    question: "/q31.png ",
    answers: ["true , false", "true, true ", " false, false "],
    correctAnswer: 0,
  },
  {
    question: "/q32.png ",
    answers: ["3, 2+true, 2true", "3, 21, 2true", "NaN, Nan, NaN"],
    correctAnswer: 1,
  },
  {
    question: "/q33.png",
    answers: ["  {}, null   ", "{}, {}", "{}, undefined"],
    correctAnswer: 0,
  },
  {
    question: "/q34.png",
    answers: ["true, false, false", "true, true, false", "false, false, false"],
    correctAnswer: 1,
  },
  {
    question: "/q35.png",
    answers: ["0, 0, 1", "  NaN, NaN, NaN  ", "NaN, 0, 1"],
    correctAnswer: 0,
  },
  {
    question: "/q36.png",
    answers: ["3", "undefined", "4"],
    correctAnswer: 1,
  },
  {
    question: "/q37.png",
    answers: ["false, true", "false, false", " true, false "],
    correctAnswer: 2,
  },
  {
    question: "/q38.png",
    answers: ["true, false", "false, false", " true, true "],
    correctAnswer: 0,
  },
  {
    question: "/q39.png",
    answers: ["false, true", "false, false", " true, false "],
    correctAnswer: 2,
  },
  {
    question: "/q40.png",
    answers: ["'е'", "'П'", "1"],
    correctAnswer: 0,
  },
  {
    question: "/q41.png",
    answers: ["Пустой массив", "[ 1, 2 ]", "[ 1, 2, 3 ]"],
    correctAnswer: 0,
  },
  {
    question: "/q42.png",
    answers: ["[ 1, 2, 3 ]", "[ 1, 3, 2 ]", "[ 1, 3, 2, 3, 3 ]"],
    correctAnswer: 1,
  },
  {
    question: "/q43.png",
    answers: ["[1, 2, 3 ]", "{ '0': 1, '1': 2, '2': 3 }", "Будет ошибка"],
    correctAnswer: 1,
  },
  {
    question: "/q44.png",
    answers: ["'Привет!'", "'Hello'", "Будет ошибка"],
    correctAnswer: 0,
  },
  {
    question: "/q45.png",
    answers: ["  false, true  ", "false, false", " true, false "],
    correctAnswer: 0,
  },
  {
    question: "/q46.png",
    answers: ["[ 1, 2, ]", " [ 3, 1, 2, 3 ] ", "[ 1, 2, 3, 3 ]"],
    correctAnswer: 1,
  },
  {
    question: "/q47.png",
    answers: [
      "[ 1, 'a', 'b', 4 ]",
      "[ 1, 2, 'a', 'b', 3, 4 ]",
      "[ 1, 2, 'a', 'b' ]",
    ],
    correctAnswer: 2,
  },
  {
    question: "/q48.png",
    answers: ["1, false", "1, -1", "   0, 1   "],
    correctAnswer: 2,
  },
  {
    question: "/q49.png",
    answers: ["true, false, true", "true, true, false", "false, true, false"],
    correctAnswer: 2,
  },
  {
    question: "/q50.png",
    answers: [
      "[ 'a', 1, 4, 20, 33, ]",
      "[ 1, 20, 33, 4, 'a' ]",
      "[ 1, 4, 20, 33, 'a' ]",
    ],
    correctAnswer: 1,
  },
  {
    question: "/q51.png",
    answers: [
      "'строка'",
      "[ 'с', 'т', 'р', 'о', 'к', 'а' ]",
      "'с', 'т', 'р', 'о', 'к', 'а'",
    ],
    correctAnswer: 1,
  },
  {
    question: "/q52.png",
    answers: ["   2   ", "1", "Будет ошибка"],
    correctAnswer: 0,
  },
  {
    question: "/q53.png",
    answers: ["  false   ", "true", "Так нельзя писать в js"],
    correctAnswer: 0,
  },
  {
    question: "/q54.png",
    answers: ["3.33335, 2.66665", "3.3, 2.6", "3, 2"],
    correctAnswer: 2,
  },
  {
    question: "/q55.png",
    answers: ["   0   ", "4", "1"],
    correctAnswer: 1,
  },
  {
    question: "/q56.png",
    answers: ["'name'", "'Петя'", "undefined"],
    correctAnswer: 2,
  },
  {
    question: "/q57.png",
    answers: ["2, 3 , 1", "  1, 2, 3  ", "3, 2, 1 "],
    correctAnswer: 0,
  },
  {
    question: "/q58.png",
    answers: ["-4, 0, 4", "-1, 0, 1", "0, 0, 1"],
    correctAnswer: 1,
  },
  {
    question:  "/q59.png",
    answers: ["Будет ошибка", "['Toyota','Saab','Volvo','Audi']", "['Toyota','Volvo','BMW','Audi']"],
    correctAnswer: 2,
  },
  {
    question:  "/q60.png",
    answers: ["выведет от 0 - 4", "выведет от 0 - 5", "выведет от 1 - 5"],
    correctAnswer: 0,
  },
  {
    question: "/q61.png",
    answers: ["{ 'a', 'b', 1 }", "{ 'a', 'b', '1' }", "{ 'a', 'b', '1', 1 }"],
    correctAnswer: 2,
  },
  {
    question: "/q62.png",
    answers: ["3", "2", "4"],
    correctAnswer: 0,
  },
  {
    question:  "/q63.png",
    answers: ["object, object, number", "object, object, object", "number, object, number"],
    correctAnswer: 1,
  },
  {
    question: "/q64.png",
    answers: ["'123'", "123", "'10023'"],
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

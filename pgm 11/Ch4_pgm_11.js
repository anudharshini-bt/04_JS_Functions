var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris"
};

var quizQuestion2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
};

var quizQuestion3 = {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Charles Dickens", "Ernest Hemingway"],
    answer: "Harper Lee"
};

var showQuizQuestion = function (quiz) {
    console.log(quiz.question);
    console.log("Options:");
    for (var i = 0; i < quiz.options.length; i++) {
        console.log("(" + (i + 1) + ") " + quiz.options[i]);
    }
    console.log("------------------------------");
    console.log("Answer: " + quiz.answer);
    console.log("------------------------------");
};

var quiz;

quiz = quizQuestion1;
showQuizQuestion(quiz);

quiz = quizQuestion2;
showQuizQuestion(quiz);

quiz = quizQuestion3;
showQuizQuestion(quiz);



//QUESTION.JS

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}


//QUIZ-CONTROLLER
function Quiz(question) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {

    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}



//APP.JS
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2  id='score'>Your Scores:" + quiz.score + "</h2>";
    var element = getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("What is the full meaning of YAHOO?", ["Java", "Promise", "Yet Another Hierarchical Officious Oracle", "Yet Another Hierarchical Officious Oracle"], "Yet Another Hierarchical Officious Oracle"),
    new Question("What is the full meaning of GOOGLE", ["Global Organization of Oriented Group Language of Earth", "Promise", "Orung", "Sunday"], "Global Organization of Oriented Group Language of Earth"),
    new Question("What is the full meaning of IPaddress ", ["Java", "Promise", "Internet Protocol address", "Sunday"], "Internet Protocol address"),
    new Question("What is the full meaning of virus", ["Java", "Promise", "Vital Information Resources Under Seize", "Sunday"], "Vital Information Resources Under Seize"),
    new Question("What is the full meaning of URL", ["Uniform Resource Location", "Promise", "Vital Information Resources Under Seize", "Sunday"], "Uniform Resource Location"),
    new Question("What is the full meaning of GIF", ["Java", "Graphic Interchange Format", "Vital Information Resources Under Seize", "Sunday"], "Graphic Interchange Format"),
    new Question("What is the full meaning of GPS", ["Global Positioning System", "Promise", "Vital Information Resources Under Seize", "Sunday"], "Global Positioning System"),
    new Question("What is the full meaning of CCTV", ["Java", "Promise", "Closed Circuit Television", "Sunday"], "Closed Circuit Television"),
    new Question("What is the full meaning of CVV", ["Card Verification Value", "Promise", "Vital Information Resources Under Seize", "Sunday"], "Card Verification Value"),
    new Question("What is the full meaning of XHTML", ["Java", "Promise", "	Extensible Hypertext Markup Language", "Sunday"], "	Extensible Hypertext Markup Language")
];

var quiz = new Quiz(questions);

populate()
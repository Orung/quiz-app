(function() {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: "1. What is the full meaning of YAHOO?",
            answers: {
                a: "Yet Another Hierarchical Officious Oracle",
                b: "Your Account Has Officially Open",
                c: "Yet Another Higher Organizational Operation",
                d: "Yahoo is yahoo"
            },
            correctAnswer: "a"
        },
        {
            question: "2. What is the full meaning of GOOGLE?",
            answers: {
                a: "Growth Of Organizated Global Leadership Enlightenment",
                b: "Group Organized to Optain Global Language Earthwide",
                c: "Global Organization of Oriented Group Language of Earth",
                d: "Greatest Organized Operating Group Learning Era"
            },
            correctAnswer: "c"
        },
        {
            question: "3. What is the full meaning of IP address",
            answers: {
                a: "Indirect Protocol Address",
                b: "Internet Personall address",
                c: "Intermidate to Profesionall Assistant",
                d: "Internet Protocol address"
            },
            correctAnswer: "d"
        },
        {
            question: "4. What is the full meaning of URL?",
            answers: {
                a: "Uniform Resource Location",
                b: "Universal Reusable Link",
                c: "Unified Registration Located",
                d: "All of the above"
            },
            correctAnswer: "a"
        },
        {
            question: "5. What is the full meaning of virus?",
            answers: {
                a: "VIsual RUst System",
                b: "Vital Iota of Resources Ubieted by System",
                c: "Vital Information Resources Under Seize",
                d: "Virtual Intelligent Run Under System"
            },
            correctAnswer: "c"
        }
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
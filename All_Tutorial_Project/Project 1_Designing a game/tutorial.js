let currentQuestionIndex = 0;

document.getElementById('startTutorial').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('startTutorial').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById("clickBtn").textContent = "Please Complete the Quiz :)";
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const feedbackElement = document.getElementById('feedback');
    
    feedbackElement.textContent = '';
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const feedbackElement = document.getElementById('feedback');
    const currentQuestion = questions[currentQuestionIndex];
    
    if (choice === currentQuestion.correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            feedbackElement.textContent = 'Thank you so much for completing the quiz, I hope you learned Something!';
        }
    } else {
        feedbackElement.textContent = 'Wrong answer, please try again.';
    }
}

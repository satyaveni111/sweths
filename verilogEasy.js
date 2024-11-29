// Array of quiz questions
const quiz = [
    {
        "question": "What is the default value of an uninitialized wire in Verilog?",
        "options": {
            "A": "0",
            "B": "1",
            "C": "x (unknown)",
            "D": "z (high impedance)"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following is a blocking assignment?",
        "options": {
            "A": "assign",
            "B": "=",
            "C": "<=",
            "D": "if-else"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What keyword is used to declare a module in Verilog?",
        "options": {
            "A": "mod",
            "B": "module",
            "C": "design",
            "D": "component"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following is an example of a non-blocking assignment?",
        "options": {
            "A": "=",
            "B": "assign",
            "C": "<=",
            "D": "always"
        },
        "correctAnswer": "C"
    },
    {
        "question": "In Verilog, what type of block is used to describe combinational logic?",
        "options": {
            "A": "initial",
            "B": "always",
            "C": "always @*",
            "D": "begin-end"
        },
        "correctAnswer": "C"
    },
    {
        "question": "What is the use of the 'assign' keyword in Verilog?",
        "options": {
            "A": "To declare registers",
            "B": "To drive continuous assignments",
            "C": "To initiate always blocks",
            "D": "To declare wires"
        },
        "correctAnswer": "B"
    },
    {
        "question": "In Verilog, how are delays specified in assignments?",
        "options": {
            "A": "#delay",
            "B": "always",
            "C": "initial",
            "D": "module"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following is true for the 'always' block in Verilog?",
        "options": {
            "A": "It executes only once.",
            "B": "It executes continuously.",
            "C": "It can only be used in testbenches.",
            "D": "It defines flip-flop behavior."
        },
        "correctAnswer": "B"
    },
    {
        "question": "What does the 'posedge' keyword in Verilog represent?",
        "options": {
            "A": "Positive edge of a signal",
            "B": "High impedance state",
            "C": "Low voltage level",
            "D": "Unknown state"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which statement is used for conditional branching in Verilog?",
        "options": {
            "A": "for",
            "B": "if-else",
            "C": "while",
            "D": "assign"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What is the range of an 8-bit unsigned integer in Verilog?",
        "options": {
            "A": "0 to 7",
            "B": "0 to 255",
            "C": "-128 to 127",
            "D": "-255 to 255"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following is used to define a testbench in Verilog?",
        "options": {
            "A": "module",
            "B": "initial",
            "C": "wire",
            "D": "always"
        },
        "correctAnswer": "B"
    },
    {
        "question": "How are vectors defined in Verilog?",
        "options": {
            "A": "[msb:lsb]",
            "B": "[lsb:msb]",
            "C": "<msb:lsb>",
            "D": "<lsb:msb>"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following describes a 'high impedance' state in Verilog?",
        "options": {
            "A": "z",
            "B": "x",
            "C": "0",
            "D": "1"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following describes a 'high impedance' state in Verilog?",
        "options": {
            "A": "z",
            "B": "x",
            "C": "0",
            "D": "1"
        },
        "correctAnswer": "A"
    }
]
;

let currentQuestionIndex = 0;
let correctScore = 0;
let wrongScore = 0;
let timeLeft = 600;

function loadQuestion() {
let options = document.querySelectorAll('input[name="answer"]');
options.forEach(option => {
option.checked = false; // Uncheck all options
});

// Reset background color and text color of all labels
let labels = document.querySelectorAll('label');
labels.forEach(label => {
label.style.backgroundColor = ''; // Reset background color of the labels
label.style.color = ''; // Reset text color of the labels
});

let currentQuestion = quiz[currentQuestionIndex];
document.getElementById('question').textContent = currentQuestion.question;
document.getElementById('labelA').textContent = currentQuestion.options.A;
document.getElementById('labelB').textContent = currentQuestion.options.B;
document.getElementById('labelC').textContent = currentQuestion.options.C;
document.getElementById('labelD').textContent = currentQuestion.options.D;
document.getElementById('queCount').textContent = currentQuestionIndex+1;

// Add event listener for each option to check the answer immediately
options.forEach(option => {
option.addEventListener('change', function () {
    checkAnswerImmediately(option);
});
});
}

// Function to check the answer immediately when an option is selected
function checkAnswerImmediately(selectedOption) {
let correctAnswer = quiz[currentQuestionIndex].correctAnswer;
let label = document.querySelector(`label[for=${selectedOption.id}]`);

// Reset background color of all labels
let labels = document.querySelectorAll('label');
labels.forEach(label => {
label.style.backgroundColor = ''; // Reset background color of all labels
label.style.color = '';
});

// Highlight the selected answer immediately
if (selectedOption.value === correctAnswer) {
label.style.color = "green"; // Correct answer in green
} else {
label.style.color = "red"; // Wrong answer in red
}
}



// Function to check the answer and highlight the options
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        let answer = selectedOption.value;
        let correctAnswer = quiz[currentQuestionIndex].correctAnswer;
        // Highlight the selected answer
        let label = document.querySelector(`label[for=${selectedOption.id}]`);
        if (answer === correctAnswer) {
            label.style.color = "green"; // Correct answer in green
            correctScore += 1;
        } else {
            label.style.color = "red"; // Wrong answer in red
            wrongScore += 1;
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quiz.length) {
                loadQuestion();
            } else {
                endAssessment(); 
            }
        }, 1000)
    } else {
        document.getElementById('feedback').textContent = "Please select an option!";
        setTimeout(() =>{
            document.getElementById('feedback').textContent = "";
        },2000)
    }
}

// End assessment function
function endAssessment() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('sub').style.display = 'none';
    document.getElementById('diffcultyLevel').style.display = 'none';
    document.getElementById('verilog').style.display = 'none';
    document.getElementById('easy').style.display = 'none';
    document.getElementById('endAssessmentBtn').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
    document.getElementById('noOfQuestions').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('TechQuestHeading').style.display = 'none';
    let noOfQue = correctScore + wrongScore;
    // Display the correct and wrong scores
    document.getElementById('score').textContent = "SCORE : " + correctScore; 
    document.getElementById('correctAnswerScore').textContent = "Correct Answers : " + correctScore;
    document.getElementById('wrongAnswerScore').textContent = "Wrong Answers : " + wrongScore;
    document.getElementById('noofquestionsAttempted').textContent = "No Of Questions Attempted : " + noOfQue;

    let appreciationText = '';
    if (correctScore === quiz.length) {
        appreciationText = "Outstanding! You got a perfect score! 🌟";
    } else if (correctScore >= quiz.length * 0.8) {
        appreciationText = "Great job! You scored really well! 👍";
    } else if (correctScore >= quiz.length * 0.5) {
        appreciationText = "Good effort! You’re halfway there! 😊";
    } else {
        appreciationText = "Don’t worry! Keep practicing, you’ll do better next time! 💪";
    }
    
    document.getElementById('appreciation').textContent = appreciationText;
}

// Timer function
function startTimer() {
    const timerDisplay = document.getElementById('time');

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        
        timerDisplay.textContent = `${minutes}:${seconds}`;

        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endAssessment(); 
        }

        timeLeft--;
    }, 1000);
}

window.onload = function () {
    shuffleQuiz(quiz); 
    loadQuestion();   
    startTimer();    
};

// Function to shuffle the quiz questions
function shuffleQuiz(quizArray) {
    for (let i = quizArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]]; // Swap
    }
    return quizArray;
}

function clickHome(){
    window.location.href = "home.html"
}

// aprreciation based on the score 

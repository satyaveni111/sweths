// Array of quiz questions
const quiz = [
    {
        "question": "What is the primary difference between 'wire' and 'reg' data types in Verilog?",
        "options": {
            "A": "'wire' holds value in procedural blocks, 'reg' in continuous assignments",
            "B": "'wire' is for continuous assignments, 'reg' is for procedural assignments",
            "C": "Both are used for continuous assignments",
            "D": "Both are used for procedural blocks"
        },
        "correctAnswer": "B"
    },
    {
        "question": "In Verilog, what does the 'parameter' keyword allow you to do?",
        "options": {
            "A": "Define a constant value",
            "B": "Declare a wire",
            "C": "Drive continuous assignments",
            "D": "Instantiate a module"
        },
        "correctAnswer": "A"
    },
    {
        "question": "How do you instantiate a module in Verilog?",
        "options": {
            "A": "Using the 'mod' keyword",
            "B": "Using the 'module' keyword",
            "C": "Using the 'instance' keyword",
            "D": "Using the module's name"
        },
        "correctAnswer": "D"
    },
    {
        "question": "What is the difference between 'blocking' and 'non-blocking' assignments in Verilog?",
        "options": {
            "A": "Blocking executes concurrently, non-blocking executes sequentially",
            "B": "Blocking executes sequentially, non-blocking executes concurrently",
            "C": "Blocking can only be used in always blocks, non-blocking can be used anywhere",
            "D": "No difference, both are equivalent"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following is true about the 'initial' block in Verilog?",
        "options": {
            "A": "It is executed repeatedly",
            "B": "It is executed once at the start of simulation",
            "C": "It requires a clock signal to execute",
            "D": "It cannot contain delays"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What does the $monitor system task do in Verilog?",
        "options": {
            "A": "Displays signal values whenever they change",
            "B": "Checks for errors during simulation",
            "C": "Stops the simulation",
            "D": "Assigns values to signals"
        },
        "correctAnswer": "A"
    },
    {
        "question": "How is a 'generate' block used in Verilog?",
        "options": {
            "A": "To create sequential logic",
            "B": "To instantiate multiple instances of a module",
            "C": "To generate loops",
            "D": "To conditionally instantiate hardware"
        },
        "correctAnswer": "D"
    },
    {
        "question": "What is the significance of the 'synthesis' directive in Verilog?",
        "options": {
            "A": "It helps in writing testbenches",
            "B": "It optimizes the code for simulation",
            "C": "It provides hints to the synthesis tool",
            "D": "It ensures the design compiles faster"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following statements is true regarding 'inout' ports in Verilog?",
        "options": {
            "A": "They are always driven by the module",
            "B": "They cannot be used for bidirectional signals",
            "C": "They can be driven by either the module or external sources",
            "D": "They are used only for output signals"
        },
        "correctAnswer": "C"
    },
    {
        "question": "What does the keyword 'posedge' specifically describe in a sensitivity list?",
        "options": {
            "A": "A signal change from low to high",
            "B": "A signal change from high to low",
            "C": "A constant high level",
            "D": "A constant low level"
        },
        "correctAnswer": "A"
    },
    {
        "question": "How can you prevent latch inference in a combinational always block?",
        "options": {
            "A": "Always use non-blocking assignments",
            "B": "Always assign a default value to outputs",
            "C": "Use an 'initial' block",
            "D": "Use 'posedge' in sensitivity lists"
        },
        "correctAnswer": "B"
    },
    {
        "question": "In Verilog, which keyword is used to define a constant delay?",
        "options": {
            "A": "always",
            "B": "parameter",
            "C": "#",
            "D": "wire"
        },
        "correctAnswer": "C"
    },
    {
        "question": "What is the role of 'task' in Verilog?",
        "options": {
            "A": "It declares functions inside modules",
            "B": "It defines procedural blocks that can be called multiple times",
            "C": "It assigns values to registers",
            "D": "It monitors signals"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following is NOT a valid way to end a module in Verilog?",
        "options": {
            "A": "endmodule",
            "B": "endmod",
            "C": "end",
            "D": "None of the above"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What does the keyword 'casex' do in Verilog?",
        "options": {
            "A": "It performs a case-insensitive comparison",
            "B": "It performs a case with don't-care bits",
            "C": "It executes the first matching case",
            "D": "It terminates a process"
        },
        "correctAnswer": "B"
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
    let noOfQue = correctScore + wrongScore;
    // Display the correct and wrong scores
    document.getElementById('score').textContent = "SCORE : " + correctScore; 
    document.getElementById('correctAnswerScore').textContent = "Correct Answers : " + correctScore;
    document.getElementById('wrongAnswerScore').textContent = "Wrong Answers : " + wrongScore;
    document.getElementById('noofquestionsAttempted').textContent = "No Of Questions Attempted : " + noOfQue;
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
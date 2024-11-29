// Array of quiz questions
const quiz = [
    {
        "question": "What is the issue with the following Verilog code, and how can it be corrected?\n\n```verilog\nmodule counter(input clk, output reg [3:0] count);\nalways @(posedge clk)\nbegin\n  count = count + 1;\nend\nendmodule\n```",
        "options": {
            "A": "The counter will not work due to latch inference, use non-blocking assignment",
            "B": "The counter will work but with glitches, use blocking assignment",
            "C": "The counter will work correctly as written",
            "D": "The count value will reset to 0 on every clock cycle"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What will be the output of this Verilog code?\n\n```verilog\nmodule test;\nreg [3:0] a, b, result;\ninitial begin\n  a = 4'b1001;\n  b = 4'b0110;\n  result = a & b;\n  $display(\"Result: %b\", result);\nend\nendmodule\n```",
        "options": {
            "A": "0001",
            "B": "1111",
            "C": "1011",
            "D": "0111"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What will happen when the following Verilog code is simulated?\n\n```verilog\nmodule latch(input wire d, input wire en, output reg q);\nalways @(en or d)\n  if (en)\n    q <= d;\nendmodule\n```",
        "options": {
            "A": "The latch will not synthesize correctly",
            "B": "The latch will work correctly",
            "C": "The latch will always output 0",
            "D": "Latch inference will occur causing race conditions"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Identify the issue in the following Verilog code.\n\n```verilog\nmodule adder(input wire [3:0] a, input wire [3:0] b, output reg [3:0] sum);\nalways @(a or b)\n  sum = a + b + 1'b1;\nendmodule\n```",
        "options": {
            "A": "Incorrect bit-width of the sum, it should be [4:0] to handle overflow",
            "B": "The addition operation is not supported in Verilog",
            "C": "Blocking assignment should be used instead of non-blocking",
            "D": "The always block is missing a clock edge trigger"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What will be the output of the following Verilog code?\n\n```verilog\nmodule test;\nreg clk;\nreg [3:0] count;\ninitial begin\n  clk = 0;\n  count = 4'b0000;\n  forever #5 clk = ~clk;\nend\nalways @(posedge clk) begin\n  count = count + 1;\n  if(count == 4'b1010)\n    $display(\"Count reached 10\");\nend\nendmodule\n```",
        "options": {
            "A": "The counter will increment and display \"Count reached 10\"",
            "B": "The counter will not increment",
            "C": "The counter will increment indefinitely but will not display anything",
            "D": "The simulation will fail due to a syntax error"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following modifications will prevent latch inference in this Verilog code?\n\n```verilog\nmodule mux(input wire a, input wire b, input wire sel, output reg y);\nalways @(a or b or sel)\n  if (sel)\n    y = a;\n```",
        "options": {
            "A": "Assign a default value to 'y' at the beginning of the always block",
            "B": "Change the sensitivity list to posedge clk",
            "C": "Use non-blocking assignments instead of blocking",
            "D": "Nothing, the code is correct"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What is the result of simulating the following Verilog code?\n\n```verilog\nmodule test;\nreg [7:0] data;\ninteger i;\ninitial begin\n  data = 8'b11001010;\n  for (i = 0; i < 8; i = i + 1)\n    $display(\"data[%0d] = %b\", i, data[i]);\nend\nendmodule\n```",
        "options": {
            "A": "The output will display each bit of the data from MSB to LSB",
            "B": "The output will display each bit of the data from LSB to MSB",
            "C": "There will be an error due to the incorrect for loop syntax",
            "D": "The output will be random"
        },
        "correctAnswer": "B"
    },
    {
        "question": "How many flip-flops will the following Verilog code synthesize?\n\n```verilog\nmodule shift_register(input wire clk, input wire d, output reg [3:0] q);\nalways @(posedge clk)\n  q <= {q[2:0], d};\nendmodule\n```",
        "options": {
            "A": "1 flip-flop",
            "B": "4 flip-flops",
            "C": "2 flip-flops",
            "D": "3 flip-flops"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What is the output after simulating this Verilog code?\n\n```verilog\nmodule test;\nreg [3:0] a, b;\nwire [3:0] sum;\nassign sum = a + b;\ninitial begin\n  a = 4'b1010;\n  b = 4'b0111;\n  #10;\n  $display(\"Sum: %b\", sum);\nend\nendmodule\n```",
        "options": {
            "A": "Sum: 10000",
            "B": "Sum: 0001",
            "C": "Sum: 1111",
            "D": "Sum: 1110"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What does the following Verilog code describe?\n\n```verilog\nmodule full_adder(input a, input b, input cin, output sum, output cout);\n  assign {cout, sum} = a + b + cin;\nendmodule\n```",
        "options": {
            "A": "A half adder",
            "B": "A full adder",
            "C": "A 4-bit adder",
            "D": "A 4:1 multiplexer"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following statements about this Verilog code is true?\n\n```verilog\nmodule counter(input clk, output reg [3:0] count);\nalways @(posedge clk)\n  count <= count + 1;\nendmodule\n```",
        "options": {
            "A": "It is a combinational counter",
            "B": "It describes a sequential counter",
            "C": "The count will reset after reaching 8",
            "D": "The counter is missing an enable signal"
        },
        "correctAnswer": "B"
    },
    {
        "question": "How will this Verilog code behave?\n\n```verilog\nmodule memory(input wire clk, input wire [7:0] data_in, output reg [7:0] data_out);\nreg [7:0] mem [0:15];\nalways @(posedge clk)\n  data_out <= mem[data_in];\nendmodule\n```",
        "options": {
            "A": "It will function as a register",
            "B": "It will function as a 16x8 memory",
            "C": "It will function as a shift register",
            "D": "It will function as a FIFO"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What will be the output of this Verilog code?\n\n```verilog\nmodule test;\nreg [3:0] a = 4'b1001;\nwire [3:0] out;\nassign out = a >> 2;\ninitial begin\n  $display(\"Output: %b\", out);\nend\nendmodule\n```",
        "options": {
            "A": "Output: 0010",
            "B": "Output: 0001",
            "C": "Output: 0100",
            "D": "Output: 1100"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What will happen if this Verilog code is synthesized?\n\n```verilog\nmodule tri_state(input wire en, input wire a, output wire y);\nassign y = en ? a : 1'bz;\nendmodule\n```",
        "options": {
            "A": "It will function as a tristate buffer",
            "B": "It will generate a synthesis error",
            "C": "It will function as a normal buffer",
            "D": "It will function as a shift register"
        },
        "correctAnswer": "A"
    },
    {
        "question": "What is wrong with this Verilog code?\n\n```verilog\nmodule comparator(input [3:0] a, b, output reg result);\nalways @(a or b)\n  if (a == b)\n    result <= 1;\nendmodule\n```",
        "options": {
            "A": "Latch inference due to missing else clause",
            "B": "It will not synthesize due to syntax errors",
            "C": "Blocking assignments should be used",
            "D": "The always block should be triggered by a clock signal"
        },
        "correctAnswer": "A"
    }
];

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
if (currentQuestion.question.includes("```verilog")) {
    // Extract the code block and replace markdown-style formatting
    let parts = currentQuestion.question.split("```verilog");
    let questionText = parts[0].trim(); // Text before the code
    let codeBlock = parts[1].split("```")[0].trim(); // The Verilog code block

    // Format the question with code
    document.getElementById('question').innerHTML = `
        <div class="question-text">${questionText}</div>
        <pre class="code-block"><code>${codeBlock}</code></pre>
    `;
} else {
    // Regular question display
    document.getElementById('question').innerHTML = `
        <div class="question-text">${currentQuestion.question}</div>
    `;
}


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
// Question counter
var count = 0;

/* Multi-dimensional questions array */
var questions = [
["What does HTML stand for?", 0, "HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Mark Language"],
["Which language styles web pages?", 1, "HTML", "CSS", "Java"],
["Which language runs in the browser?", 2, "Python", "C++", "JavaScript"]
];

// Load Play Game button when page loads
document.getElementById("prompt").innerHTML =
"<button onclick='playGame()'>Play Game</button>";


// Function to start the game
function playGame(){

count++;

// Get first question
var currentQuestion = questions[0];

// Extract question text
var questionText = currentQuestion.shift();

// Display question
document.getElementById("question").innerHTML = questionText;

// Extract correct answer index
var correctIndex = currentQuestion.shift();

// Remaining answers
var answers = currentQuestion;

// Build answer list
var answerHTML = "";

for(var i=0;i<answers.length;i++){

answerHTML += "<li>";
answerHTML += "<a href='#' onclick='checkAnswer(" + i + "," + correctIndex + ")'>";
answerHTML += answers[i];
answerHTML += "</a>";
answerHTML += "</li>";

}

// Display answers
document.getElementById("answers").innerHTML = answerHTML;

// Remove question from array
questions.shift();

// Prompt user
document.getElementById("prompt").innerHTML =
"Click the best answer.";

}


// Function to check answer
function checkAnswer(choice, correctIndex){

if(choice == correctIndex){

document.getElementById("prompt").innerHTML =
"Correct!";

}
else{

document.getElementById("prompt").innerHTML =
"Incorrect.";

}

// Check if game finished
if(count >= 3){

document.getElementById("question").innerHTML = "Game Finished!";
document.getElementById("answers").innerHTML = "";

document.getElementById("prompt").innerHTML +=
"<br><button onclick='location.reload()'>Restart Game</button>";

}
else{

document.getElementById("prompt").innerHTML +=
"<br><button onclick='playGame()'>Next Question</button>";

document.getElementById("answers").innerHTML = "";

}

}
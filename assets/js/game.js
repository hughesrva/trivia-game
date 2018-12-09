var index = 0;
var timer;
var correctNum = 0;
var incorrectNum = 0;
var index = 0;
var question1;
var question2;
var question3;
var question4;
var question5;
var selectedText;
var answerA;
var answerB;
var answerC;
var answerD;
var clicked;
var selResult;

function setTimer(functionName, time) {
    clearTimeout(timer);
    timer = setTimeout(functionName, time);
}


// function to create and show start screen
function toStart() {

    // reference varible to cycle through questions array
    index = 0;
    // creates questions and answers in the background
    question1 = {
        questionText: "What color is Gengar?",
        answerA: {
            answerText: "Red",
            isCorrect: false
        },
        answerB: {
            answerText: "Purple",
            isCorrect: true
        },
        answerC: {
            answerText: "Green",
            isCorrect: false
        },
        answerD: {
            answerText: "Silver",
            isCorrect: false
        },
        correctText: "purple."
    }
    question2 = {
        questionText: "What type is Diglett?",
        answerA: {
            answerText: "Grass",
            isCorrect: false
        },
        answerB: {
            answerText: "Fighting",
            isCorrect: false
        },
        answerC: {
            answerText: "Rock",
            isCorrect: false
        },
        answerD: {
            answerText: "Ground",
            isCorrect: true
        },
        correctText: "ground."
    }
    question3 = {
        questionText: "Which type is NOT strong against fire types?",
        answerA: {
            answerText: "Water",
            isCorrect: false
        },
        answerB: {
            answerText: "Ground",
            isCorrect: false
        },
        answerC: {
            answerText: "Flying",
            isCorrect: true
        },
        answerD: {
            answerText: "Rock",
            isCorrect: false
        },
        correctText: "flying."
    }
    question4 = {
        questionText: "How many Pokemon are there in the first generation?",
        answerA: {
            answerText: "150",
            isCorrect: false
        },
        answerB: {
            answerText: "190",
            isCorrect: false
        },
        answerC: {
            answerText: "118",
            isCorrect: false
        },
        answerD: {
            answerText: "151",
            isCorrect: true
        },
        correctText: "151."
    }
    question5 = {
        questionText: "What does Charmander evolve into?",
        answerA: {
            answerText: "Charmeleon",
            isCorrect: true
        },
        answerB: {
            answerText: "Magmar",
            isCorrect: false
        },
        answerC: {
            answerText: "Charizard",
            isCorrect: false
        },
        answerD: {
            answerText: "He doesn't evolve",
            isCorrect: false
        },
        correctText: "Charmeleon."
    }
    questions = [question1, question2, question3, question4, question5]

    // defines and creates start button
    var startBtn = $("<button></button>").text("Start!");

    // gives start button ID
    $(startBtn).attr("id", "startBtn");

    // appends start button to gameRow
    $("#gameRow").append(startBtn);

    // goes to question screen when start is clicked
    $(startBtn).click(function () {
        toQuestions();
    });

    function toQuestions() {
        console.log(questions[index].correctText);
        // starts timeout timer
        setTimer(toTimeup, 15000);

        // removes start button and 
        $("#gameRow").empty();

        // adds question to page
        selectedText = $("<h2></h2>").text(questions[index].questionText)
        $("#gameRow").append(selectedText);

        // adds answers to page
        answerA = $("<button></button>").text(questions[index].answerA.answerText);
        $(answerA).addClass("answer");
        $(answerA).attr("correct", questions[index].answerA.isCorrect)
        $("#gameRow").append(answerA);

        answerB = $("<button></button>").text(questions[index].answerB.answerText);
        $(answerB).addClass("answer");
        $(answerB).attr("correct", questions[index].answerB.isCorrect)
        $("#gameRow").append(answerB);

        answerC = $("<button></button>").text(questions[index].answerC.answerText);
        $(answerC).addClass("answer");
        $(answerC).attr("correct", questions[index].answerC.isCorrect)
        $("#gameRow").append(answerC);

        answerD = $("<button></button>").text(questions[index].answerD.answerText);
        $(answerD).addClass("answer");
        $(answerD).attr("correct", questions[index].answerD.isCorrect)
        $("#gameRow").append(answerD);

        // goes to result screen when answer is clicked
        $(".answer").click(function () {
            selResult = ($(this).attr("correct"));
            toResult();

        });

        // function to remove question/answers and go to time up screen
        function toTimeup() {
            setTimer(toQuestions, 3000);
            selectedText.detach();
            answerA.detach();
            answerB.detach();
            answerC.detach();
            answerD.detach();
            var timeMsg = $("<h2></h2>").text("Time's up! The correct answer was " + questions[index].correctText);
            $(timeMsg).addClass("result");
            $("#gameRow").append(timeMsg);
            index++;
            incorrectNum++;
            if (index > 4) {
                setTimer(gameOver, 5000);
            }
        }

        // function to remove questions/answers and go to result screen
        function toResult() {
            setTimer(toQuestions, 3000);

            // assigns correct answer to a variable

            // displays correct message if clicked was correct
            if (selResult == "true") {
                selectedText.detach();
                answerA.detach();
                answerB.detach();
                answerC.detach();
                answerD.detach();
                var correctMsg = $("<h2></h2>").text("Correct!")
                $(correctMsg).addClass("result")
                $("#gameRow").append(correctMsg);
                console.log("this was true");
                index++;
                correctNum++;
                if (index > 4) {
                    setTimer(gameOver, 5000);
                }
            }
            // displays incorrect message if clicked was incorrect
            else {
                selectedText.detach();
                answerA.detach();
                answerB.detach();
                answerC.detach();
                answerD.detach();
                answerD.detach();
                var incorrectMsg = $("<h2></h2>").text("Incorrect! The correct answer was " + questions[index].correctText);
                $(incorrectMsg).addClass("result")
                $("#gameRow").append(incorrectMsg);
                console.log("this was false");
                index++;
                incorrectNum++;
                if (index > 4) {
                    setTimer(gameOver, 5000);
                }
            }

        }
        function gameOver() {
            index = 0;
            $("#gameRow").empty();
            var gameOverMsg = $("<h2></h2>").text("Game over! You got " + correctNum + " questions correct and " + incorrectNum + " wrong!");
            var playAgainMsg = $("<h2></h2>").text("Press Start to try again!");
            $("#gameRow").append(gameOverMsg);
            $("#gameRow").append(playAgainMsg);
            $("#gameRow").append(startBtn);
            $(startBtn).click(function () {
                toQuestions();
            })
        }
    }
}







$(document).ready(toStart);
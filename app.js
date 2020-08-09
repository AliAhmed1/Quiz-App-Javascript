var questions = [
    {
        question: "Which team was the champion of the 1994-1995 Premier League season?",
        correctAnswer: "Blackburn Rovers",
        answer:
            [
                "Blackburn Rovers",
                "Manchester United",
                "Arsenal",
                "liverpool"
            ],
    },

    {
        question: "Which team is Pakistan",
        correctAnswer: "Pakistan",
        answer:
            [
                "None",
                "Pakistan",
                "England",
                "Austrialia"
            ],
    },
    {
        question: "What is 9-9",
        correctAnswer: "0",
        answer:
            [
                "0",
                "1",
                "2",
                "3"
            ],
    },
    {
        question: "what is 3+3",
        correctAnswer: "6",
        answer:
            [
                "9",
                "4",
                "6",
                "0"
            ],
    },
]


points = 0;

count = 0;

function start(e) {

    var ques = document.getElementById('question')
    var opt = document.getElementsByClassName('op')

    if (e >= 4) {
    }
    else {
        ques.innerHTML = questions[e].question;


        for (var i = 0; i < questions.length; i++) {
            opt[i].innerHTML = questions[e].answer[i]
            if (e >= 4) {
                break;
            }
        }

    }



}

function checkquestion(e) {
    var active = document.getElementsByClassName('active')

    for (var i = 0; i < active.length; i++) {
        if (e >= 4) {
        }
        else {
            if (active[i].innerHTML == questions[e].correctAnswer) {
                points++;
            }
        }
    }
}

function displayQuestion() {
    alert('Your Points : '+ points)
}

function nextquestion() {
    checkquestion(count)
    count++;
    start(count)
    if (count == 4) {
        displayQuestion()
    }
}

function addactive(e) {
    removeactive()
    e.classList.add('active');
}

function removeactive() {

    var active = document.getElementsByClassName('active')
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
    }
}
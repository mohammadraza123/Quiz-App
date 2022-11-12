
var quiz = {
    Allquestions: [
        {
            question: "Q1 : What does HTML stand For ?",
            a: "Hyper Text Markup Language",
            b: "Home Tool Markup Language",
            c: "Hyperlinks and Text Markup Language",
            d: "How Text Markup Language",
            ans: "ans1"
        },
        {
            question: "Q2 : What is the correct HTML element for inserting a line break?",
            a: "<'br'>",
            b: "lb",
            c: "break",
            d: "bra",
            ans: "ans1",
        },
        {
            question: "Q3 : Which character is used to indicate an end tag?",
            a: "/",
            b: "<",
            c: "*",
            d: "^",
            ans: "ans1",
        }, {
            question: "Q4 : What is the correct HTML for making a checkbox?",
            a: "<'input type='checkbox''>",
            b: "<'check'>",
            c: "<'input type='check''>",
            d: "<'checkbox'>",
            ans: "ans1",
        },
        {
            question: "Q5 : Who is making the Web standards?",
            a: "Mozilla",
            b: "Google",
            c: "The World Wide Web Consortium",
            d: "Microsoft",
            ans: "ans3",
        },
        {
            question: "Q6 : Choose the correct HTML element for the largest heading:",
            a: "heading",
            b: "heading2",
            c: "<'h1'>",
            d: "heading6",
            ans: "ans3",
        },
        {
            question: "Q7 : How can you make a numbered list?",
            a: "<'dl'>",
            b: "<'ol'>",
            c: "<'list'>",
            d: "<'ul'>",
            ans: "ans2",
        },
        {
            question: "Q8 : Which HTML element defines the title of a document?",
            a: "<'meta'>",
            b: "<'head'>",
            c: "<'title'>",
            d: "<'body'>",
            ans: "ans3",

        },
        {
            question: "Q9 : What is the correct HTML for adding a background color?",
            a: "body bg='yellow'",
            b: "<'body style='background-color:yellow;''>",
            c: "yellow",
            d: "<'body background-color='yellow''>",
            ans: "ans2",
        },
        {
            question: "Q10 : Choose the correct HTML element to define important text:",
            a: "i",
            b: "<'strong'>",
            c: "important",
            d: "b",
            ans: "ans2",
        },
        {
            question: "Q11 : Which character is used to indicate an end tag?",
            a: "/",
            b: "<",
            c: "*",
            d: "^",
            ans: "ans1",
        },
        {
            question: "Q12 : Which of these elements are all <'table'> elements?",
            a: "<'table'> <'tr'> <'td'>",
            b: "<'table'> <'td'> <'tr'>",
            c: "<'table'> <'tr'> <'tt'>",
            d: "<'thead'> <'body'> <'tt'>",
            ans: "ans1",
        },
        {
            question: "Q13 : What is the correct HTML for making a drop-down list?",
            a: "<'input type='dropdown''>",
            b: "<'select'>",
            c: "<'input type='list''>",
            d: "<'list'>",
            ans: "ans2",
        },
        {
            question: "Q14 : Which doctype is correct for HTML5?",
            a: "<'!DOCTYPE html'>",
            b: "<'!DOCTYPE HTML5'>",
            c: "<'!DOCTYPE html public'>",
            d: "<'!DOCTYPE html5i'>",
            ans: "ans1",
        },
        {
            question: "Q15 : What is the correct HTML element for playing video files?",
            a: "<'vedio'>",
            b: "<'media'>",
            c: "<'movie'>",
            d: "<'film'>",
            ans: "ans1",

        },
        {
            question: "Q16 : What is the correct HTML element for playing audio files?",
            a: "<'sound'>",
            b: "<'audio'>",
            c: "<'mp3'>",
            d: "<'mp4'>",
            ans: "ans2",
        },
        {
            question: "Q17 : In HTML, onblur and onfocus are:",
            a: "HTML Elements",
            b: "Event Attributes",
            c: "Style Attributes",
            d: "Tag Attributes",
            ans: "ans2",
        }, {
            question: "Q18 : Graphics defined by SVG is in which format?",
            a: "XML",
            b: "CSS",
            c: "HTML",
            d: "SVGS",
            ans: "ans1",
        },
        {
            question: "Q19 : In HTML, which attribute is used to specify that an input field must be filled out?",
            a: "placeholder",
            b: "formvalidate",
            c: "required",
            d: "validate",
            ans: "ans3",
        },
        {
            question: "Q20 : Which input type defines a slider control?",
            a: "slider",
            b: "search",
            c: "range",
            d: "controls",
            ans: "ans3",
        },
        {
            question: "Q21 : Which HTML element is used to specify a header for a document or section?",
            a: "<'section'>",
            b: "<'head'>",
            c: "<'top'>",
            d: "<'header'>",
            ans: "ans4",
        },
        {
            question: "Q22 : Choose the correct HTML element to define important text:",
            a: "i",
            b: "<'strong'>",
            c: "important",
            d: "b",
            ans: "ans2",
        },
        {
            question: "Q23 : Choose the correct HTML element to define emphasized text:",
            a: "<'em'>",
            b: "i",
            c: "italic",
            d: "abr",
            ans: "ans1",

        },
        {
            question: "Q24 : How can you make a bulleted list?",
            a: "<'list'>",
            b: "<'ol'>",
            c: "<'dl'>",
            d: "<'ul'>",
            ans: "ans4",

        },
        {
            question: "Q25 : Which HTML element defines the title of a document?",
            a: "<'meta'>",
            b: "<'head'>",
            c: "<'title'>",
            d: "<'body'>",
            ans: "ans3",
        }


    ]
}


var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var next = document.querySelector("#next");


var answers = document.getElementsByName("answer");

var showScore = document.getElementById("showScore");

var qusetionCount = 0;
var score = 0;
var questionBack = 25;

function loadQuestion() {

    var qusetionList = quiz.Allquestions[qusetionCount];

    question.innerHTML = qusetionList.question;
    option1.innerHTML = qusetionList.a;
    option2.innerHTML = qusetionList.b;
    option3.innerHTML = qusetionList.c;
    option4.innerHTML = qusetionList.d;
}
loadQuestion();

function getCheckAnswer() {
    var answer;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }
    return answer;
}

function dselectAll() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

next.addEventListener("click", () => {
    var checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);

    if (checkedAnswer === quiz.Allquestions[qusetionCount].ans) {
        score++;
    }

    qusetionCount++;

    dselectAll();

    if (qusetionCount < quiz.Allquestions.length) {
        loadQuestion();
    }
    else if (score > 17) {
        showScore.innerHTML = `
      <h4 id="heading50"> Congratulation You Have Passed <br>  Correct Answers : ${score}<br> Total Questions : ${quiz.Allquestions.length}  </h4>
      <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
    `
        showScore.classList.remove("scoreArea")
        countdown.style.display = "none"
        var container = document.querySelector(".container")
        container.style.display = "none"
        showScore.style.display = "block"
        showScore.style.background = "rgb(147, 189, 192) ";

    }
    else {
        showScore.innerHTML = `
      <h4 id="heading50"> You  Are Fail  <br>  Correct Answers : ${score}<br> Total Questions : ${quiz.Allquestions.length}     </h4>
      <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
    `
        showScore.classList.remove("scoreArea")
        countdown.style.display = "none"
        var container = document.querySelector(".container")
        container.style.display = "none"
        showScore.style.display = "block"
        showScore.style.background = "rgb(147, 189, 192)";
        ;
    }




})


var startingMin = 30;
var time = startingMin * 60;

var countdown = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
}











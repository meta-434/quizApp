function handleStart () {
    console.log('STORE: ', STORE);
    $(".start").on('keydown', function begin(e) {
       if (e.key === "Enter") {
           renderQuestion();
           console.log('enter handled');
           $(".start").hide();
           $("#start-text").append($(`<span>--press-enter-to-start</span>`));
       }
    });
};

function renderQuestion () {
    $('#quiz-body').append($(
        `<div>
            <p>guest@quizbox:~/ $ {? => q${STORE.currentQuestion + 1}} {% => ${(STORE.score / 5) * 100}%}</p>
            <p id="question-1">guest@quizbox:~/ $ ${STORE.questions[STORE.currentQuestion].question}</p>
            <p id="answer-a">>> a: ${STORE.questions[STORE.currentQuestion].options.a}</p>
            <p id="answer-b">>> b: ${STORE.questions[STORE.currentQuestion].options.b}</p>
            <p id="answer-c">>> c: ${STORE.questions[STORE.currentQuestion].options.c}</p>
            <p id="answer-d">>> d: ${STORE.questions[STORE.currentQuestion].options.d}</p>
            <p id="submission">guest@quizbox:~/ $ answer? (a/b/c/d): <input type="text" class="response"/> </p>
        </div>`
    ));
    handleAnswerSubmit();
};

function handleAnswerSubmit () {
    console.log('handleAnswerSubmit ran');
    $("#terminal-body").on('keydown', ".response", function response (e) {
        if (e.key === "Enter"){
            if($(".response").val() === "a") {
                checkAnswer("a");
            } else if ($(".response").val() === "b") {
                checkAnswer("b");
            } else if ($(".response").val() === "c") {
                checkAnswer("c");
            } else if ($(".response").val() === "d") {
                checkAnswer("d");
            }
        }
        $(`#quiz-body div:nth-child(${STORE.currentQuestion})`).attr("disabled","disabled");
    })
};

function checkAnswer (resp) {
    if (STORE.questions[STORE.currentQuestion].answer === resp) {
        STORE.score += 1;
        STORE.currentQuestion += 1;
        console.log('correct!')
        console.log("current question", STORE.currentQuestion, " current score: ", STORE.score);
    } else {
        STORE.currentQuestion += 1;
        console.log(`wrong! correct answer was ${STORE.questions[STORE.currentQuestion].answer}`);
        console.log("current question", STORE.currentQuestion, " current score: ", STORE.score);
    }
    renderQuestion();
}

function start () {
    handleStart();
};

$(start);
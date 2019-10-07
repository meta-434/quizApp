function handleStart () {
    console.log('STORE: ', STORE);
    $(".start").on('keydown click', function begin(e) {
       if (e.key === "Enter") {
           renderQuestion();
           console.log('enter handled');
           $(".start").hide();
           $("#start-text").append($(`<span>--enter-to-start</span>`));
       }
    });
};

function renderQuestion () {
    if ((STORE.currentQuestion)=== STORE.questions.length) {
        console.log('end reached...');
        $('#quiz-body').append($(
            `<div>
                <p>guest@quizbox:~/ $ ***FINAL SCORE*** {? => q${STORE.currentQuestion}} {% => ${(STORE.score / 5) * 100}% (${STORE.score} / 5)</p>
            </div>`
        ));
    }
    console.log(`current question: ${STORE.currentQuestion + 1}`);
    $('#quiz-body').append($(
        `<div>
            <p>guest@quizbox:~/ $ {?num => q${STORE.currentQuestion + 1}} {score% => ${(STORE.score / 5) * 100}% (${STORE.score} / 5)</p>
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
                $(".response").detach();
                checkAnswer("a");
            } else if ($(".response").val() === "b") {
                $(".response").detach();
                checkAnswer("b");
            } else if ($(".response").val() === "c") {
                $(".response").detach();
                checkAnswer("c");
            } else if ($(".response").val() === "d") {
                $(".response").detach();
                checkAnswer("d");
            }
        }
    })
};

function checkAnswer (resp) {
    if (STORE.questions[STORE.currentQuestion].answer === resp) {
        $('#quiz-body').append($(`<div><p>guest@quizbox:~/ $ correct!</p></div>]`));
        STORE.score += 1;
        console.log('correct!');
        console.log("current question", STORE.currentQuestion, " current score: ", STORE.score);

    } else {
        $('#quiz-body').append($(`<div><p>guest@quizbox:~/ $ incorrect, correct answer was ${STORE.questions[STORE.currentQuestion].answer}</p></div>]`));
        console.log(`wrong! correct answer was ${STORE.questions[STORE.currentQuestion].answer}`);
        console.log("current question", STORE.currentQuestion, " current score: ", STORE.score);
    }
    STORE.currentQuestion += 1;
    renderQuestion();
}

function start () {
    handleStart();
};

$(start);
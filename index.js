/* when a user clicks on start quiz button */
function startQuiz() {
    $('#start').on('click', function(e){
            renderQuestion();
        }
    );
}

/* Displays question number and score obtained */
function updateQuestionAndScore() {
    const html = $(`<ul>
      <li id="js-answered">Current question: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
      <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
    $(".question-and-score").html(html);
}

/* Displays the options for the current question */
function updateOptions()
{
    let question = STORE.questions[STORE.currentQuestion];
    for(let i=0; i<question.options.length; i++)
    {
        $('.js-options').append(`
        <input type = "radio" name="options" id="option${ i + 1 }" value= "${question.options[ i ]}" tabindex ="${ i + 1 }"> 
        <label for="option${i+1}"> ${question.options[i]}</label> <br/>
        <span id="js-r${i+1}"></span>
        `);
    }
}

/*displays question*/
function renderQuestion() {
    let question = STORE.questions[STORE.currentQuestion];
    updateQuestionAndScore();
    const questionHtml = $(`
  <div>
    <form id="js-questions" class="question-form">
      
      <fieldset>
        <div class="row question">
            <legend> ${question.question}</legend>
        </div>
        
        <div class="row options">
            <div class="js-options"> </div>
        </div>
    

      <div class="row">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="next-question" tabindex="6"> Next >></button>
      </div>
    </fieldset>
    </form>
  </div>`);
    $("main").html(questionHtml);
    updateOptions();
    $("#next-question").hide();
}

/* displays results and restart quiz button */
function displayResults() {
    let resultHtml = $(
        `<div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
          </div>
          <div class="row">
              <button type="button" id="restart"> Restart Quiz </button>
          </div>
        </fieldset>
    </form>
    </div>`);
    STORE.currentQuestion = 0;
    STORE.score = 0;
    $("main").html(resultHtml);
}

/* checks whether it reached the end of questions list */
function checkQuizEnd() {
    $('body').on('click','#next-question', (e) => {
        STORE.currentQuestion === STORE.questions.length
            ? displayResults()
            : renderQuestion();
    });
}

/*checks the selected option and displays appropriate message*/
function handleSelectOption() {
    $('body').on("submit",'#js-questions', (e) => {
        e.preventDefault();
        let current = STORE.questions[STORE.currentQuestion];
        let selectedOption = $("input[name=options]:checked").val();
        if (!selectedOption) {
            alert("Choose an option");
            return;
        }
        let number = current.options.findIndex(i => i === selectedOption);
        let id = "#js-r" + ++number;
        $('span').removeClass("correct incorrect");
        if(selectedOption === current.answer) {
            STORE.score++;
            $(`<img src='./icons8-offline-pin-100.png' alt='correct-icon'><br />You got it right!<br/>`).insertBefore("#next-question");
            $('.question').addClass("hidden");
            $('.options').addClass("hidden");
            $(`fieldset`).addClass("correct");
        }
        else {
            $(`<img src='./icons8-error-100.png' alt='incorrect-icon'><br />incorrect... <br/> The correct answer was "${current.answer}"<br/>`).insertBefore("#next-question");
            $("fieldset").addClass("incorrect");
            $('.question').addClass("hidden");
            $('.options').addClass("hidden");
        }

        STORE.currentQuestion++;
        $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
        $('#answer').hide();
        $("input[type=radio]").attr('disabled', true);
        $('#next-question').show();
    });
}

function restartQuiz() {
    $('body').on('click','#restart', (e) => {
        renderQuestion();
    });
}

function handleQuizApp() {
    startQuiz();
    checkQuizEnd();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp);
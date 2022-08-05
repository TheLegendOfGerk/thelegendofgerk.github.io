const eightBall = document.getElementById('AnswerBall')
const QuestionDisplay = document.getElementById('QuestionDisplay')
function RandomNumber(max) {
    const result = Math.floor(Math.random()*max) + 1;
    console.log ('Random response ' + result);
    return result
}

document.forms.QuestionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getAnswer(this.inputQuestion)
})

var opacity = 0;

function fadeIn(image) {
    image.style.opacity = 0;
    var tick = setInterval (function () {
        if (image.style.opacity < 1){
            opacity += 0.02
            image.style.opacity = opacity;
            //console.log(image.style.opacity);
        }
        else {clearInterval(tick);
        opacity = 0;}
}, 40)
}


function getAnswer(question) {
    QuestionDisplay.innerHTML = `"${inputQuestion.value}"`;
    //We use 20 because there are (currently) 20 images in the directory. Your mileage may vary, of course.
    var answerImage = `./img/magic8ball_${RandomNumber(20)}.png`;
    eightBall.src=answerImage;
    eightBall.style.opacity = 0;
    console.log(eightBall.style.opacity);
    fadeIn(eightBall);
}

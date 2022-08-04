// Complete your final project
// Main objectives:
// Create an input field for users to ask a question
// Create a label for your input field telling your user to "Ask me anything!"
// Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
// Create a div with an id of "answers" that you will insert the images into using js
// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
// Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project
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

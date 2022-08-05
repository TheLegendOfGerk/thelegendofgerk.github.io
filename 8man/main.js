// EIGHT MAN!
const AnswerBubble = document.getElementById('DialogueContainer')
const AnswerText = document.getElementById('ResponseText')
const QuestionDisplay = document.getElementById('QuestionDisplay')
const EightManNameDrop = new Audio('8man.mp3')

const ResponseList = [`Certainly! Go to it!`,
    `Definitely yes! Believe in your dreams!`,
    `Yes! You have the power!`,
    `Most likely! If you believe!`,
    `Without a doubt! Finish the fight!`,
    `You can count on it, only if you count on yourself!`,
    `As I see it, yes! The question is, can YOU make it happen?`,
    `Signs point to yes! Lending you my energy, citizen!`,
    `The outlook, is good! And the power, is yours!`,
    `Absolutely YES!`,
    `Answer unclear! My nemesis Prof. Incertitude must be at it again!`,
    `My powers need to recharge! Please ask me again later!`,
    `Some things are best left untold, my friend!`,
    `You have to truly believe to ask! Try asking again!`,
    `I wouldn't count on it! My apologies, citizen!`,
    `My official reply is no! Do you believe that, though?`,
    `The source of my power reads: No!`,
    `The outlook is less than positive!`,
    `Look inside your own heart! Mine says it is doubtful!`]

function RandomResponse() {
    const result = Math.floor(Math.random()*ResponseList.length);
    console.log ('Random response ' + result);
    return ResponseList[result]
}

document.getElementById('namedrop').addEventListener('click', function() {
    EightManNameDrop.play()
})

document.forms.QuestionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getAnswer(this.inputQuestion)
})

var opacity = 0;

function fadeIn(target) {
    target.style.opacity = 0;
    var tick = setInterval (function () {
        if (target.style.opacity < 1){
            opacity += 0.02
            target.style.opacity = opacity;
            //console.log(image.style.opacity);
        }
        else {clearInterval(tick);
        opacity = 0;}
}, 40)
}


function getAnswer(question) {
    QuestionDisplay.innerHTML = `"${inputQuestion.value}"`;
    AnswerText.innerHTML=RandomResponse();
    AnswerBubble.style.opacity = 0;
    console.log(AnswerBubble.style.opacity);
    fadeIn(AnswerBubble);
}

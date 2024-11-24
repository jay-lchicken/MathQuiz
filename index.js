document.getElementById("Quiz").style.display = "none";
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("startbody").style.display = "none";
    document.getElementById("Quiz").style.display = "block";
    generateRandomQuestion()

});
var score = 0;
var tries = 0;
var correctAnswer = 0;

function addQuestion(question) {
    var txt = question; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */
    var i = 0;
    document.getElementById("question").innerHTML = "";
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("question").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}
function generateRandomQuestion(){
    document.getElementById("score").innerHTML = "Score: " + score + "/" + tries;
    var operation = Math.floor(Math.random()*3);
    if (operation == 0){
        var num1 = Math.floor(Math.random()*100);
        var num2 = Math.floor(Math.random()*100);
        addQuestion(`${num1} + ${num2}`);
    }else if (operation == 1) {
        var num1 = Math.floor(Math.random() * 100);
        var num2 = Math.floor(Math.random() * 100);
        addQuestion(`${num1} - ${num2}`)
    }else if (operation == 2) {
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        addQuestion(`${num1} * ${num2}`)
    }
    var answerPosition = Math.floor(Math.random()*4);
    var answers = [];

    for (let x = 0; x<4;x++){
        if (x == answerPosition){
            if (operation == 0){
                answers.push(num1 + num2);
                correctAnswer = num1 + num2;
            }else if (operation == 1){
                if (num1 < num2) {
                    var temp = num1;
                    num1 = num2;
                    num2 = temp;
                }
                answers.push(num1 - num2);
                correctAnswer = num1 - num2;

            }else if (operation == 2){
                answers.push(num1 * num2);
                correctAnswer = num1 * num2;
            }
        }else {
            var wrongAnswer;
            if (operation == 0) {
                wrongAnswer = Math.floor(Math.random() * 200);
            } else if (operation == 1) {
                wrongAnswer = Math.floor(Math.random() * 100);
            } else if (operation == 2) {
                wrongAnswer = Math.floor(Math.random() * 100);
            }
            answers.push(wrongAnswer);
        }
    }
    var index = 0;
    for (let i of answers){
        document.getElementById("option"+(index+1)).textContent = i;
        index++;
    }

}

document.getElementById("option1").addEventListener("click", function(){

    if (document.getElementById("option1").textContent == String(correctAnswer)) {

        alert("Correct");
        score+=1;
    }
    tries+=1;
    generateRandomQuestion();
})
document.getElementById("option2").addEventListener("click", function(){

    if (document.getElementById("option2").textContent == String(correctAnswer)) {
        alert("Correct");
        score+=1;
    }
    tries+=1;
    generateRandomQuestion();
})
document.getElementById("option3").addEventListener("click", function(){

    if (document.getElementById("option3").textContent == String(correctAnswer)) {
        alert("Correct");
        score+=1;
    }
    tries+=1;
    generateRandomQuestion();
})
document.getElementById("option4").addEventListener("click", function(){

    if (document.getElementById("option4").textContent == correctAnswer) {
        alert("Correct");
        score+=1;
    }
    tries+=1;
    generateRandomQuestion();
})

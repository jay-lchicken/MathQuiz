document.getElementById("Quiz").style.display = "none";
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("startbody").style.display = "none";
    document.getElementById("Quiz").style.display = "block";
    generateRandomQuestion()

});
function generateRandomQuestion(){
    var operation = Math.floor(Math.random()*3);
    if (operation == 0){
        var num1 = Math.floor(Math.random()*100);
        var num2 = Math.floor(Math.random()*100);
        document.getElementById("question").innerHTML = num1 + " + " + num2;
    }else if (operation == 1) {
        var num1 = Math.floor(Math.random() * 100);
        var num2 = Math.floor(Math.random() * 100);
        document.getElementById("question").innerHTML = num1 + " - " + num2;
    }else if (operation == 2) {
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        document.getElementById("question").innerHTML = num1 + " * " + num2;
    }
    var correctAnswerPosition = Math.floor(Math.random()*4);
    var answers = [];
    for (let x = 0; x<4;x++){
        if (x == correctAnswerPosition){
            if (operation == 0){
                answers.push(num1 + num2);
            }else if (operation == 1){
                answers.push(num1 - num2);
            }else if (operation == 2){
                answers.push(num1 * num2);
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
    alert(answers);
    var index = 0;
    for (let i of answers){
        alert("option"+index);
        alert(i);
        document.getElementById("option"+(index+1)).textContent = i;
        index++;
    }
}
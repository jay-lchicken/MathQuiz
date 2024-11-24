import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import {GoogleAuthProvider,getAuth, signInWithEmailAndPassword,  fetchSignInMethodsForEmail,onAuthStateChanged, signOut, sendPasswordResetEmail, signInWithPopup, OAuthProvider } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
var username;
var score = 0;
var tries = 0;
var correctAnswer = 0;
const firebaseConfig = {
    apiKey: "AIzaSyD6su1cHYsxq2GXzwtJTFeTaR98gZtluK4",
    authDomain: "math-quiz-9f398.firebaseapp.com",
    projectId: "math-quiz-9f398",
    storageBucket: "math-quiz-9f398.firebasestorage.app",
    messagingSenderId: "630588276904",
    appId: "1:630588276904:web:f59d3ace021a85122d829d",
    measurementId: "G-DT1EDQRP12"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
async function loadLeaderboard(){
    const usersCollectionRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollectionRef);
    document.getElementById("leaderboard").innerHTML = "";
    document.getElementById("leaderboard").innerHTML += `
    <tr>
            <th>Username</th>
            <th>Score</th>
        </tr>`
    usersSnapshot.forEach((doc) => {

        document.getElementById("leaderboard").innerHTML += `
        <tr>
            <td>${doc.id}</td>
            <td>${doc.data().score}/${doc.data().tries}</td>
        </tr>`
        console.log(doc.id, '=>', doc.data());
    });
}
loadLeaderboard()

async function loadData(username) {
    try {
        const userDocRef = doc(db, 'users', username);

        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            score = userData.score;
            tries = userData.tries;
            document.getElementById("score").innerHTML = "Score: " + score + "/" + tries;

        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}
async function saveData(username, score, tries) {
    try {
        const userDocRef = doc(db, 'users', username);

        await setDoc(userDocRef, { score: score, tries: tries });

        console.log('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
    }
}
// Initialize Firebase

document.getElementById("Quiz").style.display = "none";
document.getElementById("start").addEventListener("click", function() {

    document.getElementById("startbody").style.display = "none";
    alert("PLEASE WAIT WHILE WE LOAD YOUR DATA.");
    loadData(document.getElementById("username").value).then(() => {
        username = document.getElementById("username").value;
        document.getElementById("Quiz").style.display = "block";
        generateRandomQuestion()
    });


});


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
    loadLeaderboard()
    document.getElementById("score").innerHTML = "Score: " + score + "/" + tries;
    var operation = Math.floor(Math.random()*3);
    if (operation == 0){
        var num1 = Math.floor(Math.random()*100);
        var num2 = Math.floor(Math.random()*100);
        addQuestion(`${num1} + ${num2}`);
    }else if (operation == 1) {
        var num1 = Math.floor(Math.random() * 100);
        var num2 = Math.floor(Math.random() * 100);
        if (num1 < num2) {
            var temp = num1;
            num1 = num2;
            num2 = temp;
        }
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
    saveData(username, score, tries);
    generateRandomQuestion();
})
document.getElementById("option2").addEventListener("click", function(){

    if (document.getElementById("option2").textContent == String(correctAnswer)) {
        alert("Correct");
        score+=1;
    }
    tries+=1;
    saveData(username, score, tries);
    generateRandomQuestion();
})
document.getElementById("option3").addEventListener("click", function(){

    if (document.getElementById("option3").textContent == String(correctAnswer)) {
        alert("Correct");
        score+=1;
    }
    tries+=1;
    saveData(username, score, tries);
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

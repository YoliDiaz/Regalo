const questions = [
    {
        id: 1,
        questions: "1 Tipo de celebración",
        answers: ["Cumpleaños", "Comunión", "Amigo Invisible", "Navidad", "Aniversario"],
    },

    {
        id: 2,
        questions: "2 Sexo de la persona",
        answers: ["Mujer", "Hombre"],
    },

    {
        id: 3,
        questions: "3 Edad de la persona",
        answers: ["Menos de 6 años", "Entre 7 y 15 años", "Entre 16 y 25 años", "Entre 26 y 35 años", "Más de 36 años"],
    },

    {
        id: 4,
        questions: "4 Gustos Personales",
        answers: ["Terror", "Comedia", "Tecnologia", "Disney", "Animme", "Musica", "Poesia", "Moda"],

    },

    {
        id: 5,
        questions: "5 Estilo",
        answers: ["Vintage", "Boemio", "Heavy", "Hippie", "Coquette", "Gotico", "Aesthetic"],
    },

    {
        id: 6,
        questions: "6 Tipo Regalo",
        answers: ["Comprado", "Manual"],
    }
    
];

let currentQuestion = 0;

const title = document.getElementById("question");
const answers = document.getElementById("answers");

function printQuestion(){
    title.innerText = questions[currentQuestion].questions;
    let questionAnswers = questions[currentQuestion].answers;
    questionAnswers.sort(() => Math.random() - 0.5);
    answers.innerHTML = "";

    questionAnswers.forEach((answer) => {
        answers.innerHTML += `<button>${answer}</button>`;
    });
}

printQuestion();

function nextQuestion() {
    currentQuestion++;
    console.log(currentQuestion);
    printQuestion();
}
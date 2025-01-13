const questions = [
    {
        id: 1,
        questions: "1 Tipo de celebración",
        answers: ["Cumpleaños", "Comunión", "Amigo Invisible", "Navidad", "Aniversario"],
    },

    {
        id: 2,
        questions: "2 Hobbies de la persona",
        answers: ["Literatura", "Dibujo", "Fotografia", "Series/Pelis", "Videojugos", "Deportes"],
    },

    {
        id: 3,
        questions: "3 Gustos Personales",
        answers: ["Terror", "Comedia", "Tecnologia", "Disney", "Animme", "Musica", "Poesia", "Moda"],

    },

    {
        id: 4,
        questions: "4 Estilo",
        answers: ["Vintage", "Boemio", "Heavy", "Hippie", "Coquette", "Gotico", "Aesthetic"],
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
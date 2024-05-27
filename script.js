// Define an array of capital cities and their corresponding countries
const capitalCities = [
    { city: "Ámsterdam", country: "Países Bajos" },
    { city: "Andorra la Vella", country: "Andorra" },
    { city: "Atenas", country: "Grecia" },
    { city: "Belgrado", country: "Serbia" },
    { city: "Berlín", country: "Alemania" },
    { city: "Bern", country: "Suiza" },
    { city: "Bratislava", country: "Eslovaquia" },
    { city: "Bruselas", country: "Bélgica" },
    { city: "Bucarest", country: "Rumania" },
    { city: "Budapest", country: "Hungría" },
    { city: "Chisináu", country: "Moldavia" },
    { city: "Copenhague", country: "Dinamarca" },
    { city: "Dublín", country: "Irlanda" },
    { city: "Helsinki", country: "Finlandia" },
    { city: "Kiev", country: "Ucrania" },
    { city: "Lisboa", country: "Portugal" },
    { city: "Liubliana", country: "Eslovenia" },
    { city: "Londres", country: "Reino Unido" },
    { city: "Luxemburgo", country: "Luxemburgo" },
    { city: "Madrid", country: "España" },
    { city: "Minsk", country: "Bielorrusia" },
    { city: "Mónaco", country: "Mónaco" },
    { city: "Moscú", country: "Rusia" },
    { city: "Nicosia", country: "Chipre" },
    { city: "Nuuk", country: "Groenlandia" },
    { city: "Oslo", country: "Noruega" },
    { city: "París", country: "Francia" },
    { city: "Podgorica", country: "Montenegro" },
    { city: "Praga", country: "República Checa" },
  ];

// Create a set to track answered questions
const answeredQuestions = new Set();

function getRandomUnansweredQuestion() {
    const unansweredQuestions = capitalCities.filter(question => !answeredQuestions.has(question.city));
    const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
    return unansweredQuestions[randomIndex];
}

function getRandomAnswerOptions(correctAnswer) {
    const allCitiesExceptCorrect = capitalCities.filter(city => city.city !== correctAnswer);
    const shuffledCities = shuffleArray(allCitiesExceptCorrect).slice(0, 2); // Get 2 random incorrect answers
    return [...shuffledCities, { city: correctAnswer }]; // Include the correct answer
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answerOptionsElement = document.getElementById('answer-options');
    const resultElement = document.getElementById('result');
    const currentQuestion = getRandomUnansweredQuestion();
    const answerOptions = getRandomAnswerOptions(currentQuestion.city);

    questionElement.textContent = `Que es la capital de ${currentQuestion.country}?`;

    // Clear existing answer options
    answerOptionsElement.innerHTML = '';

    // Create answer buttons dynamically
    for (const city of answerOptions) {
        const button = document.createElement('button');
        button.textContent = city.city;
        button.onclick = () => checkAnswer(city.city, currentQuestion.city);
        answerOptionsElement.appendChild(button);
    }

    // Reset the result message
    resultElement.textContent = '';
}

function checkAnswer(selectedAnswer, correctAnswer) {
    answeredQuestions.add(correctAnswer); // Mark the question as answered
    const resultElement = document.getElementById('result');

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correct! 🎉';
    } else {
        resultElement.textContent = 'Incorrect. Try again!';
    }

    // If all questions have been answered, reset the set
    if (answeredQuestions.size === capitalCities.length) {
        answeredQuestions.clear();
    }

    // Display the next question after a 1-second delay
    setTimeout(() => {
        displayQuestion();
    }, 1000); // 1000 milliseconds = 1 second
}

// Start the game by displaying the first question
displayQuestion();

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

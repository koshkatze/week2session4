const wordsByCategory = {
    foods: [
        { spanish: "comida", english: "food" },
        { spanish: "agua", english: "water" },
        { spanish: "manzana", english: "apple" },
        { spanish: "pan", english: "bread" },
        { spanish: "queso", english: "cheese" },
        { spanish: "pollo", english: "chicken" },
        { spanish: "pescado", english: "fish" },
        { spanish: "carne", english: "meat" },
        { spanish: "arroz", english: "rice" },
        { spanish: "sopa", english: "soup" }
    ],
    places: [
        { spanish: "escuela", english: "school" },
        { spanish: "hospital", english: "hospital" },
        { spanish: "tienda", english: "shop" },
        { spanish: "restaurante", english: "restaurant" },
        { spanish: "parque", english: "park" },
        { spanish: "biblioteca", english: "library" },
        { spanish: "museo", english: "museum" },
        { spanish: "cine", english: "cinema" },
        { spanish: "hotel", english: "hotel" },
        { spanish: "iglesia", english: "church" }
    ],
    family: [
        { spanish: "madre", english: "mother" },
        { spanish: "padre", english: "father" },
        { spanish: "hermano", english: "brother" },
        { spanish: "hermana", english: "sister" },
        { spanish: "abuelo", english: "grandfather" },
        { spanish: "abuela", english: "grandmother" },
        { spanish: "tío", english: "uncle" },
        { spanish: "tía", english: "aunt" },
        { spanish: "primo", english: "cousin (male)" },
        { spanish: "prima", english: "cousin (female)" }
    ]
};

let currentWords = [];
let currentWordIndex = 0;
let correctAnswers = 0;
let perfectScore = false;

const categorySelect = document.getElementById("category-select");
const startButton = document.getElementById("start-game-button");
const spanishWordElement = document.getElementById("spanish-word");
const translationInput = document.getElementById("translation-input");
const submitButton = document.getElementById("submit-translation-button");
const feedbackElement = document.getElementById("feedback");
const finalMessage = document.getElementById("final-message");

function getRandomWords(category, count) {
    let selectedWords = [];
    let usedIndices = new Set();

    while (selectedWords.length < count) {
        let randomIndex = Math.floor(Math.random() * category.length);
        if (!usedIndices.has(randomIndex)) {
            selectedWords.push(category[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return selectedWords;
}

startButton.addEventListener("click", () => {
    perfectScore = true;
    console.log(`The player currently has a perfect score: ${perfectScore}`);
    const selectedCategory = categorySelect.value;
    currentWords = getRandomWords(wordsByCategory[selectedCategory], 5);
    currentWordIndex = 0;
    correctAnswers = 0;
    feedbackElement.textContent = "";
    document.getElementById("category-container").style.display = "none";
    document.getElementById("computer-word").style.display = "block";
    translationInput.style.display = "block";
    submitButton.style.display = "block";
    showNewWord();
});

function showNewWord() {
    if (currentWordIndex < currentWords.length) {
        spanishWordElement.textContent = currentWords[currentWordIndex].spanish;
        translationInput.value = "";
        translationInput.focus();
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userTranslation = translationInput.value.trim().toLowerCase();
    const correctTranslation = currentWords[currentWordIndex].english.toLowerCase();
    
    if (userTranslation === correctTranslation) {
        correctAnswers++;
        console.log(`User's current score is: ${correctAnswers}`);
        updateFeedback("Correct!");
        currentWordIndex++;
        showNewWord();
    } else {
        perfectScore = false;
        console.log(`The player currently has a perfect score: ${perfectScore}`);
        updateFeedback(`Incorrect! The correct translation is "${correctTranslation}".<br>Please type it correctly to proceed.`);
    }
}

function endGame() {
    document.getElementById("spanish-game").style.display = "none";
    finalMessage.innerHTML = `<h2>Well done!<br><br>You got ${correctAnswers}/${currentWords.length} correct!</h2>`;
    finalMessage.style.display = "block";
    document.getElementById("feedback").style.display = "block";
    feedbackElement.style.display = "none";
    console.log(`The player has a perfect score: ${perfectScore}`);
}

function updateFeedback(message) {
    feedbackElement.innerHTML = message;
    feedbackElement.style.display = message ? "block" : "none";
}



submitButton.addEventListener("click", checkAnswer);
translationInput.addEventListener("keypress", (submit) => {
    if (submit.key === "Enter") {
        checkAnswer();
    }
});


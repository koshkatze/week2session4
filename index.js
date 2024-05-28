const value = document.getElementById("message").textContent;
let result ="";

for (let i = 0; i < 10; i ++) {
    result += value + " ";
}

document.getElementById("message").textContent = result;

let count = 0;

const button = document.getElementById("click_me_button");
const counterSpan = document.getElementById("counter");
const resetButton = document.getElementById("reset_button")

console.log(counterSpan)

button.addEventListener("click", () => {
    count ++
    counterSpan.innerText = count
})

resetButton.addEventListener("click", () => {
    count = 0
    counterSpan.innerText = count
})
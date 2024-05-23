const value = document.getElementById("message").textContent;
let result ="";

for (let i = 0; i < 10; i ++) {
    result += value + " ";
}

document.getElementById("message").textContent = result;

let count = 0;

const button = document.getElementById("click_me_button");
const counterSpan = document.getElementById("counter");

console.log(counterSpan)

button.addEventListener("click", () => {
    count ++
    counterSpan.innerText = count
})


function reset() {
    number = 0;
    document.getElementById("counter").innerHTML = number;
}
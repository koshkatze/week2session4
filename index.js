document.write("Some text added by JavaScript")

const embeddedDiv = document.getElementById("about-me");

console.log(embeddedDiv)

embeddedDiv.innerText = "I am replacing what was there before"
embeddedDiv.append("Hello World")

console.log(embeddedDiv.textContent)
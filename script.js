const poemLines = ["I", "like", "the way", "that when you", "tilt", "poems", "on their side", "they", "look like", "miniature", "cities", "from", "a long way", "away",".", "Skyscrapers", "made out", "of", "words", "*."];
const poemContainer = document.querySelector(".poem-skyline");

poemLines.forEach(line => {
    const building = document.createElement("span");
    building.classList.add("building");
    building.textContent = line;
    poemContainer.appendChild(building);
});

const sourceEl = document.querySelector(".source");
const sourceText = "* Matt Haig - How to Stop Time, 2017";
sourceEl.textContent = sourceText;
sourceEl.dataset.text = sourceText;
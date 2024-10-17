const visitsDisplay = document.querySelector("#visitsDisplay");

const daysDisplay = document.querySelector("#daysDisplay")
const msToDays = 84600000;
const theDateToday = new Date();
const today = Date.now()
const storedDate = localStorage.getItem("storedDate");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = `Number of visits: ${numVisits}`;
} else {
    visitsDisplay.textContent = "This is your first visit. Welcome!"
}

numVisits++;

if ((storedDate/msToDays).toFixed(0) < (today/msToDays).toFixed(0) + 1) {
    daysDisplay.textContent = "Back so soon! Awesome!"
} else {
    daysDisplay.textContent = "Welcome! Let us know if you have any questions."
}

localStorage.setItem("numVisits-ls", numVisits);

localStorage.setItem("storedDate", today);
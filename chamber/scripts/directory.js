const url = "https://santichapa.github.io/wdd231/chamber/data/members.json";
const cards = document.getElementById("cards");
const contributorsCard = document.querySelector("#contributors");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
    displayGoldMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach(m => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const image = document.createElement("img");
        const info = document.createElement("div");
        
        
        info.textContent = `📞${m.phone} ✉️${m.email} | 📍${m.address}`
        name.textContent = m.name

        image.setAttribute("src", m.img);
        image.setAttribute("alt", `The brand icon of ${m.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "auto");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(info);
        cards?.appendChild(card);
    });
}


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

listButton?.addEventListener("click", () => {
    cards.classList.add("list");
});

gridButton?.addEventListener("click", () => {
    cards.classList.remove("list");
});

//========== DISPLAY GOLD MEMBERS ==========

// function displayGoldMembers(members) {
//     const goldMembers = shuffle(members)

//     goldMembers.forEach(m => {
//         if (m.memberlevel === "Gold") {
//             const card = document.createElement("section");
//             const name = document.createElement("h4");
//             const image = document.createElement("img");
//             const info = document.createElement("div");
            
            
//             info.textContent = `📞${m.phone} ✉️${m.email} | 📍${m.address}`
//             name.textContent = m.name

//             image.setAttribute("src", m.img);
//             image.setAttribute("alt", `The brand icon of ${m.name}`);
//             image.setAttribute("loading", "lazy");
//             image.setAttribute("width", "100");
//             image.setAttribute("height", "auto");

//             card.appendChild(name);
//             card.appendChild(image);
//             card.appendChild(info);
//             contributorsCard?.appendChild(card);
//         } 
//     });
// }

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
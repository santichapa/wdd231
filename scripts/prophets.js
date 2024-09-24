const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets); // to check the data 
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(p => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");
        const ordinalNum = getOrdinal(p.order)

        fullName.textContent = `${p.name} ${p.lastname}`;
        birthDate.textContent = `Birth Date: ${p.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${p.birthplace}`

        portrait.setAttribute("src", p.imageurl);
        portrait.setAttribute("alt", `A portrait of ${p.name} ${p.lastname} - ${ordinalNum} Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "300");
        portrait.setAttribute("height", "auto");
        
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

function getOrdinal(num) {
    // Suffix for numbers ending in 1 (except 11)
    if (num % 10 == 1 && num % 100 != 11) {
      return num + "st";
    }
    // Suffix for numbers ending in 2 (except 12)  
    else if (num % 10 == 2 && num % 100 != 12) {
      return num + "nd"; 
    }
    // Suffix for numbers ending in 3 (except 13)
    else if (num % 10 == 3 && num % 100 != 13) {
      return num + "rd";  
    }
    // Default suffix for any other number
    return num + "th";
  
  }

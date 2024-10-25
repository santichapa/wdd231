const tournamentSelect = document.querySelector("#tournament");
const cardsElement = document.getElementById("cards");
const eventList = document.querySelector("#eventlist");
const fieldList = document.querySelector("#fieldlist");

const tournaments = [
    {
      id: "st-1234",
      name: "Thunderball Cup",
      datestart: "May 31 2024",
      dateend: "June 28 2024",
      numteams: 8
    },
    {
      id: "st-1235",
      name: "The Golden Net Championship",
      datestart: "May 31 2024",
      dateend: "June 21 2024",
      numteams: 6
    },
    {
      id: "st-1236",
      name: "Spikin' It Classic",
      datestart: "May 31 2024",
      dateend: "July 14 2024",
      numteams: 12
    },
    {
      id: "st-1237",
      name: "Volleymania",
      datestart: "May 31 2024",
      dateend: "June 12 2024",
      numteams: 4
    },
    {
      id: "st-1238",
      name: "Summer Volleyball",
      datestart: "Dec 28 2024",
      dateend: "Feb 14 2025",
      numteams: 8
    }
  ];

  const fields = [
    {
      name: "Belgrano Stadium",
      openhours: "Mon - Fri 19:00 - 23:30 PM",
      adress: "Frias 279, temperley",
      phone: "1173667500",
      averagerating: 4.8,
      ages: "all ages",
      imgurl: "images/courts/stadium1.webp"
    },
    {
      name: "Lomas Stadium",
      openhours: "Mon - Fri 19:00 - 23:30 PM",
      adress: "Molina Arrotea 5003, Lomas de Zamora",
      phone: "1173667501",
      averagerating: 4.7,
      ages: "all ages",
      imgurl: "images/courts/stadium2.webp"
    },
    {
      name: "Lomas Park",
      openhours: "Mon - Fri 19:00 - 23:30 PM",
      adress: "Frias 279, temperley",
      phone: "1173667502",
      averagerating: 4.5,
      ages: "all ages",
      imgurl: "images/courts/unroofed1.webp"
    },
    {
      name: "Los Andes Gymnasium",
      openhours: "Mon - Fri 19:00 - 23:30 PM",
      adress: "Frias 279, temperley",
      phone: "1173667503",
      averagerating: 4.1,
      ages: "all ages",
      imgurl: "images/courts/stadium3.webp"
    },
    {
      name: "Banfield 2",
      openhours: "Mon - Fri 19:00 - 23:30 PM",
      adress: "Frias 279, temperley",
      phone: "1173667504",
      averagerating: 3.9,
      ages: "all ages",
      imgurl: "images/courts/unroofed2.webp"
    },
    {
        name: "Colon Walk Court",
        openhours: "Mon - Fri 19:00 - 23:30 PM",
        adress: "Frias 279, temperley",
        phone: "1173667505",
        averagerating: 3.9,
        ages: "all ages",
        imgurl: "images/courts/unroofed2.webp"
    }
];

function createTournamentSelectList() {
  tournaments.forEach(t => {
    optElement = document.createElement("option");
    optElement.setAttribute("value", t.id);
    optElement.innerText = t.name

    tournamentSelect?.appendChild(optElement);
  });
}

createTournamentSelectList();

function createFieldCards() {
  fields.forEach(f => {
    if (f.averagerating > 4.3){
      const card = document.createElement("section");
      card.classList.add("card");
      const title = document.createElement("h3");
      title.innerText = f.name;
      card.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", f.imgurl);
      img.setAttribute("alt", "A volleyball court");
      img.setAttribute("width", "500");
      img.setAttribute("height", "500");
      card.appendChild(img);
      
      const desc = document.createElement("div");
      desc.innerHTML = `
      <p>🕒${f.openhours}</p>
      <p>📍${f.adress}</p>
      <p>📞${f.phone}</p>
      <p>${f.averagerating}⭐</p>
      <p>${f.ages}</p>`
      card.appendChild(desc);

      cardsElement?.appendChild(card)
    }
  });
}

createFieldCards();

function createEventsTable() {
  tournaments.forEach(t => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const code = document.createElement("td");
    const datestart = document.createElement("td");
    const dateend = document.createElement("td");
    const numteams = document.createElement("td");

    header.innerText = t.name;
    code.innerText = t.id;
    datestart.innerText = t.datestart;
    dateend.innerText = t.dateend;
    numteams.innerText = t.numteams;


    row.appendChild(header);
    row.appendChild(code);
    row.appendChild(datestart);
    row.appendChild(dateend);
    row.appendChild(numteams);

    eventList?.appendChild(row);
  });
}

createEventsTable()

function createFieldsTable() {
  fields.forEach(f => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const openhours = document.createElement("td");
    const address = document.createElement("td");
    const phone = document.createElement("td");
    const rating = document.createElement("td");
    const ages = document.createElement("td");

    header.innerText = f.name;
    openhours.innerText = f.openhours;
    address.innerText = f.adress;
    phone.innerText = f.phone;
    rating.innerText = f.averagerating;
    ages.innerText = f.ages;


    row.appendChild(header);
    row.appendChild(openhours);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(rating);
    row.appendChild(ages);
    
    fieldList?.appendChild(row);
  });
}

createFieldsTable();
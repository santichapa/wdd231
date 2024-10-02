const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=91519d5aa42acec2b341bb8015df57ef";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing
            displayResults(data);
        } else {
            throw Error(await response.text()); 
        }    
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed()} &degF`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc.toUpperCase();

    if (data.weather.length > 1) {
        data.weather.forEach(w => {
            const fig = document.createElement("figure");
            const caption = document.createElement("figcaption");
            const icon = document.createElement("img");
            
            icon.setAttribute("src", `https://openweathermap.org/img/wn/${w.icon}.png`);
            let desc = w.description;
            icon.setAttribute("alt", desc)
            caption.textContent = desc.toUpperCase();

            fig.appendChild(icon);
            fig.appendChild(caption);
            document.querySelector("main").appendChild(fig);
        });
    }
}
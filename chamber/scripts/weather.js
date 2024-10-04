const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const windspeed = document.querySelector("#windspeed");
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=-34.76&lon=-58.43&units=metric&appid=3a9567149b9ba06b62251564ce5a7c07";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-34.76&lon=-58.43&units=metric&appid=3a9567149b9ba06b62251564ce5a7c07"

async function weatherFetch() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing
            displayWeather(data);
        } else {
            throw Error(await response.text()); 
        }    
    } catch (error) {
        console.log(error)
    }
}

weatherFetch();

async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.list); // testing
            displayForecast(data.list);
        } else {
            throw Error(await response.text()); 
        }    
    } catch (error) {
        console.log(error)
    }
}

forecastFetch();

function displayWeather(data) {
    currentTemp.innerHTML = data.main.temp.toFixed();
    windspeed.innerHTML = data.wind.speed;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    let desc = toTitleCase(data.weather[0].description);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    
    const wc = document.querySelector("#windchill");
    if (data.main.temp < 20) {
        wc.innerHTML = calculateWindchill(data.main.temp, data.wind.speed)
    } else {
        wc.innerHTML = NaN
    }

    // if (data.weather.length > 1) {
    //     data.weather.forEach(w => {
    //         const fig = document.createElement("figure");
    //         const caption = document.createElement("figcaption");
    //         const icon = document.createElement("img");
            
    //         icon.setAttribute("src", `https://openweathermap.org/img/wn/${w.icon}.png`);
    //         let desc = w.description;
    //         icon.setAttribute("alt", desc)
    //         caption.textContent = desc.toUpperCase();

    //         fig.appendChild(icon);
    //         fig.appendChild(caption);
    //         document.querySelector("main").appendChild(fig);
    //     });
    // }
}

function displayForecast(data) {
    for (let i = 0; i < 17; i += 8) {
        const day = data[i];

        const fig = document.createElement("figure");
        const caption = document.createElement("figcaption");
        const icon = document.createElement("img");
        
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`);
        let desc = toTitleCase(day.weather[0].description);
        icon.setAttribute("alt", desc)
        caption.textContent = `${getDayOfWeek(i/8)}, ${day.main.temp.toFixed()}° C, ${desc}`;
    
        const li = document.createElement("li");
        fig.appendChild(icon);
        fig.appendChild(caption);
        li.appendChild(fig);
        document.querySelector("#display-3d-forecast").appendChild(li);  
    }
//     data.forEach(day => {
//         const fig = document.createElement("figure");
//         const caption = document.createElement("figcaption");
//         const icon = document.createElement("img");
//         let timems = Date(day.dt_txt)
        
//         icon.setAttribute("src", `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`);
//         let desc = day.weather[0].description;
//         icon.setAttribute("alt", desc)
//         caption.textContent = `${getDayOfWeek(timems)}, ${day.main.temp.toFixed(1)}° C, ${desc}`;
    
//         const div = document.createElement("div");
//         fig.appendChild(icon);
//         fig.appendChild(caption);
//         div.appendChild(fig);
//         document.querySelector("#display-forecast").appendChild(div);

//         console.log(day.dt)
//     });
}

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return weekdays[date];
  }

  const wc = document.querySelector("#windchill");



function calculateWindchill(temp, wind) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
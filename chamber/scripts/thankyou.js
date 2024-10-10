const currentURL = window.location.href
const everything = currentURL.split("?");

let formData = everything[1].split("&");

function show(cup) {
    formData.forEach((element) => {
        if(element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@");
        }
    })
    return(result)
}

// document.querySelector("#timestamp").value = new Date().toISOString();

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
    <p>Application for <strong>${show("fname")} ${show("lname")}</strong></p>
    <p><strong>Position:</strong> ${show("position")}</p>
    <p><strong>Phone:</strong> ${show("phone")}</p>
    <p><strong>Email:</strong> <a href="mailto:${show("email")}">${show("email")}</a></p>
    <p><strong>Business/Organization's Name:</strong> ${show("business")}</p>
    <p><strong>Membership Level:</strong> ${show("mlevel")}</p>
    <p><strong>Business/Organization's Description:</strong> ${show("description").replaceAll("+", " ")}</p>
    <p>Applied on ${show("timestamp").replaceAll("%2F", "/").replaceAll("+", " ").replaceAll("%3A", ":").replace("%2C", ",")}</p>
`
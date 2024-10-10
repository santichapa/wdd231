document.getElementById("currentyear").innerText = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

document.querySelector("#timestamp").value = new Date().toLocaleString();
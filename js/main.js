document.getElementById("first-card").onclick = function() {
    let content = document.getElementById("first-card").lastElementChild.getElementsByTagName('p')[0];
    let info = document.getElementById("first-card").lastElementChild.getElementsByTagName('span')[0];

    if(content.style.display === "block") {
        content.style.display = "none";
        info.innerHTML = "+ info";
    }
    else {
        content.style.display = "block";
        info.innerHTML = "- info";
    }
}

document.getElementById("second-card").onclick = function() {
    let content = document.getElementById("second-card").lastElementChild.getElementsByTagName('p')[0];
    let info = document.getElementById("second-card").lastElementChild.getElementsByTagName('span')[0];

    if(content.style.display === "block") {
        content.style.display = "none";
        info.innerHTML = "+ info";
    }
    else {
        content.style.display = "block";
        info.innerHTML = "- info";
    }
}

document.getElementById("third-card").onclick = function() {
    let content = document.getElementById("third-card").lastElementChild.getElementsByTagName('p')[0];
    let info = document.getElementById("third-card").lastElementChild.getElementsByTagName('span')[0];

    if(content.style.display === "block") {
        content.style.display = "none";
        info.innerHTML = "+ info";
    }
    else {
        content.style.display = "block";
        info.innerHTML = "- info";
    }
}

document.getElementById("fourth-card").onclick = function() {
    let content = document.getElementById("fourth-card").lastElementChild.getElementsByTagName('p')[0];
    let info = document.getElementById("fourth-card").lastElementChild.getElementsByTagName('span')[0];

    if(content.style.display === "block") {
        content.style.display = "none";
        info.innerHTML = "+ info";
    }
    else {
        content.style.display = "block";
        info.innerHTML = "- info";
    }
}

document.getElementById("fifth-card").onclick = function() {
    let content = document.getElementById("fifth-card").lastElementChild.getElementsByTagName('p')[0];
    let info = document.getElementById("fifth-card").lastElementChild.getElementsByTagName('span')[0];

    if(content.style.display === "block") {
        content.style.display = "none";
        info.innerHTML = "+ info";
    }
    else {
        content.style.display = "block";
        info.innerHTML = "- info";
    }}
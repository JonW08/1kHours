
function l_bar() {
    let x = Number(localStorage.getItem("Hours")) || 0;
    document.getElementById("test").innerHTML = "You have completed " + x + " hours";
    document.getElementById("progress-bar").style.width = x/10 + "%";
}

function Progress() {
    let x = Number(localStorage.getItem("Hours")) || 0;
    x += 1;
    if (x > 1000) {
    document.getElementById("test").innerHTML = "You have completed 1000 hours, you are a pro!";
    
    }
    localStorage.setItem("Hours", x);
    document.getElementById("progress-bar").style.width = x/10 + "%";
    document.getElementById("test").innerHTML = "You have completed " + x + " hours";
}
// Main.js
// Aatypic
// Highlight menu by replacing class tag active.

var btnContainer = document.getElementById("nav-list");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })
}

console.log(btns);
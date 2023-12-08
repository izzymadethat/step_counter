const upButton = document.getElementById("upButton")
const downButton = document.getElementById("downButton")
const counter = document.getElementById("counter")
const warningMsg = document.getElementsByClassName("warningMsg")[0]

counter.innerText = 0;

function increaseCount() {
    if (!warningMsg.classList.contains("hidden")) {
        warningMsg.classList.add("hidden");
    }
    counter.innerText++;
}

function decreaseCount() {
    if (counter.innerText <= 0) {
        // window.alert("Count cannot be less than 0");
        warningMsg.classList.remove("hidden");
        setTimeout(function (){warningMsg.classList.add("hidden");}, 2000);
    } else  {
        counter.innerText--;
    }
}
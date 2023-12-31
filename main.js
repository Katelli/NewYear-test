const newYear = new Date("2024-01-01T00:00:01").getTime()

let x = setInterval(function(){
    let element = document.body
    let now = Date.now()
    let difference = newYear - now

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector("#timer").textContent = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s"

    if (hours <5) {
        element.classList.add("night-mode")
    }
    
    if (difference = 0) {
        clearInterval(x)
        document.querySelector("#timer").textContent = "Happy New Year!";
        document.querySelector("#countdown").style.display = "none"
        document.querySelector("#fireworks1").style.display = "none"
        document.querySelector("#fireworks2").style.display = "none"
        document.querySelector("#fireworks3").style.display = "none"
        document.querySelector("#fireworks4").style.display = "none"
    }    
}, 1000)

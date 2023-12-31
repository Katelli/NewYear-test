const newYear = new Date("2024-01-01T00:00:01").getTime()
let now = Date.now()

let x = setInterval(function(){
    let element = document.body
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
        document.querySelector("#timer").textContent = "Happy New Year!"
    }    
}, 1000)
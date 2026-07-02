let upBtn = document.querySelector(".btn")
let night = document.querySelector(".night")
let morning = document.querySelector(".morning")

window.onscroll = function() {
    if (window.scrollY >= 200) {
        upBtn.style.display = "block"
    }
    else {
        upBtn.style.display = "none"
    }
}

upBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

let currentTheme = localStorage.getItem('theme')

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode")
}

night.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")
})
morning.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")
})


// night.onclick = function() {
//     night.style.backgroundColor = "white"
//     morning.style.backgroundColor = "white"
//     night.style.color = "black"
//     morning.style.color = "black"
//     // gym.style.backgroundColor = "black"
//     // gym2.style.backgroundColor = "black"
//     // gym.style.color = "white"
//     // gym2.style.color = "white"
//     // all.style.backgroundColor = "black"
//     // all.style.color = "white"
// }

// morning.onclick = function() {
//     night.style.backgroundColor = "black"
//     morning.style.backgroundColor = "black"
//     night.style.color = "white"
//     morning.style.color = "white"
//     // gym.style.backgroundColor = "white"
//     // gym2.style.backgroundColor = "white"
//     // gym.style.color = "black"
//     // gym2.style.color = "black"
//     // all.style.backgroundColor = "white"
//     // all.style.color = "black"
// }
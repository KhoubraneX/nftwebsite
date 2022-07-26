// preloder
window.addEventListener("load", () => {
    let preloder = document.querySelector(".preloder")
    preloder.style.opacity = "0"
    setTimeout(() => {
        document.querySelector(".preloder").remove()
        document.body.classList.remove("overflowBody")
        counterDown(2000)
    }, 600)
})

// counter
let counterSec = document.querySelectorAll("p.counter span")
function counterDown(time) {
    counterSec.forEach((e) => {
        let dataGoal = e.dataset.count
        setInterval(() => {
            if (e.textContent != dataGoal) {
                e.textContent++
            }
        }, time / dataGoal)
    })
}

// list-pop 

let btnPop = document.querySelector(".list-btn")
let popList = document.querySelector(".list-pop")
let popClose = document.querySelector(".list-btn-close")

btnPop.addEventListener("click", () => {
    popList.setAttribute("style", "transform: translateX(0);")
    document.body.classList.add("overflowBody")
})

popClose.addEventListener("click", () => {
    popList.setAttribute("style", "transform: translateX(-100%);")
    document.body.classList.remove("overflowBody")
})

// to top 
let btnTop = document.querySelector(".to-top")
window.addEventListener("scroll", (e) => {
    if (window.scrollY > window.innerHeight) {
        btnTop.style.display = "block"
    } else {
        btnTop.style.display = "none"
    }
})

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// timerDown

let timerDown = new Date("dec 31 2022 23:59:59").getTime()
let hoursSec = document.querySelectorAll(".hour")
let minutesSec = document.querySelectorAll(".min")
let secondeSec = document.querySelectorAll(".sec")
let counter = setInterval(() => {

    let dateNow = new Date().getTime()
    let dateDef = timerDown - dateNow
    let hours = Math.floor(dateDef % (1000 * 60 * 60 * 24) / 1000 / 60 / 60)
    let minutes = Math.floor(dateDef % (1000 * 60 * 60) / (1000 * 60))
    let secound = Math.floor(dateDef % (1000 * 60) / 1000)

    hoursSec.forEach(e => e.innerHTML = hours < 10 ? `0${hours}` : hours)
    minutesSec.forEach(e => e.innerHTML = minutes < 10 ? `0${minutes}` : minutes)
    secondeSec.forEach(e => e.innerHTML = secound < 10 ? `0${secound}` : secound)

    if (dateDef < 0) {
        clearInterval(counter)
        document.querySelectorAll('.time').forEach(e => e.innerHTML = "It's over")
    }

}, 1000);


// connect wallet effect

let conectWallet = document.querySelector(".conect-desc")
let f = document.querySelectorAll(".card-wallet")
let fimg = document.querySelectorAll(".card-wallet + img")

window.addEventListener("scroll", () => {
    let heightBody = window.innerHeight
    let point = 150
    let topSec = conectWallet.getBoundingClientRect().top
    if (heightBody > topSec - point) {
        f.forEach(e =>e.classList.add("pop"))
        fimg.forEach(e => e.classList.add("pop"))
    }
})

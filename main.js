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
        f.forEach(e => e.classList.add("pop"))
        fimg.forEach(e => e.classList.add("pop"))
    }
})


// first slike
function firstSlike() {
    let cont = document.querySelector(".main-nft-sec")

    let widthCont = getComputedStyle(cont).maxWidth

    let cardN = document.querySelectorAll(".card-nft")

    let widthCradN = getComputedStyle(cardN[0]).width

    let marginCardN = (parseInt(widthCont) - (parseInt(widthCradN) * 3)) / 6

    cardN.forEach(e => e.setAttribute("style", `margin:0 ${marginCardN}px;`))

    let btnNext = document.querySelector(".btn-slider .next")
    let btnPre = document.querySelector(".btn-slider .pre")
    let sliderSlike = document.querySelector(".slider")

    btnNext.addEventListener("click", function () {
        sliderSlike.setAttribute("style", `transform: translateX(-${widthCont});`)
        this.classList.add('clickOff')
        btnPre.classList.add('clickOn')
        this.classList.remove('clickOn')
        btnPre.classList.remove('clickOff')
    })

    btnPre.addEventListener("click", function () {
        sliderSlike.setAttribute("style", `transform: translateX(0px);`)
        this.classList.add('clickOff')
        btnNext.classList.add('clickOn')
        this.classList.remove('clickOn')
        btnNext.classList.remove('clickOff')
    })
}
firstSlike()

//  seconde slike
function secondeSlike() {
    let cont = document.querySelector(".main-nft-sec")

    let widthCont = getComputedStyle(cont).maxWidth

    let cardColl = document.querySelectorAll(".card-coll")
    let widthCradColl = getComputedStyle(cardColl[0]).width
    let marginCardColl = (parseInt(widthCont) - (parseInt(widthCradColl) * 3)) / 6

    cardColl.forEach(e => e.setAttribute("style", `margin:0 ${marginCardColl}px;`))

    let btnNextColl = document.querySelector(".btn-slider-coll .next")
    let btnPreColl = document.querySelector(".btn-slider-coll .pre")
    let sliderSlikeColl = document.querySelector(".slider-coll")

    btnNextColl.addEventListener("click", function () {
        sliderSlikeColl.setAttribute("style", `transform: translateX(-${widthCont});`)
        this.style.display = "none"
        btnPreColl.style.display = "block"
    })

    btnPreColl.addEventListener("click", function () {
        sliderSlikeColl.setAttribute("style", `transform: translateX(0px);`)
        this.style.display = "none"
        btnNextColl.style.display = "block"
    })
}
secondeSlike()

// check size of dvice and execute slike
window.addEventListener('resize', function(){
    firstSlike()
    secondeSlike()
});
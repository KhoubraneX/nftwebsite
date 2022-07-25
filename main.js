window.addEventListener("load" , ()=> {
    let preloder = document.querySelector(".preloder")
    preloder.style.opacity = "0"
    setTimeout(()=>{
        document.querySelector(".preloder").remove()
        document.body.classList.remove("overflowBody")
        counterDown(2000)
    },600)
})

// counter
let counterSec = document.querySelectorAll("p.counter span")
function counterDown(time) {
            counterSec.forEach((e)=>{
                let dataGoal =  e.dataset.count
        setInterval(()=>{
            if (e.textContent != dataGoal){
                e.textContent++
            }
        },time / dataGoal)
    })
}

// list-pop 

let btnPop = document.querySelector(".list-btn")
let popList = document.querySelector(".list-pop")
let popClose = document.querySelector(".list-btn-close")

btnPop.addEventListener("click" , ()=> {
    popList.setAttribute("style" , "transform: translateX(0);")
    document.body.classList.add("overflowBody")
})

popClose.addEventListener("click" , ()=> {
    popList.setAttribute("style" , "transform: translateX(-100%);")
    document.body.classList.remove("overflowBody")
})

// to top 
let btnTop = document.querySelector(".to-top")
window.addEventListener("scroll" , (e)=>{
    if (window.scrollY > window.innerHeight) {
        btnTop.style.display = "block"
    }else {
        btnTop.style.display = "none"
    }
})

btnTop.addEventListener("click" , ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

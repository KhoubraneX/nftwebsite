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
counterDown(2000)

window.addEventListener("load" , ()=> {
    let preloder = document.querySelector(".preloder")
    preloder.style.opacity = "0"
    setTimeout(()=>{
        document.querySelector(".preloder").remove()
    },600)
    document.body.classList.remove("overflowBody")
})
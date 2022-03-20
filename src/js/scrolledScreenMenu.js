let downHeader = document.querySelector(".down-header")
let boxUser = document.querySelector(".user")

window.addEventListener("scroll", changeMenu)

function changeMenu(){
    if(scrollY !== 0){
        downHeader.classList.add("scrolled")
        boxUser.classList.add("none")
    }else{
        downHeader.classList.remove("scrolled")
        setTimeout(()=>{
            boxUser.classList.remove("none")
        },200)
        
    }
}
//Event
window.addEventListener("scroll", changeMenu)

//This function moves the search bar
function changeMenu(){
    let downHeader = document.querySelector(".down-header")
    let boxUser = document.querySelector(".user")
    let topHeader = document.querySelector(".top-header")

    if(scrollY !== 0){
        downHeader.classList.add("scrolled")
        boxUser.classList.add("none")
        topHeader.style.opacity = "0"
    }else{
        downHeader.classList.remove("scrolled")
        topHeader.style.opacity = "1"
        setTimeout(()=> boxUser.classList.remove("none") ,200)

        
    }
}
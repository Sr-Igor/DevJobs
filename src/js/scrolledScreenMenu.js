//Event
window.addEventListener("scroll", changeMenu)

//This function moves the search bar
function changeMenu(){
    let downHeader = document.querySelector(".down-header")
    let boxUser = document.querySelector(".user")

    if(scrollY !== 0){
        downHeader.classList.add("scrolled")
        boxUser.classList.add("none")
    }else{
        downHeader.classList.remove("scrolled")
        setTimeout(()=> boxUser.classList.remove("none") ,200)
        
    }
}
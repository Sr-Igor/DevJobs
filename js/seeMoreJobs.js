//This variable controls the number of vacancies on the home screen
let currentPage = 6

///This function makes the button click available
function availableSeeMore(){
    let btnSeeMore = document.querySelector(".btn-see-more-jobs")
    btnSeeMore.addEventListener("click", loadMoreJobs)
    
}

//This function loads more slots on the home screen and disables the button at the end of them
function loadMoreJobs(){
    let btnSeeMore = document.querySelector(".btn-see-more-jobs")
    let vacanciesArray = JSON.parse(localStorage.getItem("vacanciesArray"))
    let noReloadNumber = 6 + currentPage
    if(vacanciesArray.length <= noReloadNumber){
        callVacancies(vacanciesArray.length)
        btnSeeMore.setAttribute("disabled", true)
        btnSeeMore.classList.add("disabled")
    }else{
        currentPage = noReloadNumber
        callVacancies(noReloadNumber)
    }
}

availableSeeMore()
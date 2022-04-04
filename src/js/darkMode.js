let lightSwitch = document.querySelector(".light-switch")
let activedDark = ""

function callDarkHome(){
    let lightSwitch = document.querySelector(".light-switch")
    lightSwitch.addEventListener("click", ()=>{
        trueDark(1)
    })

    let localStorageNull = localStorage.getItem("activedDark")
    activedDark =  localStorageNull == null ? false : JSON.parse(localStorage.getItem("activedDark"))
    activedDark == true ? changeModeHome(true): null
}

function callDarkSubs(){
    let lightSwitch = document.querySelector(".light-switch")
    lightSwitch.addEventListener("click", ()=>{
        trueDark(2)
    })
}

function callDarkProfile(){
    let lightSwitch = document.querySelector(".light-switch")
    lightSwitch.addEventListener("click", ()=>{
        trueDark(3)
    })
}

function trueDark(call){
    let lightSwitch = document.querySelector(".light-switch")
    switch(call){
        case 1:
            if(lightSwitch.classList.contains("dark")){
                activedDark = false
                changeModeHome(false)
            }else{
                activedDark = true
                changeModeHome(true)
            }
            break;
        case 2: 
            if(lightSwitch.classList.contains("dark")){
                activedDark = false
                changeModeSubs(false)
            }else{
                activedDark = true
                changeModeSubs(true)
            }
            break;
        case 3: 
            if(lightSwitch.classList.contains("dark")){
                activedDark = false
                changeModeProfile(false)
            }else{
                activedDark = true
                changeModeProfile(true)
            }
            break;
    }
    localStorage.setItem("activedDark", JSON.stringify(activedDark))
}

function changeModeHome(dark){
    let lightSwitch = document.querySelector(".light-switch")
    let body = document.querySelector("body")
    let boxBody = document.querySelectorAll(".box-body")
    let titleBox  = document.querySelectorAll(".title-job")
    let downHeader = document.querySelector(".down-header")
    let searchInput = document.querySelector(".form-search input")
    let states = document.querySelector(".form-search .states")

    if(dark == true || activedDark == true){
        
        lightSwitch.classList.add("dark")
        body.classList.add("dark-body")
        boxBody.forEach(item =>item.classList.add("dark-boxes"))
        titleBox.forEach(item =>item.classList.add("dark-titles"))
        downHeader.classList.add("dark-boxes")
        downHeader.classList.add("dark-titles")
        searchInput.classList.add("dark-boxes")
        states.classList.add("dark-boxes")
        states.classList.add("dark-titles")
    }else{
        lightSwitch.classList.remove("dark")
        body.classList.remove("dark-body")
        boxBody.forEach(item =>item.classList.remove("dark-boxes"))
        titleBox.forEach(item =>item.classList.remove("dark-titles"))
        downHeader.classList.remove("dark-boxes")
        downHeader.classList.remove("dark-titles")
        searchInput.classList.remove("dark-boxes")
        states.classList.remove("dark-boxes")
        states.classList.remove("dark-titles")
    }
}

function changeModeSubs(dark){
    let lightSwitch = document.querySelector(".light-switch")
    let body = document.querySelector("body")
    let titlesJobs = document.querySelectorAll(".container .h1")
    let boxVacancy = document.querySelector(".box-vagancys")
    let boxVacancyClosed = document.querySelector(".box-vagancys-closed")
    let vacancies = document.querySelectorAll(".vacancy")

    if(dark == true || activedDark == true){
        lightSwitch.classList.add("dark")
        body.classList.add("dark-body")
        titlesJobs.forEach(item =>item.classList.add("dark-title-subs"))
        boxVacancy.classList.add("dark-title-subs")
        boxVacancyClosed.classList.add("dark-title-subs")
        vacancies.forEach(item =>item.classList.add("dark-boxes"))
    }else{
        lightSwitch.classList.remove("dark")
        body.classList.remove("dark-body")
        titlesJobs.forEach(item =>item.classList.remove("dark-title-subs"))
        boxVacancy.classList.remove("dark-title-subs")
        boxVacancyClosed.classList.remove("dark-title-subs")
        vacancies.forEach(item =>item.classList.remove("dark-boxes"))
    }

}

function changeModeProfile(dark){
    let lightSwitch = document.querySelector(".light-switch")
    let body = document.querySelector("body")
    let titlePage = document.querySelector(".title-edit-profile")
    let UserName = document.querySelector(".company-title")
    let label = document.querySelectorAll("label")
    let titleSubsection = document.querySelector(".title-subsection")

    if(dark == true || activedDark == true){
        lightSwitch.classList.add("dark")
        body.classList.add("dark-body")
        titlePage.classList.add("dark-titles")
        UserName.classList.add("dark-titles")
        label.forEach(item =>item.classList.add("dark-titles"))
        titleSubsection.classList.add("dark-titles")
    }else{
        lightSwitch.classList.remove("dark")
        body.classList.remove("dark-body")
        titlePage.classList.remove("dark-titles")
        UserName.classList.remove("dark-titles")
        label.forEach(item =>item.classList.remove("dark-titles"))
        titleSubsection.classList.remove("dark-titles")
    }
}
callDarkHome()
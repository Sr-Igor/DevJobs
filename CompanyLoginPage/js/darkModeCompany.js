let lightSwitch = document.querySelector(".light-switch")
let body = document.querySelector("body")
let activedDarkCompanyCompany = ""

function callDarkHomeCompany(){
    let lightSwitch = document.querySelector(".light-switch")
    lightSwitch.addEventListener("click", ()=>{
        body.classList.add("transition-dark")
        trueDarkCompany(1)
    })

    let localStorageNull = localStorage.getItem("activedDarkCompany")
    activedDarkCompany =  localStorageNull == null ? false : JSON.parse(localStorage.getItem("activedDarkCompany"))
    activedDarkCompany == true ? changeModeHomeCompany(true): null
}

function callDarkSubsCompany(){
    let lightSwitch = document.querySelector(".light-switch")
    lightSwitch.addEventListener("click", ()=>{
        body.classList.add("transition-dark")
        trueDarkCompany(2)
    })

    let localStorageNull = localStorage.getItem("activedDarkCompany")
    activedDarkCompany =  localStorageNull == null ? false : JSON.parse(localStorage.getItem("activedDarkCompany"))
    activedDarkCompany == true ? changeModeSubsCompany(true): null
}

function callDarkProfileCompany(){

    let lightSwitch = document.querySelector(".light-switch")
    lightSwitch.addEventListener("click", ()=>{
        body.classList.add("transition-dark")
        trueDarkCompany(3)
    })

    let localStorageNull = localStorage.getItem("activedDarkCompany")
    activedDarkCompany =  localStorageNull == null ? false : JSON.parse(localStorage.getItem("activedDarkCompany"))
    activedDarkCompany == true ? changeModeProfileCompany(true): null
}

function trueDarkCompany(call){
    let lightSwitch = document.querySelector(".light-switch")
    switch(call){
        case 1:
            if(lightSwitch.classList.contains("dark")){
                activedDarkCompany = false
                changeModeHomeCompany(false)
            }else{
                activedDarkCompany = true
                changeModeHomeCompany(true)
            }
            break;
        case 2: 
            if(lightSwitch.classList.contains("dark")){
                activedDarkCompany = false
                changeModeSubsCompany(false)
            }else{
                activedDarkCompany = true
                changeModeSubsCompany(true)
            }
            break;
        case 3: 
            if(lightSwitch.classList.contains("dark")){
                activedDarkCompany = false
                changeModeProfileCompany(false)
            }else{
                activedDarkCompany = true
                changeModeProfileCompany(true)
            }
            break;
    }
    localStorage.setItem("activedDarkCompany", JSON.stringify(activedDarkCompany))
}

function changeModeHomeCompany(dark){
    let lightSwitch = document.querySelector(".light-switch")
    let body = document.querySelector("body")
    let titleRegister = document.querySelector(".title-register")
    let label = document.querySelectorAll("label")
    let titleSub = document.querySelector(".title-subsection")
    let terms = document.querySelector(".form-check-label")

    if(dark == true || activedDarkCompany == true){
       lightSwitch.classList.add("dark")
       body.classList.add("dark-body")
       titleRegister.classList.add("dark-titles")
       label.forEach(item => item.classList.add("dark-titles"))
       titleSub.classList.add("dark-titles")
       terms.classList.add("dark-titles")
       setTimeout(()=>body.classList.remove("transition-dark"),1000)
       
    }else{
        lightSwitch.classList.remove("dark")
        body.classList.remove("dark-body")
        titleRegister.classList.remove("dark-titles")
        label.forEach(item => item.classList.remove("dark-titles"))
        titleSub.classList.remove("dark-titles")
        terms.classList.remove("dark-titles")
    }
}

function changeModeSubsCompany(dark){
    let lightSwitch = document.querySelector(".light-switch")
    let body = document.querySelector("body")
    let titlePage= document.querySelectorAll(".h3")
    let boxBody = document.querySelectorAll(".box-body")
    let titleJob = document.querySelectorAll(".title-job")
    let emptyTextClose = document.querySelector(".box-jobs-finished")
    let emptyTextOpen = document.querySelector(".box-jobs")

    if(dark == true || activedDarkCompany == true){
        lightSwitch.classList.add("dark")
        body.classList.add("dark-body")
        titlePage.forEach(item => item.classList.add("dark-titles"))
        boxBody.forEach(item=> item.classList.add("dark-boxes"))
        titleJob.forEach(item=> item.classList.add("dark-titles"))
        emptyTextClose.classList.add("dark-titles")
        emptyTextOpen.classList.add("dark-titles")
        setTimeout(()=>body.classList.remove("transition-dark"),1000)
    }else{
        lightSwitch.classList.remove("dark")
        body.classList.remove("dark-body")
        titlePage.forEach(item => item.classList.remove("dark-titles"))
        boxBody.forEach(item=> item.classList.remove("dark-boxes"))
        titleJob.forEach(item=> item.classList.remove("dark-titles"))
        emptyTextClose.classList.remove("dark-titles")
        emptyTextOpen.classList.remove("dark-titles")
    }

}

function changeModeProfileCompany(dark){
    let lightSwitch = document.querySelector(".light-switch")
    let body = document.querySelector("body")
    let titleCreatJob = document.querySelector(".title-create-job")
    let companyTitle = document.querySelector(".company-title")
    let label = document.querySelectorAll("label")

    if(dark == true || activedDarkCompany == true){
        lightSwitch.classList.add("dark")
        body.classList.add("dark-body")
        titleCreatJob.classList.add("dark-titles")
        companyTitle.classList.remove("color-ct")
        companyTitle.classList.add("dark-titles")
        label.forEach(item => item.classList.add("dark-titles"))
        setTimeout(()=>body.classList.remove("transition-dark"),1000)
    }else{
        lightSwitch.classList.remove("dark")
        body.classList.remove("dark-body")
        titleCreatJob.classList.remove("dark-titles")
        companyTitle.classList.remove("dark-titles")
        label.forEach(item => item.classList.remove("dark-titles"))
    }
}
//Global Variables
let usersCompanyArray = ""
let vacanciesArray = ""
let vacanciesFinishedArray = ""
let usersRegisterArray = ""
let applayedVacanciesArray = ""


function updateLocalStorage(){

    localStorage.setItem("usersCompany", JSON.stringify(companys))
    localStorage.setItem("vacancies", JSON.stringify(vacancys))
    localStorage.setItem("vacanciesFinished", JSON.stringify(vacancysFinished))
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("applayedVacancies", JSON.stringify(vacancyId))
    
}

function callLocalStorage(){
        usersRegisterArray = JSON.parse(localStorage.getItem("users"))
        verifyAccount(usersRegisterArray)

        vacanciesArray = JSON.parse(localStorage.getItem("vacancies"))
        fillboxes(vacanciesArray)    
}

function callLocalStorageVacanciesUsers(){
    applayedVacanciesArray = JSON.parse(localStorage.getItem("applayedVacancies"))
    fillSubscriptions(userVacancyApply.id, applayedVacanciesArray)
    fillSubscriptionsClosed(userVacancyApply.id, applayedVacanciesArray)
}


function callLocalStorageCompany(){
    usersCompanyArray = JSON.parse(localStorage.getItem("usersCompany")) 
    verifyAccount(usersCompanyArray)

}

function callLocalStorageVacanciesCompany(){

    vacanciesFinishedArray = JSON.parse(localStorage.getItem("vacanciesFinished"))
    fillBoxesVacancyFinised(vacanciesFinishedArray)

    vacanciesArray = JSON.parse(localStorage.getItem("vacancies"))
    fillBoxesVacancyCreator(vacanciesArray)  
}


// Enter Users 
function additionalUsers(){
    let usersRegisterArray = localStorage.getItem("usersArray") == null ? [] : JSON.parse(localStorage.getItem("usersArray"))
    if(usersRegisterArray[0] == undefined){
        usersRegisterArray.push(...users)
    }
    updateUsers(usersRegisterArray)
}
function updateUsers(usersRegisterArray){
    localStorage.setItem("usersArray", JSON.stringify(usersRegisterArray))
}
function callUsers(){
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    verifyAccount(usersRegisterArray)
}
additionalUsers()
//-----------------------------------------------------------------------------------
//Apply for vacancy

function updateApplyeds(applayedsArray, unsubscrive = false){
    localStorage.setItem("usersApplayedsArray", JSON.stringify(applayedsArray)) 
    if(unsubscrive == true){
        callApplyeds()
    }
}

//Fill your Subscriptions
function callApplyeds(){
    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    fillSubscriptions(userVacancyApply.id, applayedsArray)
    fillSubscriptionsClosed(userVacancyApply.id, applayedsArray)
}

//Subscrive in vacancies
function callSendApplyeds(){
    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    console.log(applayedsArray)
    sendApplication(applayedsArray)
}

// Unsubscrive in vacancies
function callUnsubiscrive(){
    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    deleteSubs(applayedsArray)
}
//--------------------------------------------------------------------------------------------------------------------------------------------

//Fill inicial page 

function updateVacancies(){
    localStorage.setItem("vacanciesArray", JSON.stringify(vacanciesArray)) 
}

function callVacancies(){
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }
    fillboxes(vacanciesArray)

}

// Search for jobs 
function callSearchBoxes(){
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }
    searchJobs(vacanciesArray)
}
// fill back home
function callHome(){
    changeHomePage()
    callUsers()
    callVacancies()
}

//Edit Profile 
function callEditProfile(){
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    verifyFieldsEdit(usersRegisterArray)
}


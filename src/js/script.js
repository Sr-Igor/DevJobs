
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
    let vacanciesArrayFinished =  localStorage.getItem("vacanciesFinishedArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }

    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    fillSubscriptions(userVacancyApply.id, applayedsArray, vacanciesArray)
    fillSubscriptionsClosed(userVacancyApply.id, applayedsArray, vacanciesArrayFinished)
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

function updateVacancies(vacanciesArray){
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

//--------------------------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------

//Register New Users

function callNewUsers(){
    let usersRegisterArray = localStorage.getItem("usersArray") == null ? [] : JSON.parse(localStorage.getItem("usersArray"))
    if(usersRegisterArray[0] == undefined){
        usersRegisterArray.push(...users)
    }

    registerUser(usersRegisterArray)
}

//--------------------------------------------------------------------------------------------------------------------------------

//Create New Job 
function callCreateJob(){
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }
    createJob(vacanciesArray)
}

//Finished Vacancies 
function updateFinishedVacancies(vacanciesFinishedArray){
    localStorage.setItem("vacanciesFinishedArray", JSON.stringify(vacanciesFinishedArray))
}
 // Fill company vacancies closed
function callFinishedVacancies(){
    let vacanciesArrayFinished =  localStorage.getItem("vacanciesFinishedArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    fillBoxesVacancyFinised(vacanciesArrayFinished)
}
 // Fill company vacancies open
function callOpenVacancies(){
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }
    fillBoxesVacancyCreator(vacanciesArray)
}

function callClickCardOpenVacancy(){
    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    let vacanciesArrayFinished =  localStorage.getItem("vacanciesFinishedArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }
    let usersRegisterArray = localStorage.getItem("usersArray") == null ? [] : JSON.parse(localStorage.getItem("usersArray"))
    if(usersRegisterArray[0] == undefined){
        usersRegisterArray.push(...users)
    }
    searchCorrectBox(vacanciesArray, applayedsArray, usersRegisterArray, vacanciesArrayFinished)
}

function callClickCardCloseVacancy(){
    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    let vacanciesArray =  localStorage.getItem("vacanciesArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    let vacanciesArrayFinished =  localStorage.getItem("vacanciesFinishedArray") == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    if(vacanciesArray[0] == undefined){
        vacanciesArray.push(...vacancys)
    }
    let usersRegisterArray = localStorage.getItem("usersArray") == null ? [] : JSON.parse(localStorage.getItem("usersArray"))
    if(usersRegisterArray[0] == undefined){
        usersRegisterArray.push(...users)
    }
    searchCorrectBoxFinished(vacanciesArray, applayedsArray, usersRegisterArray, vacanciesArrayFinished)
}

//Edit profile Company
function callEditProfileCompany(){
    let companysArray =  localStorage.getItem("companysArray") == null ? [] : JSON.parse(localStorage.getItem("companysArray"))
    if(companysArray[0] == undefined){
        companysArray.push(...companys)
    }
    verifyFieldsEdit(companysArray)
}

function updateCompanysArray(companysArray){
    localStorage.setItem("companysArray", JSON.stringify(companysArray))
    console.log(companysArray)
}

// Verify account company 
function callVerifyAccountCompany(){
    let companysArray =  localStorage.getItem("companysArray") == null ? [] : JSON.parse(localStorage.getItem("companysArray"))
    if(companysArray[0] == undefined){
        companysArray.push(...companys)
    }
    verifyAccount(companysArray)
}


// Call create account company 

function callCreateAccountCompany(){
    let companysArray =  localStorage.getItem("companysArray") == null ? [] : JSON.parse(localStorage.getItem("companysArray"))
    if(companysArray[0] == undefined){
        companysArray.push(...companys)
    }
    verifyFields(companysArray)
}


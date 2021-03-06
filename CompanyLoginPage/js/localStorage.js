// LocalStorage Functions 

// This is an immediate function called when loading the homepage, to make the list of users available
(function additionalUsers(){
    let localStorageNull = localStorage.getItem("usersArray")
    let usersRegisterArray = localStorageNull == null ? [] : JSON.parse(localStorage.getItem("usersArray"))
    if(usersRegisterArray[0] == undefined){usersRegisterArray.push(...users)}
    updateUsers(usersRegisterArray)
})();

(function additionalVacancies(){ // This function adds manually created vacancies to simulate a database
    let localStorageNull = localStorage.getItem("vacanciesArray") 
    let vacanciesArray =  localStorageNull == null ? [] : JSON.parse(localStorage.getItem("vacanciesArray"))
    if(vacanciesArray[0] == undefined){vacanciesArray.push(...vacancies)}
    updateVacancies(vacanciesArray)
})();

(function additionalCompanies(){
    let localStorageNull = localStorage.getItem("companiesArray")
    let companiesArray =  localStorageNull == null ? [] : JSON.parse(localStorage.getItem("companiesArray"))
    if(companiesArray[0] == undefined){companiesArray.push(...companies)}
    updatecompaniesArray(companiesArray)
})()

//Upadate LocalStorage Functions 

function updateCurrentUser(cacheUserInfo){
    localStorage.setItem("cacheUserInfo", JSON.stringify(cacheUserInfo))
}
function updateUsers(usersRegisterArray){ // This function save registered Users
    localStorage.setItem("usersArray", JSON.stringify(usersRegisterArray))
};

function updateCurrentCompanyUser(currentCompany){
    localStorage.setItem("currentCompany", JSON.stringify(currentCompany))
}

function updatecompaniesArray(companiesArray){ // This function save registered Companies
    localStorage.setItem("companiesArray", JSON.stringify(companiesArray))
};

function updateVacancies(vacanciesArray){ // This function save availables vacancies (opened)
    localStorage.setItem("vacanciesArray", JSON.stringify(vacanciesArray))
};

function updateFinishedVacancies(vacanciesFinishedArray){ // This function save finisheds vacancies (closed)
    localStorage.setItem("vacanciesFinishedArray", JSON.stringify(vacanciesFinishedArray))
};

function updateApplyeds(applayedsArray, unsubscrive = false){ // This function saves user ids and applied vacancies
    localStorage.setItem("usersApplayedsArray", JSON.stringify(applayedsArray)) 
    if(unsubscrive == true){ // Used when called on the vacancies page to unsubscribe and refresh the page immediately
        callApplyeds()
    };
};

//USER PAGE 
//Inicial page 
function callVacancies(noReloadNumber){ // this function is called to fill the home page with available vacancies
    let vacanciesArray = JSON.parse(localStorage.getItem("vacanciesArray"))
    let inicialNumberVacancies = ""
    if (vacanciesArray.length < 6){
        inicialNumberVacancies = vacanciesArray.length
    }else{
        inicialNumberVacancies = 6
    }
    
    if(noReloadNumber){
        fillboxes(vacanciesArray, noReloadNumber)
    }else{
        fillboxes(vacanciesArray, inicialNumberVacancies)
    }
};
 
function callSearchBoxes(){ // This function is called to make the job search available
    let vacanciesArray = JSON.parse(localStorage.getItem("vacanciesArray"))
    searchJobs(vacanciesArray)
}

function callNewUsers(){ // This function is called in the registry of new users
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    registerUser(usersRegisterArray)
}

// User Page Call 
function callUsers(){ // This function is called when clicking login, passing the user array as a parameter
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    verifyAccount(usersRegisterArray)
}

function callApplyeds(){ // This function is called when clicking on "subscriptions", to fill the items on the page (open and closed positions)
    let vacanciesFinishedArrayNull = localStorage.getItem("vacanciesFinishedArray")
    let vacanciesArrayFinished =  vacanciesFinishedArrayNull == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    let usersApplayedsArrayNull = localStorage.getItem("usersApplayedsArray")
    let applayedsArray = usersApplayedsArrayNull == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    let vacanciesArray =  JSON.parse(localStorage.getItem("vacanciesArray"))
    let cacheUserInfo =  JSON.parse(localStorage.getItem("cacheUserInfo"))
    // these functions are called upon to fill vacancies on the application page. 
    // Receiving by parameter the id of the current user, the array of applied open and closed vacancies
    fillSubscriptions(cacheUserInfo[2].id, applayedsArray, vacanciesArray)
    fillSubscriptionsClosed(cacheUserInfo[2].id, applayedsArray, vacanciesArrayFinished)
};

function callSendApplyeds(){ // This function is called when executing the function of applying for a vacancy
    let localStorageNull = localStorage.getItem("usersApplayedsArray")
    let applayedsArray = localStorageNull == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    sendApplication(applayedsArray) // In the end of execution add the item to "applyedsArray"
};

function callUnsubiscrive(){ // This function is called to cancel a user subscription
    let localStorageNull = localStorage.getItem("usersApplayedsArray")
    let applayedsArray = localStorageNull == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    let cacheUserInfo =  JSON.parse(localStorage.getItem("cacheUserInfo"))
    deleteSubs(applayedsArray, cacheUserInfo[2]) // In the end of execution delete the item to "applyedsArray"
};

function callEditProfile(){ //This function is called to edit the user profile
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    let cacheUserInfo =  JSON.parse(localStorage.getItem("cacheUserInfo"))
    verifyFieldsEdit(usersRegisterArray, cacheUserInfo[2])
}

//COMPANY PAGE 
// login & Inicial Company Page
function callVerifyAccountCompany(){ // This function is called to verify the login of companies
    let companiesArray = JSON.parse(localStorage.getItem("companiesArray"))
    verifyAccount(companiesArray)
};

function callCreateAccountCompany(){ // This function is called to include include the new users in localSotrage
    let companiesArray =  localStorage.getItem("companiesArray") == null ? [] : JSON.parse(localStorage.getItem("companiesArray"))
    verifyFields(companiesArray)
};

function callCreateJob(){ // This function is called when adding a vacancy, to include the new job in localStorage
    let vacanciesArray = JSON.parse(localStorage.getItem("vacanciesArray"))
    createJob(vacanciesArray)
};

function callEditProfileCompany(){ // This function is called to edit profile and change new information in local storage
    let companiesArray = JSON.parse(localStorage.getItem("companiesArray"))
    verifyFieldsEdit(companiesArray)
};

// Vacancies Company Page 
function callOpenVacancies(){ // This function is called to fill open vacancies on the vacancies page
    let vacanciesArray = JSON.parse(localStorage.getItem("vacanciesArray"))
    let currentCompany = JSON.parse(localStorage.getItem("currentCompany"))
    fillBoxesVacancyCreator(vacanciesArray, currentCompany)
};

function callFinishedVacancies(){ // This vacancy is called to fill the closed vacancies on the vacancies page
    let localStorageNull = localStorage.getItem("vacanciesFinishedArray")
    let vacanciesArrayFinished = localStorageNull == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    let currentCompany = JSON.parse(localStorage.getItem("currentCompany"))
    fillBoxesVacancyFinised(vacanciesArrayFinished, currentCompany)
};

function callClickCardOpenInfoVacancy(){ // Fill in the information of open positions (when clicked)
    let vacanciesArray =  JSON.parse(localStorage.getItem("vacanciesArray"))
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))

    let usersApplayedsArrayNull = localStorage.getItem("usersApplayedsArray")
    let applayedsArray = usersApplayedsArrayNull == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))

    let vacanciesFinishedArray = localStorage.getItem("vacanciesFinishedArray")
    let vacanciesArrayFinished =  vacanciesFinishedArray == null ? [] : JSON.parse(localStorage.getItem("vacanciesFinishedArray"))
    
    let parametrsArray = {vacanciesArray, applayedsArray, usersRegisterArray, vacanciesArrayFinished}

    searchCorrectBox(parametrsArray)
};










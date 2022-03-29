
// Enter Users 
function updateUsers(){
    localStorage.setItem("usersArray", JSON.stringify(users))
}
function callUsers(){
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    verifyAccount(usersRegisterArray)
}
updateUsers()

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

function callUnsubiscrive(){
    let applayedsArray = localStorage.getItem("usersApplayedsArray") == null ? [] : JSON.parse(localStorage.getItem("usersApplayedsArray"))
    deleteSubs(applayedsArray)
}

(function AvailableCompanyLogin(){
    let logincompanies = document.querySelector('.login-companies')
    logincompanies.addEventListener("click", callVerifyAccountCompany)
})()

// Variable that stores the data of the current company
let = currentUserCompany = ""

//Functions
function verifyAccount(companiesArray){
    event.preventDefault()

    // Login fields
    let emailLogin  = document.querySelector(".email-login")
    let passwordLogin = document.querySelector(".password-login")

    // Login Infos
    let loginValid = false
    let usersLogin = []
    for (let i in companiesArray){
        usersLogin.push([companiesArray[i].email, companiesArray[i].password])
    }
    
    //Field verification
    for (let i = 0; i < usersLogin.length; i++){
        if(usersLogin[i][0] == emailLogin.value && usersLogin[i][1] == passwordLogin.value){
            loginValid = true
            break
        }else{
            loginValid = false
        }
    }

    if(loginValid == false){
        //If the login is invalid displays the error message
        let errorMessage = document.querySelector(".error-message-login")
        errorMessage.innerHTML = "Email or Password are incorrect"
        errorMessage.style.opacity = "1"
        setTimeout(()=> {
            errorMessage.innerHTML = ""
            errorMessage.style.opacity = "0"
        }, 3000)
    }else{

        //Saving data in global variable
        for (let i in companiesArray){
            if(companiesArray[i].email == emailLogin.value){
                currentCompany = companiesArray[i]
                updateCurrentCompanyUser(currentCompany)
                currentUserCompany = companiesArray[i]
            }
        }

        //if the login form is valid calls the function that changes the page
        window.location.href = "../CompanyProfilePage/ProfessionalUser.html";
    }
}


//Variables 
let loginValid = false

let emailLogin  = document.querySelector(".email-login")
let passwordLogin = document.querySelector(".password-login")
let loginCompanys = document.querySelector('.login-companys')

let usersLogin = []

let = currentUserCompany = ""


let errorMessage = document.querySelector(".error-message-login")
//Events 
loginCompanys.addEventListener("click", callVerifyAccountCompany)


//Functions

function verifyAccount(companysArray){
    event.preventDefault()


    for (let i in companysArray){
        usersLogin.push([companysArray[i].email, companysArray[i].password])
    }
    
    for (let i = 0; i < usersLogin.length; i++){
        if(usersLogin[i][0] == emailLogin.value && usersLogin[i][1] == passwordLogin.value){
            loginValid = true
            break
        }else{
            loginValid = false
        }
    }

    for (let i in companysArray){
        if(companysArray[i].email == emailLogin.value){
            currentUserCompany = companysArray[i]
        }
    }

    if(loginValid == false){
        errorMessage.style.display = "flex"
        setTimeout(()=> errorMessage.style.display = "none", 3000)
    }else{

        fillUserPageCompany() 
        
    }
}


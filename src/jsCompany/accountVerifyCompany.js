//Variables 
let loginValid = false

let emailLogin  = document.querySelector(".email-login")
let passwordLogin = document.querySelector(".password-login")
let loginCompanys = document.querySelector('.login-companys')

let usersLogin = []

let = currentUserCompany = ""


let errorMessage = document.querySelector(".error-message-login")
//Events 
loginCompanys.addEventListener("click", verifyAccount)


//Functions

function verifyAccount(e){
    e.preventDefault()


    for (let i in companys){
        usersLogin.push([companys[i].email, companys[i].password])
    }
    
    for (let i = 0; i < usersLogin.length; i++){
        if(usersLogin[i][0] == emailLogin.value && usersLogin[i][1] == passwordLogin.value){
            loginValid = true
            break
        }else{
            loginValid = false
        }
    }

    for (let i in companys){
        if(companys[i].email == emailLogin.value){
            currentUserCompany = companys[i]
        }
    }

    if(loginValid == false){
        errorMessage.style.display = "flex"
        setTimeout(()=> errorMessage.style.display = "none", 3000)
    }else{

        fillUserPageCompany() 
        
    }
}


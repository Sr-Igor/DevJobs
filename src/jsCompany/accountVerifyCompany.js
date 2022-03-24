//Variables 
let loginValid = false

let emailLogin  = document.querySelector(".email-login")
let passwordLogin = document.querySelector(".password-login")
let loginCompanys = document.querySelector('.login-companys')

let users = []

let = currentUserCompany = ""


let errorMessage = document.querySelector(".error-message-login")
//Events 
loginCompanys.addEventListener("click", verifyAccount)


//Functions

function verifyAccount(e){
    e.preventDefault()


    for (let i in companys){
        users.push([companys[i].email, companys[i].password])
    }
    
    for (let i = 0; i < users.length; i++){
        if(users[i][0] == emailLogin.value && users[i][1] == passwordLogin.value){
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


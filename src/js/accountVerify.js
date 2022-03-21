//Variables 
let loginButton = document.getElementById("loginButton") 
let userInput =  document.getElementById("userInput")
let passwordInput = document.getElementById("passwordInput")
let boxLogin = document.querySelector(".box-login")
let boxLogout = document.querySelector(".box-logout")
let errorMessage = document.querySelector(".login-error")




var myModal = new bootstrap.Modal(document.getElementById('LoginModal'))
// Events 
loginButton.addEventListener('click', verifyAccount)

// Function
function verifyAccount(){
    
    let usersName = []
    let passwords = []
    let currentUser = ""

    for(let i=0; i<users.length; i++){
        usersName.push(Object.values(users[i].email).join(""))
        passwords.push(Object.values(users[i].password).join(""))
    }


    if(usersName.includes(userInput.value) && passwords.includes(passwordInput.value)){
        for(let i=0; i<users.length; i++){
            if(users[i].email == userInput.value){
                currentUser = users[i]
                UpdateHome()
            }
        }

    }else{
        errorMessage.style.opacity= "1"

        setTimeout(()=>{
            errorMessage.style.opacity= "0"
        },2000)
    }
}


function UpdateHome(){
    myModal.hide()
    boxLogin.style.opacity = "0"
    boxLogout.style.display = "flex"
    setTimeout(()=>{
        boxLogin.style.display = "none"
        boxLogout.style.opacity = "1"
    },100)
}

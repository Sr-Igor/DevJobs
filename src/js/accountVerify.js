//Variables login 
let loginButton = document.getElementById("loginButton") 
let userInput =  document.getElementById("userInput")
let passwordInput = document.getElementById("passwordInput")
let boxLogin = document.querySelector(".box-login")
let boxLogout = document.querySelector(".box-logout")
let errorMessage = document.querySelector(".login-error")

// Variables for Apply Vacancy
let buttonLoged = document.querySelector(".button-loged")
let TextNotLoged = document.querySelector(".text-not-loged")
let btnOpenModal = document.querySelector(".btn-open-modal")
let sendApplyButton = document.querySelector(".sendApplyButton")

// Variables for fill Application
let firstName = document.querySelector(".first-name")
let lastName = document.querySelector(".last-name")
let email = document.querySelector(".email")
let confirmEmail = document.querySelector(".confirm-email")
let phone = document.querySelector(".phone")
let cep = document.querySelector(".cep")
let street = document.querySelector(".street")
let district = document.querySelector(".district")
let city = document.querySelector(".city")
let uf = document.querySelector(".uf")
let number = document.querySelector(".number")
let complement = document.querySelector(".complement")

//Variables Send Application 
let errorSendMenssage = document.querySelector(".error-send-menssage")
let applyModalBody = document.querySelector(".Apply-Modal .modal-body")
let applyModalFooter = document.querySelector(".Apply-Modal .modal-footer")
let modalSuccess = document.querySelector(".modal-success")

//Varibles for close login modal
var myModal = new bootstrap.Modal(document.getElementById('LoginModal'))
var applyModal = new bootstrap.Modal(document.getElementById('ApplyModal'))

// Events 
loginButton.addEventListener('click', verifyAccount)
sendApplyButton.addEventListener("click", sendApplication)

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
                updateHeader()
                updateBodyFunctions()
                updateApplyVacancy(currentUser)
            }
        }
    }else{
        errorMessage.style.opacity= "1"

        setTimeout(()=>{
            errorMessage.style.opacity= "0"
        },2000)
    }
}

function updateHeader(){
    myModal.hide()
    boxLogin.style.opacity = "0"
    
    boxLogout.style.opacity = "1"
    setTimeout(()=>{
        boxLogin.style.display = "none"
        boxLogout.style.display = "flex"
    },100)
}

function updateBodyFunctions(){
    buttonLoged.style.display = "flex"
    btnOpenModal.setAttribute("data-bs-target", "#ApplyModal")
    btnOpenModal.removeAttribute("disabled", "true")
    TextNotLoged.style.display = "none"
}

function updateApplyVacancy(currentUser){

    firstName.setAttribute("value", currentUser.firstName)
    lastName.setAttribute("value", currentUser.lastName)
    email.setAttribute("value", currentUser.email)
    confirmEmail.setAttribute("value", currentUser.email)
    phone.setAttribute("value", currentUser.phone)
    cep.setAttribute("value", currentUser.adress.cep)
    street.setAttribute("value", currentUser.adress.street)
    district.setAttribute("value", currentUser.adress.district)
    city.setAttribute("value", currentUser.adress.city)
    uf.setAttribute("value", currentUser.adress.uf)
    number.setAttribute("value", currentUser.adress.number)
    complement.setAttribute("value", currentUser.adress.complement)

}

function sendApplication(){
    let inputs = [firstName, lastName, email, confirmEmail, phone, cep, street, district, city, uf, number,]
    let inputsValue = [firstName.value, lastName.value, email.value, confirmEmail.value, phone.value, cep.value, street.value, district.value, city.value, uf.value, number.value,]

    for (let i in inputs){
        if(inputs[i].value == ""){
            inputs[i].classList.add("empty")
        }else{
            inputs[i].classList.remove("empty")
        }
    }

    if(inputsValue.includes("")){
        errorSendMenssage.style.opacity = "1"
        setTimeout(()=>{
            errorSendMenssage.style.opacity= "0"
        },2000)
    }else{
        applyModalBody.style.display = "none"
        applyModalFooter.style.display = "none"
        modalSuccess.style.display = "flex"

        setTimeout(()=>{
            applyModal.hide()
            applyModalBody.style.display = "flex"
            applyModalFooter.style.display = "flex"
            modalSuccess.style.display = "none"
        },3000)
    }
}

//Variables login 
let loginButton = document.getElementById("loginButton") 
let userInput =  document.getElementById("userInput")
let passwordInput = document.getElementById("passwordInput")
let boxLogin = document.querySelector(".box-login")
let boxLogout = document.querySelector(".box-logout")
let errorMessage = document.querySelector(".login-error")
let loginValid = false
let userVacancyApply = ""
let login = ""
let password = ""

// Variables for Apply Vacancy
let buttonLoged = document.querySelector(".button-loged")
let TextNotLoged = document.querySelector(".text-not-loged")
let btnOpenModal = document.querySelector(".btn-open-modal")



//Varibles for close login modal
var myModal = new bootstrap.Modal(document.getElementById('LoginModal'))


// Events 
loginButton.addEventListener('click', callUsers)


// Function
function verifyAccount(usersRegisterArray){
    
    
    let sendApplyButton = document.querySelector(".sendApplyButton")
    sendApplyButton.addEventListener("click", callSendApplyeds)

    let usersArray = []
    
    for(let i in usersRegisterArray){
        usersArray.push([usersRegisterArray[i].email, usersRegisterArray[i].password])
    }

    for (let i = 0; i < usersArray.length; i++){
        if(usersArray[i][0] == userInput.value && usersArray[i][1] == passwordInput.value){
             loginValid = true
             enterAccount(usersRegisterArray)
             login = userInput.value
             password = passwordInput.value
             break
        }else{
            errorMessage.innerHTML = '<i class="bi bi-x"></i>User or password are incorrect'
            errorMessage.style.opacity= "1"
            setTimeout(()=>{errorMessage.style.opacity= "0"},2000)
            setTimeout(()=>{errorMessage.innerHTML = ''},2300)
            
        }
    }
}



function enterAccount(usersRegisterArray){
    for(let i=0; i<usersRegisterArray.length; i++){
        if(usersRegisterArray[i].email == userInput.value){
            let currentUser = usersRegisterArray[i]
            userVacancyApply = currentUser
            updateHeader()
            updateBodyFunctions()
            updateApplyVacancy(currentUser)
        }
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
    TextNotLoged.style.display = "none"
    buttonLoged.style.display = "flex"
    btnOpenModal.setAttribute("data-bs-target", "#ApplyModal")
    btnOpenModal.removeAttribute("disabled", "true") 
}

function updateApplyVacancy(currentUser){

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

function sendApplication(applayedsArray){

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

    //Variables Send Application 
    let errorSendMenssage = document.querySelector(".error-send-menssage")
    let applyModalBody = document.querySelector(".Apply-Modal .modal-body")
    let applyModalFooter = document.querySelector(".Apply-Modal .modal-footer")
    let modalSuccess = document.querySelector(".modal-success")

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

        let btnClose = document.querySelector(".after-apply")
        btnClose.addEventListener("click", ()=>{
            setTimeout(()=>{
                applyModalBody.style.display = "flex"
                applyModalFooter.style.display = "flex"
                modalSuccess.style.display = "none"
            },150)
        })

        getVacancy(applayedsArray)
    }
}

function getVacancy(applayedsArray){
    let applyedVacancy = document.querySelector(".title-modal")
    let currentVacancy = applyedVacancy.getAttribute("data-key")
    let applyedUser = []
    
    if(applayedsArray !== null){
        applayedsArray = applayedsArray
        applayedsArray.forEach(item =>{
            applyedUser.push(item.idUser)
        })
        if(applyedUser.includes(userVacancyApply.id)){
            for( let i in applayedsArray){
                if(applayedsArray[i].idUser == userVacancyApply.id){
                    
                    applayedsArray[i].vacancysCode.push(Number(currentVacancy))
                    
                }
            }
        }else{
            applayedsArray.push({
                idUser: userVacancyApply.id,
                vacancysCode: [Number(currentVacancy)]
            })
            
        } 
    }else{
        applayedsArray.push({
            idUser: userVacancyApply.id,
            vacancysCode: [Number(currentVacancy)]
        })
        
    }
    updateApplyeds(applayedsArray)
    
    
}

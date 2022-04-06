// Function to provide login
(function availableFunctionHomePage(){
    let loginButton = document.getElementById("loginButton")
    loginButton.addEventListener('click', callUsers) 
})()
 
//Varibles for close login modal
var myModal = new bootstrap.Modal(document.getElementById('LoginModal'))
var applyModal = ""

//Variables login 
let login = ""
let password = ""

/* This variable saves the information of the 
current user to be used in other functions*/
let currentUser = ""

//Fildes of Login 
let userInput =  document.getElementById("userInput")
let passwordInput = document.getElementById("passwordInput")

//This element does the varification to keep the user logged in when reloading the page
/*it is not being used for the item back to the home page because, 
the page already has user specific elements*/
if(userInput.value == "" && passwordInput.value == ""){

    // Get registered users
    let localStorageNull = localStorage.getItem("usersArray")
    let usersRegisterArray = localStorageNull == null ? [] : JSON.parse(localStorage.getItem("usersArray"))

    // Get the current user data
    let cacheUsersNull = localStorage.getItem("cacheUserInfo")
    let cacheUserInfo =  cacheUsersNull == null ? [] : JSON.parse(localStorage.getItem("cacheUserInfo"))
    login = cacheUserInfo[0]
    password = cacheUserInfo[1]

    // Calls the function that modifies the home items
    enterAccount(usersRegisterArray, login)
}



// Functions
function verifyAccount(usersRegisterArray){
    //Fildes of Login 
    let userInput =  document.getElementById("userInput")
    let passwordInput = document.getElementById("passwordInput")

    // Array with email and password 
    let usersArray = []
    for(let i in usersRegisterArray){
        usersArray.push([usersRegisterArray[i].email, usersRegisterArray[i].password])
    }

    //Cache simulation to keep the user logged in
    if(userInput.value !== "" && passwordInput.value !== ""){
        login = userInput.value
        password = passwordInput.value
    }


    /* Saving the user information in a variable, stored in localStorage 
    and calling the function that updates the page items*/
    for (let i = 0; i < usersArray.length; i++){
        if(usersArray[i][0] == login && usersArray[i][1] == password){
            enterAccount(usersRegisterArray, login)
            break
        }else{ // Login error message
            let errorMessage = document.querySelector(".login-error")
            errorMessage.innerHTML = '<i class="bi bi-x"></i>User or password are incorrect'
            errorMessage.style.opacity= "1"
            setTimeout(()=>{errorMessage.style.opacity= "0"},2000)
            setTimeout(()=>{errorMessage.innerHTML = ''},2300)
        }
    }
}

function enterAccount(usersRegisterArray, login){
    for(let i=0; i<usersRegisterArray.length; i++){
        if(usersRegisterArray[i].email == login){
            /*Get the information of the current user and 
            call the functions that update the page options*/
            currentUser = usersRegisterArray[i]
            cacheUserInfo = [login, password, currentUser]
            updateCurrentUser(cacheUserInfo)
            updateHeader()
            updateBodyFunctions()
            updateApplyVacancy(currentUser)
        }
    }
}

function updateHeader(){
    //Header elements
    let boxLogin = document.querySelector(".box-login")
    let boxLogout = document.querySelector(".box-logout")

    // Update in header elements after login 
    myModal.hide()
    boxLogin.style.opacity = "0"
    boxLogout.style.opacity = "1"
    setTimeout(()=>{
        boxLogin.style.display = "none"
        boxLogout.style.display = "flex"
    },100)
}

function updateBodyFunctions(){
    // Variables for Apply Vacancy
    let buttonLoged = document.querySelector(".button-loged")
    let TextNotLoged = document.querySelector(".text-not-loged")
    let btnOpenModal = document.querySelector(".btn-open-modal")
    let sendApplyButton = document.querySelector(".sendApplyButton")

    //Available button for apply in vacancies 
    TextNotLoged ? TextNotLoged.style.display = "none" : null
    buttonLoged.style.display = "flex"
    btnOpenModal.setAttribute("data-bs-target", "#ApplyModal")
    btnOpenModal.removeAttribute("disabled", "true") 
    sendApplyButton.addEventListener("click", callSendApplyeds)
}

function updateApplyVacancy(currentUser){ // Fill modal on click to aplly 

    applyModal = new bootstrap.Modal(document.getElementById('ApplyModal'), {
        keyboard: false
      })

    // Application modal fields
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

    //setting values
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

function sendApplication(applayedsArray){ // Send the form to the company

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

    // Application form elements
    let inputs = [firstName, lastName, email, confirmEmail, phone, cep, street, district, city, uf, number,]

    // Application form values
    let inputsValue = [
        firstName.value, lastName.value, 
        email.value, confirmEmail.value, 
        phone.value, cep.value, street.value, 
        district.value, city.value, uf.value, 
        number.value,
    ]

    // Error box coloring
    for (let i in inputs){
        inputs[i].value == "" ? inputs[i].classList.add("empty") : inputs[i].classList.remove("empty")
    }

    if(inputsValue.includes("")){
        messageBox(1)
    }else{
        //Function that adds the correct user and vacancy to the simulated database
        getVacancy(applayedsArray)
    }
}

function getVacancy(applayedsArray){

    // Select the element and get the "data-key" attribute (vacancy id)
    let applyedVacancy = document.querySelector(".title-modal")
    let currentVacancy = applyedVacancy.getAttribute("data-key")

    // Array with user id to check applications
    let applyedUser = [] 
    applayedsArray = applayedsArray
    applayedsArray.forEach(item =>{
        applyedUser.push(item.idUser)
    })

    /* Checks the options for: user with any vacancy
    registered or user without any vacancy registered */
    if(applyedUser.includes(currentUser.id)){
        for( let i in applayedsArray){
            if(applayedsArray[i].idUser == currentUser.id){
                //Checks if the user is already registered in the vacancy
                if(applayedsArray[i].vacancysCode.includes(Number(currentVacancy))){
                    messageBox(2)
                }else{
                    applayedsArray[i].vacancysCode.push(Number(currentVacancy))
                    messageBox(3)
                    //Simulated database update
                    updateApplyeds(applayedsArray)
                }
            }
        }
    }else{
        applayedsArray.push({
            idUser: currentUser.id,
            vacancysCode: [Number(currentVacancy)]
        })
        messageBox(3)
        //Simulated database update
        updateApplyeds(applayedsArray)
    } 
}


function messageBox(path){
    //This function displays all error and success messages during application

    //Variables Send Application 
    let errorSendMenssage = document.querySelector(".error-send-menssage")
    let applyModalBody = document.querySelector(".Apply-Modal .modal-body")
    let applyModalFooter = document.querySelector(".Apply-Modal .modal-footer")
    let modalSuccess = document.querySelector(".modal-success")
    let sendApplyButton = document.querySelector(".sendApplyButton")
    let btnClose = document.querySelector(".after-apply")
    //Control the click on the send button
    sendApplyButton.setAttribute("disabled", true)
    setTimeout(()=>{
        sendApplyButton.removeAttribute("disabled", true)
    }, 3000)

    

    switch(path){
        case 1:
            // Error message
            errorSendMenssage.innerHTML = '<i class="bi bi-x"></i> Please complete all the fields correctly'
            errorSendMenssage.style.opacity = "1"
            setTimeout(()=> {
                errorSendMenssage.style.opacity= "0" 
                errorSendMenssage.innerHTML = ""
            },3000)
            btnClose.addEventListener("click", ()=>{
                setTimeout(()=>{
                    errorSendMenssage.style.opacity= "0" 
                    errorSendMenssage.innerHTML = ""
                },150)
            })
            break;

        case 2: 
            // Error message
            errorSendMenssage.innerHTML = '<i class="bi bi-x"></i> You are already a candidate for this vacancy'
            errorSendMenssage.style.opacity = "1"
            setTimeout(()=> {
                errorSendMenssage.style.opacity= "0" 
                errorSendMenssage.innerHTML = ""
            },3000)
            btnClose.addEventListener("click", ()=>{
                setTimeout(()=>{
                    errorSendMenssage.style.opacity= "0" 
                    errorSendMenssage.innerHTML = ""
                },150)
            })
            break;
        case 3: 
            // Remove form and add success message
            applyModalBody.style.display = "none"
            applyModalFooter.style.display = "none"
            modalSuccess.style.display = "flex"
            // Close the modal, reload the form and hide the success message
            btnClose.addEventListener("click", ()=>{
                setTimeout(()=>{
                    applyModalBody.style.display = "flex"
                    applyModalFooter.style.display = "flex"
                    modalSuccess.style.display = "none"
                },150)
            })

            setTimeout(()=>applyModal.hide(), 2800)
            setTimeout(()=>{
                modalSuccess.style.display = "none"
                applyModalBody.style.display = "flex"
                applyModalFooter.style.display = "flex"
            },3000)
            break;
    }
}
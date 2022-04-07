(function availableUsersRegister(){
    // This function provides the click on the registration button
    let registerButton = document.querySelector(".register-button")
    registerButton.addEventListener('click', callNewUsers)
})()

function registerUser(usersRegisterArray){

    //User info inputs
    let firstName = document.querySelector(".first-name-register")
    let lastName = document.querySelector(".last-name-register")
    let email = document.querySelector(".email-register")
    let emailConfirm = document.querySelector(".email-confirm-register")
    let password = document.querySelector(".password-register")
    let passwordRegister = document.querySelector(".password-confirm-register")
    let phone = document.querySelector(".phone-register")
    let cpf = document.querySelector(".cpf-register")

    //Address Inputs 
    let cep = document.querySelector(".cep-register")
    let street = document.querySelector(".street-register")
    let district = document.querySelector(".district-register")
    let city = document.querySelector(".city-register")
    let uf = document.querySelector(".uf-register")
    let number = document.querySelector(".number-register")
    let complement = document.querySelector(".complement-register")

    // Inputs element array (except InputComplement)
    let infosRegister = {
        firstName, lastName, email,
        emailConfirm, password, passwordRegister, 
        phone, cpf, cep, street, 
        district, city, uf, number,
    }

    // Inputs valus array (except InputComplement)
    let infosRegisterValue = [
        firstName.value, lastName.value, 
        email.value, emailConfirm.value, 
        password.value, passwordRegister.value, 
        phone.value, cpf.value,cep.value, 
        street.value, district.value, city.value,
        uf.value, number.value,
    ]

    // CPF array for verify register
    let cpfUsers = []
    for(let i in usersRegisterArray){cpfUsers.push(usersRegisterArray[i].cpf)}

    // Email array for verify register
    let emailUsers = []
    for(let i in usersRegisterArray){emailUsers.push(usersRegisterArray[i].email)}

    //Regex Email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    let emailTest = emailRegex.test(email.value)

    //Regex Password
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    let passwordTest = passwordRegex.test(password.value)

    if(infosRegisterValue.includes("")){ // Checks for empty spaces 
        for(let i in infosRegister){
            if(infosRegister[i].value == ""){
                let inputEl = infosRegister[i]
                let message = 'Fill all required fields'
                // Calls the function that fills the error box, 
                // sending the message and the element by parameter
                fillMessageBox(message, inputEl)
            }
        }
        return
    }

    if(!infosRegisterValue.includes("")){
        // Verification of form items: email, password and cpf
        if(!emailTest){
            let inputEl = email
            let message = 'This email is not valid'
            fillMessageBox(message, inputEl)
            return
        }

        if(emailUsers.includes(email.value)){
            let inputEl = email
            let message = 'This email is already registered'
            fillMessageBox(message, inputEl)
            return
        }

        if(emailConfirm.value !== email.value){
            let inputEl = email
            let inputConfirm = emailConfirm
            let message = 'Confirmation email is different from email'
            fillMessageBox(message, inputEl, inputConfirm)
            return
        }

        if(cpfUsers.includes(cpf.value) || cpf.value.length !== 11){
            let inputEl = cpf
            let message = 'This CPF is already registered or invalid'
            fillMessageBox(message, inputEl)
            return
        }

        if(!passwordTest){
            let inputEl = password
            let message = 'This password is not valid'
            fillMessageBox(message, inputEl)
            return
        }

        if(password.value !== passwordRegister.value){
            let inputEl = password
            let inputConfirm = passwordRegister
            let message = 'Confirmation password is different from password'
            fillMessageBox(message, inputEl, inputConfirm)
            return
        }

        /* If the items are all correct, call the function that performs the registration 
         and the success message */
        userGenerator(usersRegisterArray, complement, infosRegister)
        fillMessageBox()
    }
}

function fillMessageBox(message, inputEl, inputConfirm = inputEl,){

        // Disable register button to control click loop
        let btnRegister = document.querySelector(".register-button")
        btnRegister.setAttribute("disabled", true)

        //box Messgage
        let boxMessage = document.querySelector(".box-register-message-user")

        if(!inputEl){ // Message success 
            boxMessage.style.opacity= "1"
            boxMessage.innerHTML = '<i class="bi bi-bookmark-star"></i> Successfully registered, now you can login'
            boxMessage.classList.add("success-register-user")
        }else{ // Message error 
            boxMessage.style.opacity= "1"
            boxMessage.innerHTML = `<i class="bi bi-x-lg"></i> ${message}`
            boxMessage.classList.add("error-register-user")
            inputEl.classList.add("empty")
            inputConfirm.classList.add("empty")
        }

        setTimeout(()=>{ // Clean the box 
            boxMessage.style.opacity= "0"
            boxMessage.innerHTML = ""
            boxMessage.classList.remove("error-register-user")
            btnRegister.removeAttribute("disabled", true)
            if(inputEl){
                inputEl.classList.remove("empty")
                inputConfirm.classList.remove("empty")
            }else{
                boxMessage.classList.remove("success-register-user")
            }
        }, 3500)
        
}

function userGenerator(usersRegisterArray, complement, infosRegister){

    // Array with existents users id
    let idUsers = []
    for (let i in usersRegisterArray){idUsers.push(usersRegisterArray[i].id)}
    
    // This function generates an id
    let idRandomUser = ""
    let randomUser = () => idRandomUser = Math.floor(Math.random() * 10000)    
    randomUser()
    // If id is existent, recursion is used to generate another id
    if(idUsers.includes(idRandomUser)){randomUser()}


    // Adding the new user to the simulated database
    usersRegisterArray.push(
        {
            id: idRandomUser,
            email: infosRegister.email.value,
            firstName: infosRegister.firstName.value,
            lastName: infosRegister.lastName.value,
            password: infosRegister.password.value,
            phone: infosRegister.phone.value,
            cpf: infosRegister.cpf.value,
            address: {
                cep: infosRegister.cep.value,
                uf: infosRegister.uf.value.toUpperCase(),
                city: infosRegister.city.value,
                district: infosRegister.district.value,
                street: infosRegister.street.value,
                number: infosRegister.number.value,
                complement: complement.value,
            }
        },
    )
    
    // Cleaning the fields
    setTimeout(()=>{
        for( let i in infosRegister){infosRegister[i].value = ""}
        complement.value = ""
    },3500)

    //Saving the new user in localStorage
    updateUsers(usersRegisterArray)
}

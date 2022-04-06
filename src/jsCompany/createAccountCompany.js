(function availableButtonRegister(){
    // This function provides the click on the registration button
    let buttonRegisterCompany = document.querySelector(".button-register-company")
    buttonRegisterCompany.addEventListener("click", callCreateAccountCompany)
})()

function verifyFields(companiesArray){
    event.preventDefault()

    //Infos Company
    let companyName = document.querySelector(".company-name")
    let companyEmail = document.querySelector(".email-company")
    let companyEmailConfirm = document.querySelector(".confirm-email-company")
    let companyPassword = document.querySelector(".password-company")
    let companyPasswordConfirm= document.querySelector(".password-confirm-company")
    let companyPhone = document.querySelector(".phone-company")
    let companyCnpj = document.querySelector(".cpnj")
    let checkboxRegister = document.querySelector(".check-terms")

    //address Company 
    let companyCep = document.querySelector(".cep-company")
    let companyStreet = document.querySelector(".street-company")
    let companyDistrict = document.querySelector(".district-company")
    let companyCity= document.querySelector(".city-company")
    let companyUf = document.querySelector(".uf-company")
    let companyNumber = document.querySelector(".number-company")
    let companyComplement = document.querySelector(".complement")
    
    // Inputs element array (except InputComplement)
    let arrayInputs = {
        companyName, companyEmail, companyEmailConfirm, 
        companyPassword, companyPasswordConfirm, companyPhone, 
        companyCnpj, companyCep, companyStreet, companyDistrict, 
        companyCity, companyUf, companyNumber,
    }

    // Inputs valus array (except InputComplement)
    let arrayInputsValue = [
        companyName.value, companyEmail.value, 
        companyEmailConfirm.value, companyPassword.value, 
        companyPasswordConfirm.value, companyPhone.value, 
        companyCnpj.value, companyCep.value, companyStreet.value,
        companyDistrict.value, companyCity.value, companyUf.value, 
        companyNumber.value,
    ]
    
    // CNPJ array for verify register
    let cnpjUsers = []
    for(let i in companiesArray){cnpjUsers.push(companiesArray[i].cnpj)}

    // Email array for verify register
    let emailCompanyUsers = []
    for(let i in companiesArray){emailCompanyUsers.push(companiesArray[i].email)}

    //Regex Email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    let emailTest = emailRegex.test(companyEmail.value)

    //Regex Password
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    let passwordTest = passwordRegex.test(companyPassword.value)

    if(arrayInputsValue.includes("")){ // Checks for empty spaces 
        for(let i in arrayInputs){
            if(arrayInputs[i].value == ""){
                let inputEl = arrayInputs[i]
                let message = 'Fill all required fields'
                // Calls the function that fills the error box, 
                // sending the message and the element by parameter
                fillMessageBox(message, inputEl)
            }
        }
        return
    }
    if(!arrayInputsValue.includes("")){
        // Verification of form items: email, password and cnpj
        if(!emailTest){
            let inputEl = companyEmail
            let message = 'This email is not valid'
            fillMessageBox(message, inputEl)
            return
        }

        if(emailCompanyUsers.includes(companyEmail.value)){
            let inputEl = companyEmail
            let message = 'This Email is already registered'
            fillMessageBox(message, inputEl)
            return
        }

        if(companyEmail.value !== companyEmailConfirm.value){
            let inputEl = companyEmail
            let inputConfirm = companyEmailConfirm
            let message = 'Confirmation email is different from email'
            fillMessageBox(message, inputEl, inputConfirm)
            return
        }

        if(!passwordTest){
            let inputEl = companyPassword
            let message = 'This password is not valid'
            fillMessageBox(message, inputEl)
            return
        }

        if(companyPassword.value !== companyPasswordConfirm.value){
            let inputEl = companyPassword
            let inputConfirm = companyPasswordConfirm
            let message = 'Confirmation password is different from password'
            fillMessageBox(message, inputEl, inputConfirm)
            return
        }

        if(cnpjUsers.includes(companyCnpj.value) || companyCnpj.value.length !== 14){
            let inputEl = companyCnpj
            let message = 'This CNPJ is already registered or invalid!'
            fillMessageBox(message, inputEl)
            return
        }

        if(checkboxRegister.checked !== true){
            let inputEl = checkboxRegister
            let message = 'Privacy terms must be accepted'
            fillMessageBox(message, inputEl)
            return
        }
        /* If the items are all correct, call the function that performs the registration 
         and the success message */
        fillMessageBox()
        idUserGeneratorCompany(companiesArray, arrayInputs, companyComplement,)
    }
}

function fillMessageBox(message, inputEl, inputConfirm = inputEl,){

    // Disable register button to control click loop
    let btnRegister = document.querySelector(".button-register-company")
    btnRegister.setAttribute("disabled", true)

    //Box messages 
    let boxMessage = document.querySelector(".box-register-company")

    if(!inputEl){ // Message success 
        boxMessage.style.opacity= "1"
        boxMessage.innerHTML = '<i class="bi bi-bookmark-star"></i> Successfully registered, now you can login'
        boxMessage.classList.add("success-box-register")
    }else{ // Message error 
        boxMessage.style.opacity= "1"
        boxMessage.innerHTML = `<i class="bi bi-x-lg"></i> ${message}`
        boxMessage.classList.add("error-box-register")
        inputEl.classList.add("empty")
        inputConfirm.classList.add("empty")
    }

    setTimeout(()=>{ // Clean the box 
        boxMessage.style.opacity= "0"
        boxMessage.innerHTML = ""
        boxMessage.classList.remove("error-box-register")
        btnRegister.removeAttribute("disabled", true)
        if(inputEl){
            inputEl.classList.remove("empty")
            inputConfirm.classList.remove("empty")
        }else{
            boxMessage.classList.remove("success-box-register")
        }
    }, 3500)
    
}

function idUserGeneratorCompany(companiesArray, arrayInputs, companyComplement,){

    // Array with existents companies id
    let idUsersCompanies = []
    for (let i in companiesArray){idUsersCompanies.push(companiesArray[i].id)}
    
    // This function generates an id
    let idRandomUser = ""
    let randomUser = () => idRandomUser = Math.floor(Math.random() * 10000)    
    randomUser()
    // If id is existent, recursion is used to generate another id
    if(idUsersCompanies.includes(idRandomUser)){randomUser()}

    // Adding the new company to the simulated database
    companiesArray.push(
        {
            id: idRandomUser,
            companyName: arrayInputs.companyName.value,
            email: arrayInputs.companyEmail.value,
            password: arrayInputs.companyPassword.value,
            phone: arrayInputs.companyPhone.value,
            cnpj: arrayInputs.companyCnpj.value,
            address: {
                cep: arrayInputs.companyCep.value,
                city: arrayInputs.companyCity.value,
                street: arrayInputs.companyStreet.value,
                uf: arrayInputs.companyUf.value.toUpperCase(),
                district: arrayInputs.companyDistrict.value,
                number: arrayInputs.companyNumber.value,
                complement: companyComplement.value
            }
        }
    )
    
    // Cleaning the fields
    setTimeout(()=>{
        for(let i in arrayInputs){
            arrayInputs[i].value = ""
        }
        companyComplement.value = ""
    },3000)

    //Saving the new user in localStorage
    updatecompaniesArray(companiesArray)
}


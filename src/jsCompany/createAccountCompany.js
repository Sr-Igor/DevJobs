
//Infos Company
let companyName = document.querySelector(".company-name")
let companyEmail = document.querySelector(".email-company")
let companyEmailConfirm = document.querySelector(".confirm-email-company")
let companyPassword = document.querySelector(".password-company")
let companyPasswordConfirm= document.querySelector(".password-confirm-company")
let companyPhone = document.querySelector(".phone-company")
let companyCnpj = document.querySelector(".cpnj")
let checkboxRegister = document.querySelector(".check-terms")

//Adress Company
let companyCep = document.querySelector(".cep-company")
let companyStreet = document.querySelector(".street-company")
let companyDistrict = document.querySelector(".district-company")
let companyCity= document.querySelector(".city-company")
let companyUf = document.querySelector(".uf-company")
let companyNumber = document.querySelector(".number-company")
let companyComplement = document.querySelector(".complement")

//Box messages 
let boxMessage = document.querySelector(".box-register-company")



// Button register
let buttonRegisterCompany = document.querySelector(".button-register-company")

buttonRegisterCompany.addEventListener("click", callCreateAccountCompany)

function verifyFields(companysArray){
    event.preventDefault()
    let ArrayInputs = [companyName, companyEmail, companyEmailConfirm, companyPassword, companyPasswordConfirm, companyPhone, companyCnpj, companyCep, companyStreet, companyDistrict, companyCity, companyUf, companyNumber,]
    let ArrayInputsValue = [companyName.value, companyEmail.value, companyEmailConfirm.value, companyPassword.value, companyPasswordConfirm.value, companyPhone.value, companyCnpj.value, companyCep.value, companyStreet.value, companyDistrict.value, companyCity.value, companyUf.value, companyNumber.value,]

    for(let i in ArrayInputsValue){
        if(ArrayInputsValue[i] == ""){
            ArrayInputs[i].classList.add("empty")
        }else{
            ArrayInputs[i].classList.remove("empty")
        }
    }

    if(!ArrayInputsValue.includes("")){
        if(companyEmail.value !== companyEmailConfirm.value){
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> Confirmation email is different from email'
            boxMessage.classList.add("error-box-register")
            boxMessage.style.opacity = "1"
            companyEmail.classList.add("empty")
            companyEmailConfirm.classList.add("empty")
            return
        }else{
            companyEmail.classList.remove("empty")
            companyEmailConfirm.classList.remove("empty")
            boxMessage.innerHTML = ""
            boxMessage.classList.remove("error-box-register")
            boxMessage.style.opacity = "0"
        }

        if(companyPassword.value !== companyPasswordConfirm.value){
            boxMessage.classList.add("error-box-register")
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> Confirmation password is different from password'
            boxMessage.style.opacity = "1"
            companyPassword.classList.add("empty")
            companyPasswordConfirm.classList.add("empty")
            return
        }else{
            companyPassword.classList.remove("empty")
            companyPasswordConfirm.classList.remove("empty")
            boxMessage.classList.remove("error-box-register")
            boxMessage.innerHTML = ""
            boxMessage.style.opacity = "0"
        }

        let cnpjUsers = []
        for(let i in companysArray){
            cnpjUsers.push(companysArray[i].cnpj)
        }

        if(cnpjUsers.includes(companyCnpj.value)){
            boxMessage.classList.add("error-box-register") 
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> This CNPJ is already registered'
            boxMessage.style.opacity = "1"
            companyCnpj.classList.add("empty")
            return
        }else{
            boxMessage.classList.remove("error-box-register")
            boxMessage.innerHTML = ""
            boxMessage.style.opacity = "0"
            companyCnpj.classList.remove("empty")
        }

        if(checkboxRegister.checked == true){
            boxMessage.classList.remove("error-box-register")
            boxMessage.innerHTML = ""
            boxMessage.style.opacity = "0"
            idUserGeneratorCompany(companysArray, companyName, companyEmail, companyEmailConfirm, companyPassword, companyPasswordConfirm, companyPhone, companyCnpj, companyCep, companyStreet, companyDistrict, companyCity, companyUf, companyNumber, companyComplement,)
        }else{
            boxMessage.classList.add("error-box-register")
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> Privacy terms must be accepted' 
            boxMessage.style.opacity = "1"
        }
    }
}

function idUserGeneratorCompany(companysArray, companyName, companyEmail, companyEmailConfirm, companyPassword, companyPasswordConfirm, companyPhone, companyCnpj, companyCep, companyStreet, companyDistrict, companyCity, companyUf, companyNumber, companyComplement,){

    let idRandomUser = Math.floor(Math.random() * 10000)

    let idUsersCompanys = []
    for (let i in companysArray){
        idUsersCompanys.push(companysArray[i].id)
    }
    
    if(idUsersCompanys.includes(idRandomUser)){
        idRandomUserCompany()
    }

    companysArray.push(
        {
            id: idRandomUser,
            companyName: companyName.value,
            email: companyEmail.value,
            password: companyPassword.value,
            phone: companyPhone.value,
            cnpj: companyCnpj.value,
            adress: {
                cep: companyCep.value,
                city: companyCity.value,
                street: companyStreet.value,
                uf: companyUf.value.toUpperCase(),
                district: companyDistrict.value,
                number: companyNumber.value,
                complement: companyComplement.value
            }
        }
    )
    
    updateCompanysArray(companysArray)
    boxMessage.classList.add("success-box-register")
    boxMessage.innerHTML = '<i class="bi bi-bookmark-check"></i> Successfully registered, now you can login'
    boxMessage.style.opacity = "1"
     

    setTimeout(()=>{
        companyName.value = ""
        companyEmail.value = ""
        companyEmailConfirm.value = ""
        companyPassword.value = ""
        companyPasswordConfirm.value = ""
        companyPhone.value = ""
        companyCnpj.value = ""
        companyCep.value = ""
        companyStreet.value = ""
        companyDistrict.value = ""
        companyCity.value = ""
        companyUf.value = ""
        companyNumber.value = ""
        companyComplement.value = ""

        boxMessage.classList.remove("success-box-register") 
        boxMessage.innerHTML = ''
        boxMessage.style.opacity = "0"

    },3000)
}



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
let boxErrorMessage = document.querySelector(".error-box-register")
let messageErrorRegister = document.querySelector(".error-message-register")


// Button register
let buttonRegisterCompany = document.querySelector(".button-register-company")

buttonRegisterCompany.addEventListener("click", verifyFields)

function verifyFields(e){
    e.preventDefault()
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
            companyEmail.classList.add("empty")
            companyEmailConfirm.classList.add("empty")
            boxErrorMessage.style.display = "flex"
            messageErrorRegister.innerHTML = "Confirmation email is different from email"
            return
        }else{
            companyEmail.classList.remove("empty")
            companyEmailConfirm.classList.remove("empty")
            boxErrorMessage.style.display = "none"
            messageErrorRegister.innerHTML = ""
        }

        if(companyPassword.value !== companyPasswordConfirm.value){
            companyPassword.classList.add("empty")
            companyPasswordConfirm.classList.add("empty")
            boxErrorMessage.style.display = "flex"
            messageErrorRegister.innerHTML = "Confirmation password is different from password"
            return
        }else{
            companyPassword.classList.remove("empty")
            companyPasswordConfirm.classList.remove("empty")
            boxErrorMessage.style.display = "none"
            messageErrorRegister.innerHTML = ""
        }

        let cnpjUsers = []
        for(let i in companys){
            cnpjUsers.push(companys[i].cnpj)
        }

        if(cnpjUsers.includes(companyCnpj.value)){
            boxErrorMessage.style.display = "flex"
            messageErrorRegister.innerHTML = "This CNPJ is already registered"
            companyCnpj.classList.add("empty")
            return
        }else{
            boxErrorMessage.style.display = "none"
            messageErrorRegister.innerHTML = ""
            companyCnpj.classList.remove("empty")
        }

        console.log(checkboxRegister.checked)

        if(checkboxRegister.checked == true){
            boxErrorMessage.style.display = "none"
            messageErrorRegister.innerHTML = ""
            idUserGeneratorCompany(companyName, companyEmail, companyEmailConfirm, companyPassword, companyPasswordConfirm, companyPhone, companyCnpj, companyCep, companyStreet, companyDistrict, companyCity, companyUf, companyNumber, companyComplement,)
        }else{
            boxErrorMessage.style.display = "flex"
            messageErrorRegister.innerHTML = "Privacy terms must be accepted"
        }

        
    }

}

function idUserGeneratorCompany(companyName, companyEmail, companyEmailConfirm, companyPassword, companyPasswordConfirm, companyPhone, companyCnpj, companyCep, companyStreet, companyDistrict, companyCity, companyUf, companyNumber, companyComplement,){

    //box success
    let messageSuccess = document.querySelector(".success-message-register")
    let boxSuccess = document.querySelector(".success-box-register")


    let idRandomUser = Math.floor(Math.random() * 10000)

    let idUsersCompanys = []
    for (let i in companys){
        idUsersCompanys.push(companys[i].id)
    }
    
    if(idUsersCompanys.includes(idRandomUser)){
        idRandomUserCompany()
    }

    companys.push(
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

    messageSuccess.innerHTML = "Successfully registered, now you can login"
    boxSuccess.style.display = "flex"

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

        messageSuccess.innerHTML = ""
        boxSuccess.style.display = "none"
    },1000)

    console.log(companys)
}


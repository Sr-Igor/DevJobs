function loadEditProfile(){
    //Events Edit
    let buttonSaveEdit = document.querySelector(".btn-save-edit")
    buttonSaveEdit.addEventListener("click", callEditProfileCompany)

    //Events cancel
    let buttonCancelEdit = document.querySelector(".btn-cancel-edit")
    buttonCancelEdit.addEventListener("click", fillUserPageCompany)
}

function verifyFieldsEdit(companysArray){
    //Current Infos Company 
    let currentPassword = document.querySelector(".current-password")

    //Infos Company
    let companyNameEdit = document.querySelector(".edit-company-name")
    let companyPasswordEdit = document.querySelector(".new-password")
    let companyPhoneEdit  = document.querySelector(".phone-edit")
    let companyCnpjEdit  = document.querySelector(".cnpj-edit")

    //Adress Company
    let companyCepEdit  = document.querySelector(".cep-edit")
    let companyStreetEdit  = document.querySelector(".street-edit")
    let companyDistrictEdit  = document.querySelector(".district-edit")
    let companyCityEdit = document.querySelector(".city-edit")
    let companyUfEdit  = document.querySelector(".uf-edit")
    let companyNumberEdit  = document.querySelector(".number-edit")
    let companyComplementEdit = document.querySelector(".complement-edit")

    //Box error
    let boxError = document.querySelector(".box-error-edit-profile")
    let messageError = document.querySelector(".error-edit-message")

        //Box success
        let boxSuccess = document.querySelector(".box-success-edit-profile")
        let messageSuccess = document.querySelector(".success-edit-message")

    event.preventDefault()
    let ArrayInputs = [companyNameEdit, companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit]
    let ArrayInputsValue = [companyNameEdit.value, companyPhoneEdit.value, companyCnpjEdit.value, companyCepEdit.value, companyStreetEdit.value, companyDistrictEdit.value, companyCityEdit.value, companyUfEdit.value, companyNumberEdit.value]

    for(let i in ArrayInputsValue){
        if(ArrayInputsValue[i] == ""){
            ArrayInputs[i].classList.add("empty")
        }else{
            ArrayInputs[i].classList.remove("empty")
        }
    }

    if(!ArrayInputsValue.includes("") && companyPasswordEdit.value !== ""){

        if(currentUserCompany.password == currentPassword.value){
            boxError.style.display = "none"
            messageError.innerHTML = ""
            currentPassword.classList.remove("empty")
            companyPasswordEdit.classList.remove("empty")
            updateprofile(companysArray, boxSuccess, messageSuccess, companyNameEdit, companyPasswordEdit,companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit, companyComplementEdit )
        }else{
            boxError.style.display = "flex"
            messageError.innerHTML = "Current password incorrect"
            currentPassword.classList.add("empty")
            companyPasswordEdit.classList.add("empty")
            }
    }else if(!ArrayInputsValue.includes("") && companyPasswordEdit.value == ""){
        updateprofileNoPassword(companysArray, boxSuccess, messageSuccess, companyNameEdit, companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit, companyComplementEdit )
    }
}

function updateprofile(companysArray,boxSuccess, messageSuccess, companyNameEdit, companyPasswordEdit, companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit, companyComplementEdit ){
    
    for (let i in companysArray){
        if(companysArray[i].id == currentUserCompany.id){
            companysArray[i].companyName = companyNameEdit.value
            companysArray[i].password = companyPasswordEdit.value
            companysArray[i].phone = companyPhoneEdit.value
            companysArray[i].cnpj = companyCnpjEdit.value
            companysArray[i].adress.cep = companyCepEdit.value
            companysArray[i].adress.street = companyStreetEdit.value
            companysArray[i].adress.city = companyCityEdit.value
            companysArray[i].adress.uf = companyUfEdit.value
            companysArray[i].adress.district = companyDistrictEdit.value
            companysArray[i].adress.number = companyNumberEdit.value
            companysArray[i].adress.complement =  companyComplementEdit.value

            boxSuccess.style.display = "flex"
            messageSuccess.innerHTML = "Profile edited successfully"
        
            setTimeout(()=>{
                boxSuccess.style.display = "none"
                messageSuccess.innerHTML = ""
                currentUserCompany = companysArray[i]
                changeMainPage()
                updateCompanysArray(companysArray)
            }, 3000)
        }
    }


}

function updateprofileNoPassword(companysArray, boxSuccess, messageSuccess, companyNameEdit, companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit, companyComplementEdit ){
   
    for (let i in companysArray){
        if(companysArray[i].id == currentUserCompany.id){
            companysArray[i].companyName = companyNameEdit.value
            companysArray[i].phone = companyPhoneEdit.value
            companysArray[i].cnpj = companyCnpjEdit.value
            companysArray[i].adress.cep = companyCepEdit.value
            companysArray[i].adress.street = companyStreetEdit.value
            companysArray[i].adress.city = companyCityEdit.value
            companysArray[i].adress.uf = companyUfEdit.value
            companysArray[i].adress.district = companyDistrictEdit.value
            companysArray[i].adress.number = companyNumberEdit.value
            companysArray[i].adress.complement =  companyComplementEdit.value

            boxSuccess.style.display = "flex"
            messageSuccess.innerHTML = "Profile edited successfully"
        
            setTimeout(()=>{
                boxSuccess.style.display = "none"
                messageSuccess.innerHTML = ""
                currentUserCompany = companysArray[i]
                changeMainPage()
                updateCompanysArray(companysArray)
            }, 3000)
        }
    }
}
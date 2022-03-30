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

    //Box message
    let boxMessage = document.querySelector(".box-message-edit-profile")

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
            boxMessage.classList.remove("box-error-edit-profile")
            boxMessage.innerHTML = ""
            boxMessage.style.opacity = "0"
            currentPassword.classList.remove("empty")
            companyPasswordEdit.classList.remove("empty")
            updateprofile(companysArray, boxMessage, ArrayInputsValue, companyComplementEdit, companyPasswordEdit.value )
        }else{
            boxMessage.classList.add("box-error-edit-profile")
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> Current password incorrect'
            boxMessage.style.opacity = "1"
            currentPassword.classList.add("empty")
            companyPasswordEdit.classList.add("empty")
            }
    }else if(!ArrayInputsValue.includes("") && companyPasswordEdit.value == ""){
        updateprofile(companysArray, boxMessage, ArrayInputsValue, companyComplementEdit )
    }
}

function updateprofile(companysArray, boxMessage, ArrayInputsValue, newComplement, newPassword){
    
   let [newName, NewPhone, NewCnpj, NewCep, NewStreet, NewDistrict, NewCity, NewUf, NewNumber] = ArrayInputsValue

    for (let i in companysArray){
        if(companysArray[i].id == currentUserCompany.id){
            companysArray[i].companyName = newName
            companysArray[i].phone = NewPhone
            companysArray[i].cnpj = NewCnpj
            companysArray[i].adress.cep = NewCep
            companysArray[i].adress.street = NewStreet
            companysArray[i].adress.city = NewCity
            companysArray[i].adress.uf = NewUf.toUpperCase()
            companysArray[i].adress.district = NewDistrict
            companysArray[i].adress.number = NewNumber
            companysArray[i].adress.complement =  newComplement

            if(newPassword !== undefined){
                companysArray[i].password = newPassword
            }

            boxMessage.classList.add("box-success-edit-profile")
            boxMessage.innerHTML = '<i class="bi bi-bookmark-check"></i> Profile edited successfully'
            boxMessage.style.opacity = "1"
            
            setTimeout(()=>{
                boxMessage.classList.remove("box-success-edit-profile")
                boxMessage.innerHTML = ''
                boxMessage.style.opacity = "0"
                currentUserCompany = companysArray[i]
                changeMainPage()
                updateCompanysArray(companysArray)
            }, 3000)
        }
    }
}

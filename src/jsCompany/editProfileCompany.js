function loadEditProfile(){
    //Events Edit
    let buttonSaveEdit = document.querySelector(".btn-save-edit")
    buttonSaveEdit.addEventListener("click", verifyFieldsEdit)

    //Events cancel
    let buttonCancelEdit = document.querySelector(".btn-cancel-edit")
    buttonCancelEdit.addEventListener("click", fillUserPageCompany)
}

function verifyFieldsEdit(e){
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

    e.preventDefault()
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
            updateprofile(companyNameEdit, companyPasswordEdit,companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit, companyComplementEdit )
        }else{
            boxError.style.display = "flex"
            messageError.innerHTML = "Current password incorrect"
            currentPassword.classList.add("empty")
            companyPasswordEdit.classList.add("empty")
            }
    }
}

function updateprofile(companyNameEdit, companyPasswordEdit, companyPhoneEdit, companyCnpjEdit, companyCepEdit, companyStreetEdit, companyDistrictEdit, companyCityEdit, companyUfEdit, companyNumberEdit, companyComplementEdit ){
    currentUserCompany.companyName = companyNameEdit.value
    currentUserCompany.password = companyPasswordEdit.value
    currentUserCompany.phone = companyPhoneEdit.value
    currentUserCompany.cnpj = companyCnpjEdit.value
    currentUserCompany.adress.cep = companyCepEdit.value
    currentUserCompany.adress.street = companyStreetEdit.value
    currentUserCompany.adress.city = companyCityEdit.value
    currentUserCompany.adress.uf = companyUfEdit.value
    currentUserCompany.adress.district = companyDistrictEdit.value
    currentUserCompany.adress.number = companyNumberEdit.value
    currentUserCompany.adress.complement =  companyComplementEdit.value

    console.log(companys)
}

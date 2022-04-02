function loadEditProfile(){
    //Events Edit
    let buttonSaveEdit = document.querySelector(".btn-save-edit")
    buttonSaveEdit.addEventListener("click", callEditProfileCompany)

    //Events cancel
    let buttonCancelEdit = document.querySelector(".btn-cancel-edit")
    buttonCancelEdit.addEventListener("click", fillUserPageCompany)
}

function verifyFieldsEdit(companysArray){
    event.preventDefault()

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

    //Regex Password
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    let passwordTest = passwordRegex.test(companyPasswordEdit.value)
    
    // Array inputs
    let ArrayInputs = [
        companyNameEdit, companyPhoneEdit, companyCnpjEdit, 
        companyCepEdit, companyStreetEdit, companyDistrictEdit, 
        companyCityEdit, companyUfEdit, companyNumberEdit
    ]

    // Array Inputs value
    let ArrayInputsValue = [
        companyNameEdit.value, companyPhoneEdit.value, 
        companyCnpjEdit.value, companyCepEdit.value, 
        companyStreetEdit.value, companyDistrictEdit.value, 
        companyCityEdit.value, companyUfEdit.value, 
        companyNumberEdit.value
    ]

    // Verify empty fields
    for(let i in ArrayInputsValue){
        if(ArrayInputsValue[i] == ""){
            ArrayInputs[i].classList.add("empty")
        }else{
            ArrayInputs[i].classList.remove("empty")
        }
    }

    // New password validation
    if(companyPasswordEdit.value !=="" && !passwordTest){
        let message = "The new password is not valid"
        let element = companyPasswordEdit
        errorMessageEditProfile(message, element)
        return  
    }

    // Check passwords the same
    if(currentUserCompany.password == currentPassword.value){
        updateprofile(companysArray,  ArrayInputsValue, companyComplementEdit, companyPasswordEdit.value )
    }else{
        let message = "Current password incorrect"
        let element = currentPassword
        errorMessageEditProfile(message, element)
    }
}

function errorMessageEditProfile(message, element){

    //Box message
    let boxMessage = document.querySelector(".box-message-edit-profile")

    //Control the click on the button
    let buttonSaveEdit = document.querySelector(".btn-save-edit")
    buttonSaveEdit.setAttribute("disabled", true)
    setTimeout(()=>buttonSaveEdit.removeAttribute("disabled", true),3100)

    //Filling in the error message and fields
    boxMessage.classList.add("box-error-edit-profile")
    boxMessage.innerHTML = `<i class="bi bi-x-lg"></i> ${message}`
    boxMessage.style.opacity = "1"
    element.classList.add("empty")

    setTimeout(()=>{
        boxMessage.classList.remove("box-error-edit-profile")
        boxMessage.innerHTML = ""
        boxMessage.style.opacity = "0"
        element.classList.remove("empty")
    }, 3000)
}

function updateprofile(companysArray, ArrayInputsValue, newComplement, newPassword){
    // Update company information, save to localStorage and refresh the page

    //Deconstructing the array of elements
    let [newName, NewPhone, NewCnpj, NewCep, NewStreet, NewDistrict, NewCity, NewUf, NewNumber] = ArrayInputsValue

    //Control the click on the button
    let buttonSaveEdit = document.querySelector(".btn-save-edit")
    buttonSaveEdit.setAttribute("disabled", true)
    setTimeout(()=>buttonSaveEdit.removeAttribute("disabled", true),3100)

    //Box message
    let boxMessage = document.querySelector(".box-message-edit-profile")

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

            //Checks if a new password has been added
            if(newPassword !== ""){companysArray[i].password = newPassword}

            //Show success message
            boxMessage.classList.add("box-success-edit-profile")
            boxMessage.innerHTML = '<i class="bi bi-bookmark-check"></i> Profile edited successfully'
            boxMessage.style.opacity = "1"
            
            // Hide success message and update page 
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

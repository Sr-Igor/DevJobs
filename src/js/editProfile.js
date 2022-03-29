function loadEditProfile(){
    //Events Edit
    let buttonSaveEdit = document.querySelector(".save-edit-profile")
    buttonSaveEdit.addEventListener("click", callEditProfile)

    //Events cancel
    let buttonCancelEdit = document.querySelector(".cancel-edit-profile")
    buttonCancelEdit.addEventListener("click", callHome)
}

function verifyFieldsEdit(usersRegisterArray){
    event.preventDefault()
    
    //Current Infos Profile
    let currentPassword = document.querySelector(".password-profile")

    //Infos Profile
    let passwordEdit = document.querySelector(".new-password")

    let phoneEdit  = document.querySelector(".phone-profile")


    //Adress Profile
    let cepEdit  = document.querySelector(".cep-profile")
    let streetEdit  = document.querySelector(".street-profile")
    let districtEdit  = document.querySelector(".district-profile")
    let cityEdit = document.querySelector(".city-profile")
    let ufEdit  = document.querySelector(".uf-profile")
    let numberEdit  = document.querySelector(".number-profile")
    let complementEdit = document.querySelector(".complement-profile")

    //Box error
    let boxError = document.querySelector(".error-box-edit")
    let messageError = document.querySelector(".error-message-edit")

    //Box success
    let boxSuccess = document.querySelector(".success-box-edit")
    let messageSuccess = document.querySelector(".success-message-edit")

    let ArrayInputs = [phoneEdit, cepEdit, streetEdit, districtEdit, cityEdit, ufEdit, numberEdit, ]
    let ArrayInputsValue = [phoneEdit.value, cepEdit.value, streetEdit.value, districtEdit.value, cityEdit.value, ufEdit.value, numberEdit.value,]

    for(let i in ArrayInputsValue){
        if(ArrayInputsValue[i] == ""){
            ArrayInputs[i].classList.add("empty")
        }else{
            ArrayInputs[i].classList.remove("empty")
        }
    }

    if(!ArrayInputsValue.includes("") && passwordEdit.value !== ""){

        if(userVacancyApply.password == currentPassword.value){
            boxError.style.display = "none"
            messageError.innerHTML = ""
            currentPassword.classList.remove("empty")
            passwordEdit.classList.remove("empty")
            updateprofile(usersRegisterArray, boxSuccess, messageSuccess, passwordEdit.value, phoneEdit.value, cepEdit.value, streetEdit.value, districtEdit.value, cityEdit.value, ufEdit.value, numberEdit.value, complementEdit.value)
        }else{
            boxError.style.display = "flex"
            messageError.innerHTML = "Current password incorrect"
            currentPassword.classList.add("empty")
            passwordEdit.classList.add("empty")
            }
    }else if(!ArrayInputsValue.includes("") && passwordEdit.value == ""){
        updateProfileNoPassword(usersRegisterArray, boxSuccess, messageSuccess, phoneEdit.value, cepEdit.value, streetEdit.value, districtEdit.value, cityEdit.value, ufEdit.value, numberEdit.value, complementEdit.value)
    }
}

function updateprofile(usersRegisterArray, boxSuccess, messageSuccess, newPassword, newPhone, newCep, newStreet, newDistrict, newCity, newUf, newNumber, newComplement){

    for (let i in usersRegisterArray){
        if(usersRegisterArray[i].id == userVacancyApply.id){
            usersRegisterArray[i].password = newPassword
            usersRegisterArray[i].phone = newPhone
            usersRegisterArray[i].adress.cep = newCep
            usersRegisterArray[i].adress.uf = newUf
            usersRegisterArray[i].adress.city = newCity
            usersRegisterArray[i].adress.district = newDistrict
            usersRegisterArray[i].adress.street = newStreet
            usersRegisterArray[i].adress.number = newNumber
            usersRegisterArray[i].adress.complement = newComplement

            boxSuccess.style.display = "flex"
            messageSuccess.innerHTML = "Profile edited successfully"
        
            setTimeout(()=>{
                boxSuccess.style.display = "none"
                messageSuccess.innerHTML = ""
                updateUsers(usersRegisterArray)
                fillProfilePage(usersRegisterArray[i])
            }, 3000)
        }
    }
}

function updateProfileNoPassword(usersRegisterArray, boxSuccess, messageSuccess, newPhone, newCep, newStreet, newDistrict, newCity, newUf, newNumber, newComplement){
    
    for (let i in usersRegisterArray){
        if(usersRegisterArray[i].id == userVacancyApply.id){
            usersRegisterArray[i].phone = newPhone
            usersRegisterArray[i].adress.cep = newCep
            usersRegisterArray[i].adress.uf = newUf
            usersRegisterArray[i].adress.city = newCity
            usersRegisterArray[i].adress.district = newDistrict
            usersRegisterArray[i].adress.street = newStreet
            usersRegisterArray[i].adress.number = newNumber
            usersRegisterArray[i].adress.complement = newComplement

            boxSuccess.style.display = "flex"
            messageSuccess.innerHTML = "Profile edited successfully"

            userVacancyApply = usersRegisterArray[i]

            setTimeout(()=>{
                boxSuccess.style.display = "none"
                messageSuccess.innerHTML = ""
                updateUsers(usersRegisterArray)
                fillProfilePage(usersRegisterArray[i])
            }, 3000)
        }
    }

}
function loadEditProfile(){
    // Button events save edit profile
    let buttonSaveEdit = document.querySelector(".save-edit-profile")
    buttonSaveEdit.addEventListener("click", callEditProfile)

    // Button event cancel
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

    //Box MessageProfile
    let boxMessageProfile = document.querySelector(".box-edit-user")

    // Array inputs
    let ArrayInputs = [phoneEdit, cepEdit, streetEdit, districtEdit, cityEdit, ufEdit, numberEdit]

    // Array Inputs value
    let ArrayInputsValue = [
        phoneEdit.value, cepEdit.value, streetEdit.value, 
        districtEdit.value, cityEdit.value, ufEdit.value, 
        numberEdit.value
    ]

    // Verify empty fields
    for(let i in ArrayInputsValue){
        if(ArrayInputsValue[i] == ""){
            ArrayInputs[i].classList.add("empty")
        }else{
            ArrayInputs[i].classList.remove("empty")
        }
    }
  
    // Check passwords the same
    if(currentUser.password == currentPassword.value){ 
        // Success message
        boxMessageProfile.style.opacity = "0"
        boxMessageProfile.innerHTML = ''
        boxMessageProfile.classList.remove("error-edit-user")
        currentPassword.classList.remove("empty")
        // Calls save user and fill box functions
        fillBoxMessageSuccess()
        updateProfile(usersRegisterArray, ArrayInputsValue, complementEdit.value, passwordEdit.value)
    }else{
        boxMessageProfile.style.opacity = "1"
        boxMessageProfile.innerHTML = '<i class="bi bi-x-lg"></i> Current password incorrect'
        boxMessageProfile.classList.add("error-edit-user")
        currentPassword.classList.add("empty")
    }
}

function fillBoxMessageSuccess(){
    //Box MessageProfile
    let boxMessageProfile = document.querySelector(".box-edit-user")

    boxMessageProfile.style.opacity = "1"
    boxMessageProfile.innerHTML = '<i class="bi bi-bookmark-check"></i> Profile edited successfully'
    boxMessageProfile.classList.add("success-edit-user")

    setTimeout(()=>{
        boxMessageProfile.style.opacity = "0"
        boxMessageProfile.innerHTML = ''
        boxMessageProfile.classList.remove("success-edit-user")
    }, 3000)
}

function updateProfile(usersRegisterArray, ArrayInputsValue, newComplement, newPassword){
    // Update user information, save to localStorage and refresh the page

    let [newPhone, newCep, newStreet, newDistrict, newCity, newUf, newNumber,] = ArrayInputsValue
    
    for (let i in usersRegisterArray){
        if(usersRegisterArray[i].id == currentUser.id){
            usersRegisterArray[i].phone = newPhone
            usersRegisterArray[i].adress.cep = newCep
            usersRegisterArray[i].adress.uf = newUf
            usersRegisterArray[i].adress.city = newCity
            usersRegisterArray[i].adress.district = newDistrict
            usersRegisterArray[i].adress.street = newStreet
            usersRegisterArray[i].adress.number = newNumber
            usersRegisterArray[i].adress.complement = newComplement
            
            //Checks if a new password has been added
            newPassword !== "" ? usersRegisterArray[i].password = newPassword : null
            
            currentUser = usersRegisterArray[i] // VERIFICAR NECESSIDADE

            //Clean fields
            setTimeout(()=>{
                updateUsers(usersRegisterArray)
                fillProfilePage()
            }, 3000)
        }
    }
}


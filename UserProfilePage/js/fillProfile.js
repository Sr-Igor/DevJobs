// This function automatically fills the fields on the user profile page
function fillFieldsProfilePage(){
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    let cacheUserInfo =  JSON.parse(localStorage.getItem("cacheUserInfo"))
    let cache = cacheUserInfo[2]
    let user = ""

    // Verify correct user
    for (let i in usersRegisterArray){
        if(usersRegisterArray[i].id == cache.id)
        user = usersRegisterArray[i]
    }
    
    //Infos Fields
    let titleName = document.querySelector(".company-title")
    let completName = document.querySelector(".completName-profile")
    let phone = document.querySelector(".phone-profile")
    let cpf = document.querySelector(".cpf-profile")
    let cep = document.querySelector(".cep-profile")
    let street = document.querySelector(".street-profile")
    let district = document.querySelector(".district-profile")
    let city = document.querySelector(".city-profile")
    let uf = document.querySelector(".uf-profile")
    let number = document.querySelector(".number-profile")
    let complement = document.querySelector(".complement-profile")

    //Password fields 
    let currentPassword = document.querySelector(".password-profile")
    let newPassword = document.querySelector(".new-password")
    
    titleName.innerHTML = user.firstName
    completName.value =`${user.firstName} ${user.lastName}`
    phone.value = user.phone
    cpf.value = user.cpf
    cep.value = user.address.cep
    street.value = user.address.street
    district.value = user.address.district
    city.value = user.address.city
    uf.value = user.address.uf
    number.value = user.address.number
    complement.value = user.address.complement
    currentPassword.value = ""
    newPassword.value = ""
}

function fillInputsProfile(){

    let completNameProfile = document.querySelector(".completName-profile")
    let passwordProfile = document.querySelector(".password-profile")
    let phoneProfile = document.querySelector(".phone-profile")
    let cpfProfile = document.querySelector(".cpf-profile")
    let cepProfile = document.querySelector(".cep-profile")
    let streetProfile = document.querySelector(".street-profile")
    let districtProfile = document.querySelector(".district-profile")
    let cityProfile = document.querySelector(".city-profile")
    let ufProfile = document.querySelector(".uf-profile")
    let numberProfile = document.querySelector(".number-profile")
    let complementProfile = document.querySelector(".complement-profile")

    completNameProfile.value = `${userVacancyApply.firstName} ${userVacancyApply.lastName}`
    passwordProfile.value = userVacancyApply.password
    phoneProfile.value = userVacancyApply.phone
    cpfProfile.value = userVacancyApply.cpf
    cepProfile.value = userVacancyApply.adress.cep
    streetProfile.value = userVacancyApply.adress.steet
    districtProfile.value = userVacancyApply.adress.district
    cityProfile.value = userVacancyApply.adress.city
    ufProfile.value = userVacancyApply.adress.uf
    numberProfile.value = userVacancyApply.adress.number
    complementProfile.value = userVacancyApply.adress.complement  
}

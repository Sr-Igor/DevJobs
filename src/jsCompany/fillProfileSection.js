function fillProfilePage(){
    let companyTitle = document.querySelector(".company-title")
    let companyName = document.querySelector(".edit-company-name")
    let currrentPassword = document.querySelector(".current-password")
    let newPassword = document.querySelector(".new-password")
    let phone = document.querySelector(".phone-edit")
    let cnpj = document.querySelector(".cnpj-edit")
    let cep = document.querySelector(".cep-edit")
    let street = document.querySelector(".street-edit")
    let district = document.querySelector(".district-edit")
    let city = document.querySelector(".city-edit")
    let uf = document.querySelector(".uf-edit")
    let number= document.querySelector(".number-edit")
    let complement = document.querySelector(".complement-edit")
    
    companyTitle.innerHTML = currentCompany.companyName
    companyName.value = currentCompany.companyName
    currrentPassword.value = ""
    newPassword.value = ""
    phone.value = currentCompany. phone
    cnpj.value = currentCompany.cnpj
    cep.value = currentCompany.adress.cep
    street.value = currentCompany.adress.street
    district.value = currentCompany.adress.district
    city.value = currentCompany.adress.city
    uf.value = currentCompany.adress.uf
    number.value = currentCompany.adress.number
    complement.value = currentCompany.adress.complement
}

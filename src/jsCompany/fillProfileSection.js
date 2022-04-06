// This function automatically fills the fields on the company profile page
function fillProfilePage(){
    let userCompany = ""
    let companiesArray = JSON.parse(localStorage.getItem("companiesArray"))
    for (let i in companiesArray){
       if(companiesArray[i].id == currentCompany.id){
            userCompany = companiesArray[i]
       }
    }

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
    
    companyTitle.innerHTML = userCompany.companyName
    companyName.value = userCompany.companyName
    currrentPassword.value = ""
    newPassword.value = ""
    phone.value = userCompany.phone
    cnpj.value = userCompany.cnpj
    cep.value = userCompany.address.cep
    street.value = userCompany.address.street
    district.value = userCompany.address.district
    city.value = userCompany.address.city
    uf.value = userCompany.address.uf
    number.value = userCompany.address.number
    complement.value = userCompany.address.complement
}

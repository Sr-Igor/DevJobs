//This function fills in the address fields during registration

//Adress
let cepRegister = document.querySelector(".cep-company")
let streetRegister = document.querySelector(".street-company")
let districtrRegister = document.querySelector(".district-company")
let cityRegister = document.querySelector(".city-company")
let ufRgeister = document.querySelector(".uf-company")


cepRegister.addEventListener('blur', ()=>{
    let correctCep = cepRegister.value
    options ={
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    
    fetch(`https://viacep.com.br/ws/${correctCep}/json/`, options)
    .then(response => response.json()
        .then(data =>{
            companyStreet.value = data.logradouro
            companyStreet.setAttribute('disabled', true)

            companyDistrict.value = data.bairro
            companyDistrict.setAttribute('disabled', true)

            companyCity.value = data.localidade
            companyCity.setAttribute('disabled', true)

            companyUf.value = data.uf
            companyUf.setAttribute('disabled', true)
        })
    )
    .catch(()=>console.log('Fetch Error')
    )
})
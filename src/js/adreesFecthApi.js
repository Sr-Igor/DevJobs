//Adress fields
let cepRegister = document.querySelector(".cep-register")
let streetRegister = document.querySelector(".street-register")
let districtrRegister = document.querySelector(".district-register")
let cityRegister = document.querySelector(".city-register")
let ufRgeister = document.querySelector(".uf-register")

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
            streetRegister.value = data.logradouro
            streetRegister.setAttribute('disabled', true)

            districtrRegister.value = data.bairro
            districtrRegister.setAttribute('disabled', true)

            cityRegister.value = data.localidade
            cityRegister.setAttribute('disabled', true)

            ufRgeister.value = data.uf
            ufRgeister.setAttribute('disabled', true)
        })
    )
    .catch(()=>{console.log('Fecth Error')}
    )
})
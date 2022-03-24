
function availableUsersRegister(){
    let registerButton = document.querySelector(".register-button")
    registerButton.addEventListener('click', registerUser)
    var registerModal = new bootstrap.Modal(document.getElementById('RegisterModal'))
}

function registerUser(e){
    e.preventDefault()
    //box error
    let messageError = document.querySelector(".error-register-message")
    let boxError = document.querySelector(".box-error-register")

    //User
    let firstName = document.querySelector(".first-name-register")
    let lastName = document.querySelector(".last-name-register")
    let email = document.querySelector(".email-register")
    let emailConfirm = document.querySelector(".email-confirm-register")
    let password = document.querySelector(".password-register")
    let passwordRegister = document.querySelector(".password-confirm-register")
    let phone = document.querySelector(".phone-register")
    let cpf = document.querySelector(".cpf-register")

    //Adress
    let cep = document.querySelector(".cep-register")
    let street = document.querySelector(".street-register")
    let district = document.querySelector(".district-register")
    let city = document.querySelector(".city-register")
    let uf = document.querySelector(".uf-register")
    let number = document.querySelector(".number-register")
    let complement = document.querySelector(".complement-register")

    let infosRegister = [
        firstName, lastName, email, emailConfirm, password, passwordRegister, phone, cpf,
        cep, street, district, city, uf, number,
    ]

    let infosRegisterValue = [
        firstName.value, lastName.value, email.value, emailConfirm.value, password.value, passwordRegister.value, phone.value, cpf.value,
        cep.value, street.value, district.value, city.value, uf.value, number.value,
    ]


    if(infosRegisterValue.includes("")){
        for(let i in infosRegister){
            if(infosRegisterValue[i] == ""){
                infosRegister[i].classList.add("empty")
            }else{
                infosRegister[i].classList.remove("empty")
            }
        }
        return
    }

    if(!infosRegisterValue.includes("")){
        if(emailConfirm.value !== email.value){
            boxError.style.display = "flex"
            messageError.innerHTML = "Confirmation email is different from email"
            emailConfirm.classList.add("empty")
            email.classList.add("empty")
            return
        }else{
            boxError.style.display = "none"
            messageError.innerHTML = ""
            emailConfirm.classList.remove("empty")
            email.classList.remove("empty")
        }

        if(password.value !== passwordRegister.value){
            boxError.style.display = "flex"
            messageError.innerHTML = "Confirmation password is different from password"
            passwordRegister.classList.add("empty")
            password.classList.add("empty")
            return
        }else{
            boxError.style.display = "none"
            messageError.innerHTML = ""
            passwordRegister.classList.remove("empty")
            password.classList.remove("empty")
        }

        let cpfUsers = []
        for(let i in users){
            cpfUsers.push(users[i].cpf)
        }

        if(cpfUsers.includes(cpf.value)){
            boxError.style.display = "flex"
            messageError.innerHTML = "This CPF is already registered"
            cpf.classList.add("empty")
            return
        }else{
            boxError.style.display = "none"
            messageError.innerHTML = ""
            cpf.classList.remove("empty")
        }

        idUserGenerator(firstName, lastName, email, emailConfirm, password, passwordRegister, phone, cpf,
            cep, street, district, city, uf, number, complement)
    }
}
  

function idUserGenerator(firstName, lastName, email, emailConfirm, password, passwordRegister, phone, cpf,
    cep, street, district, city, uf, number, complement){

    //box success
    let messageSuccess = document.querySelector(".success-register-message")
    let boxSuccess = document.querySelector(".box-success-register")


    let idRandomUser = Math.floor(Math.random() * 10000)

    let idUsers = []
    for (let i in users){
        idUsers.push(users[i].id)
    }
    
    if(idUsers.includes(idRandomUser)){
        idRandomUser()
    }

    users.push(
        {
            id: idRandomUser,
            email: email.value,
            firstName:firstName.value,
            lastName: lastName.value,
            password: password.value,
            phone: phone.value,
            cpf: cpf.value,
            adress: {
                cep:cep.value,
                uf: uf.value.toUpperCase(),
                city: city.value,
                district: district.value,
                street: street.value,
                number: number.value,
                complement: complement.value
            }
        }
    )

    messageSuccess.innerHTML = "Successfully registered, now you can login"
    boxSuccess.style.display = "flex"

    setTimeout(()=>{

        registerModal.hide()

        firstName.value = ""
        lastName.value = ""
        email.value = ""
        emailConfirm.value = ""
        password.value = ""
        passwordRegister.value = ""
        phone.value = ""
        cpf.value = ""
        cep.value = ""
        street.value = ""
        district.value = ""
        city.value = ""
        uf.value = ""
        number.value = ""

        messageSuccess.innerHTML = ""
        boxSuccess.style.display = "none"
    },1000)
}

availableUsersRegister()
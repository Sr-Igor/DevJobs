
function availableUsersRegister(){
    let registerButton = document.querySelector(".register-button")
    registerButton.addEventListener('click', callNewUsers)
}

function registerUser(usersRegisterArray){
    event.preventDefault()

    //box error
    let boxMessage = document.querySelector(".box-register-message-user")

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


    for(let i in infosRegister){
        infosRegister[i].classList.remove("empty")
    }


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
            boxMessage.style.opacity= "1"
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> Confirmation email is different from email'
            boxMessage.classList.add("error-register-user")
            emailConfirm.classList.add("empty")
            email.classList.add("empty")
            return
        }else{
            boxMessage.style.opacity= "0"
            boxMessage.innerHTML = ""
            boxMessage.classList.remove("error-register-user")
            emailConfirm.classList.remove("empty")
            email.classList.remove("empty")
        }

        if(password.value !== passwordRegister.value){
            boxMessage.style.opacity= "1"
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> Confirmation password is different from password'
            boxMessage.classList.add("error-register-user")
            passwordRegister.classList.add("empty")
            password.classList.add("empty")
            return
        }else{
            boxMessage.style.opacity= "0"
            boxMessage.innerHTML = ""
            boxMessage.classList.remove("error-register-user")
            passwordRegister.classList.remove("empty")
            password.classList.remove("empty")
        }

        let cpfUsers = []
        for(let i in users){
            cpfUsers.push(users[i].cpf)
        }

        if(cpfUsers.includes(cpf.value)){
            boxMessage.style.opacity= "1"
            boxMessage.innerHTML = '<i class="bi bi-x-lg"></i> This CPF is already registered'
            boxMessage.classList.add("error-register-user")
            cpf.classList.add("empty")
            return
        }else{
            boxMessage.style.opacity= "0"
            boxMessage.innerHTML = ""
            boxMessage.classList.remove("error-register-user")
            cpf.classList.remove("empty")
        }

        idUserGenerator(usersRegisterArray, firstName, lastName, email, emailConfirm, password, passwordRegister, phone, cpf,
            cep, street, district, city, uf, number, complement)

            boxMessage.style.opacity= "1"
            boxMessage.innerHTML = '<i class="bi bi-bookmark-star"></i> Successfully registered, now you can login'
            boxMessage.classList.add("success-register-user")

            setTimeout(()=>{
                boxMessage.style.opacity= "0"
                boxMessage.innerHTML = ''
                boxMessage.classList.remove("success-register-user")
            },3000) 
    }
}
  

function idUserGenerator(usersRegisterArray, firstName, lastName, email, emailConfirm, password, passwordRegister, phone, cpf,
    cep, street, district, city, uf, number, complement){

    let idRandomUser = Math.floor(Math.random() * 10000)

    let idUsers = []
    for (let i in users){
        idUsers.push(users[i].id)
    }
    
    if(idUsers.includes(idRandomUser)){
        idRandomUser()
    }

    usersRegisterArray.push(
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
                complement: complement.value,
            }
        },
    )

    setTimeout(()=>{

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
        complement.value = ""
        messageSuccess.innerHTML = ""
        boxSuccess.style.opacity= "0"
    },1000)
    updateUsers(usersRegisterArray)
}

availableUsersRegister()
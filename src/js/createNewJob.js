let vacancyName = document.querySelector(".vacancy-name")
let type = document.querySelector(".type")
let periody = document.querySelector(".periody");
let payment = document.querySelector(".payment")
let requirements = document.querySelector(".requirements-area")
let benefits = document.querySelector(".benefits-area")
let desirable = document.querySelector('.desirable-area')
let adicionais = document.querySelector(".aditional-area")


let public = document.querySelector(".public-vacancy")
public.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputs = [vacancyName, type, payment, requirements, benefits, desirable, adicionais]
    let inputsValue = [vacancyName.value, type.value, payment.value, requirements.value, benefits.value, desirable.value, adicionais.value]
    let time = periody.options[periody.selectedIndex].innerText;

    if(inputsValue.includes("") || time == "Open this select menu"){

        let errorMessage = document.querySelector(".error-create-job")

        //Transition message error 
        errorMessage.style.display = "block"
        errorMessage.style.opacity = "1"
        setTimeout(()=>{errorMessage.style.opacity = "0"},3000)
        setTimeout(()=>{errorMessage.style.display = "none"},3300)
        
        // Verify empty inputs 
        for (let i in inputs){
            inputs[i].value == "" ? inputs[i].classList.add("empty") : inputs[i].classList.remove("empty")
        }
        time == "Open this select menu" ? periody.classList.add("empty") : periody.classList.remove("empty")
    
    }else{
        let requirementsArray = requirements.value.split(",")
        let benefitsArray = benefits.value.split(",")
        let desirableArray = desirable.value.split(",")

        vacancys.push(
            {    
                id:2,
                companyName: "teste",
                vacancyName: vacancyName.value,
                status: "In Process",
                type: type.value,
                time: time,
                payment: payment.value,
                requirements: requirementsArray,
                desirable: desirableArray,
                benefits: benefitsArray,
                additional: adicionais.value
            }
        )
        
        fillboxes()
    }
})
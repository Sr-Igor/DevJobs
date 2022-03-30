function createJob(vacanciesArray){
    let public = document.querySelector(".public-vacancy")
    public.addEventListener('click', (e)=>{
        e.preventDefault()
    
        let vacancyName = document.querySelector(".vacancy-name")
        let type = document.querySelector(".type")
        let periody = document.querySelector(".periody");
        let payment = document.querySelector(".payment")
        let requirements = document.querySelector(".requirements-area")
        let benefits = document.querySelector(".benefits-area")
        let desirable = document.querySelector('.desirable-area')
        let adicionais = document.querySelector(".aditional-area")
    
        let inputs = [vacancyName, type, payment, requirements, benefits, desirable, adicionais]
        let inputsValue = [vacancyName.value, type.value, payment.value, requirements.value, benefits.value, desirable.value, adicionais.value]
        let time = periody.options[periody.selectedIndex].innerText;
               
        let boxMessage = document.querySelector(".box-create-job")

        if(inputsValue.includes("") || time == ""){
    
            //Transition message error 
            boxMessage .classList.add("error-box")
            boxMessage .innerHTML = '<i class="bi bi-x"></i> Please. Complete all fields correctly!'
            boxMessage .style.opacity = "1"
            setTimeout(()=>{boxMessage .style.opacity = "0"},3000)
            setTimeout(()=>{boxMessage .innerHTML = "", boxMessage .classList.remove("error-box")},3300)
            
            // Verify empty inputs 
            for (let i in inputs){
                inputs[i].value == "" ? inputs[i].classList.add("empty") : inputs[i].classList.remove("empty")
            }
            time == "" ? periody.classList.add("empty") : periody.classList.remove("empty")
        
        }else{
            for (let i in inputs){
                inputs[i].classList.remove("empty")
            }

            periody.classList.remove("empty")

            //Transition message success 
            boxMessage .classList.add("success-box")
            boxMessage .innerHTML = '<i class="bi bi-bookmark-check"></i> Job created successfully!'
            boxMessage .style.opacity = "1"
            setTimeout(()=>{boxMessage .style.opacity = "0"},3000)
            setTimeout(()=>{boxMessage .innerHTML = "", boxMessage .classList.remove("success-box")},3300)

            let requirementsArray = requirements.value.split(",")
            let benefitsArray = benefits.value.split(",")
            let desirableArray = desirable.value.split(",")
    
            createVacancyId(vacanciesArray, vacancyName, type, payment, time, adicionais, requirementsArray, benefitsArray, desirableArray,)
            
            vacancyName.value = ""
            type.value = ""
            payment.value = ""
            requirements.value = ""
            benefits.value = ""
            desirable.value = ""
            adicionais.value = ""
        }
    })
    
    function createVacancyId(vacanciesArray, vacancyName, type, payment, time, adicionais, requirementsArray, benefitsArray, desirableArray,){
        
        let randomIdVacancy = Math.floor(Math.random() * 1000)
        let vacanciesId = []
    
        for (let i in vacanciesArray){
            vacanciesId.push(vacanciesArray[i].id)
        }
    
        if(vacanciesId.includes(randomIdVacancy)){
            createVacancyId()
        }
    
        vacanciesArray.push(
            {   
                idCreator: currentUserCompany.id,
                id: randomIdVacancy,
                companyName: currentUserCompany.companyName,
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
        updateVacancies(vacanciesArray)
    }
}

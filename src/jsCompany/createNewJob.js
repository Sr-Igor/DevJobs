function createJob(vacanciesArray){
    //Select the create vacancy button
    let public = document.querySelector(".public-vacancy")
    public.addEventListener('click', (e)=>{
        e.preventDefault()
        
        // Element fields
        let vacancyName = document.querySelector(".vacancy-name")
        let type = document.querySelector(".type")
        let periody = document.querySelector(".periody");
        let payment = document.querySelector(".payment")
        let requirements = document.querySelector(".requirements-area")
        let benefits = document.querySelector(".benefits-area")
        let desirable = document.querySelector('.desirable-area')
        let adicionais = document.querySelector(".aditional-area")
        
        // Array with the elements 
        let inputs = {
            vacancyName, type, payment, 
            requirements, benefits, desirable, 
            adicionais
        }

        // Object with the value of the elements
        let inputsValue = [
            vacancyName.value, type.value, payment.value, 
            requirements.value, benefits.value, desirable.value, 
            adicionais.value
        ]
        
        //Field value with working time
        let time = periody.options[periody.selectedIndex].innerText;
        
        //Box message
        let boxMessage = document.querySelector(".box-create-job")

        // Verify fields
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
            // Remove error class
            for (let i in inputs){inputs[i].classList.remove("empty")}
            periody.classList.remove("empty")

            //Transition message success 
            boxMessage .classList.add("success-box")
            boxMessage .innerHTML = '<i class="bi bi-bookmark-check"></i> Job created successfully!'
            boxMessage .style.opacity = "1"
            setTimeout(()=>{boxMessage .style.opacity = "0"},3000)
            setTimeout(()=>{boxMessage .innerHTML = "", boxMessage .classList.remove("success-box")},3300)

            // Separating elements from lists
            let requirementsArray = requirements.value.split(",")
            let benefitsArray = benefits.value.split(",")
            let desirableArray = desirable.value.split(",")
            let listJob = {requirementsArray, benefitsArray, desirableArray}
    
            createVacancyId(vacanciesArray, inputs, listJob, time)
            
            for (let i in inputs){inputs[i].value = ""}
        }
    })
}
function createVacancyId(vacanciesArray, inputs, listJob, time){
        
    let vacanciesId = []
    for (let i in vacanciesArray){vacanciesId.push(vacanciesArray[i].id)}

    // This function generates an id
    let idRandomVacancy = ""
    let randomUser = () => idRandomVacancy = Math.floor(Math.random() * 10000)    
    randomUser()
    // If id is existent, recursion is used to generate another id
    if(vacanciesId.includes(idRandomVacancy)){randomUser()}

    // Adding the new vacancie to the simulated database
    vacanciesArray.unshift(
        {   
            idCreator: currentCompany.id,
            id: idRandomVacancy,
            companyName: currentCompany.companyName,
            vacancyName: inputs.vacancyName.value,
            status: "In Process",
            type: inputs.type.value,
            uf: currentCompany.adress.uf,
            time: time,
            payment: inputs.payment.value,
            requirements: listJob.requirementsArray,
            desirable: listJob.desirableArray,
            benefits: listJob.benefitsArray,
            additional: inputs.adicionais.value
        }
    )
    //Saving the new vacancy in localStorage
    updateVacancies(vacanciesArray)
}

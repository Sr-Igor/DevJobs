function searchCorrectBox(parametrsArray){
    // Finds the vacancy corresponding to the clicked item
    let {vacanciesArray} = parametrsArray
    let {vacanciesArrayFinished} = parametrsArray

    let clickedItem = event.currentTarget
    let idCard = clickedItem.getAttribute("data-key")

    for (let i in vacanciesArray){
        if(vacanciesArray[i].id == idCard){
            //Call the function that fills the modal
            fillBox(vacanciesArray[i], parametrsArray)
        }
    }

    for (let i in vacanciesArrayFinished){
        if(vacanciesArrayFinished[i].id == idCard){
            fillBox(vacanciesArrayFinished[i], parametrsArray)
        }
    }
}

function fillBox(clickedVacancy, parametrsArray){
    //modal fill
    let {vacanciesArray, applayedsArray, usersRegisterArray, vacanciesArrayFinished} = parametrsArray
    
    document.querySelector(".job-modal-content").innerHTML = `
    <div class="modal-header">
        <img src="/src/icons/company-icon.png" alt="logo-job">
        <h5 class="title-modal">${clickedVacancy.vacancyName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="col-12 box-finised-vacancy"></div>
        </div>
        <div class="row">
            <div class="col-4">
                <p class="title-info">Requisitos:</p>
                <ul class="company-requirements"></ul>
            </div>
            <div class="col-4">
                <p class="title-info">Desejavel:</p>
                <ul class="company-desirable"></ul>
            </div>
            <div class="col-4">
                <div class="row">
                    <p class="title-info">Tipo: <strong>${clickedVacancy.type}</strong></p>
                </div>
            </div>
            <div class="row">
                <p class="title-info">Periodo: <strong>${clickedVacancy.time}</strong></p>
            </div>
            <div class="row">
                <p class="title-info">Salario:</p>
                <strong class="fs-4">R$ ${clickedVacancy.payment}</strong>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <p class="title-info">Beneficios:</p>
                <ul class="company-benefits"></ul>
            </div>
            <div class="col-6">
            <div class="row">
                <p class="title-info">Informações Adicionais:</p>
                <span>${clickedVacancy.additional}</span>
            </div>
        </div>
    </div>
    <div class="modal-footer">

    </div>`

    //Filling modal lists
    let requirements = document.querySelector(".company-requirements")
    let desirable = document.querySelector(".company-desirable")
    let benefits = document.querySelector(".company-benefits")

    let requirementsHTML = ""
    let desirableHTML = ""
    let benefitsHTML = ""

    for(let i = 0; i < clickedVacancy.requirements.length; i++){
        requirementsHTML += `<li>${clickedVacancy.requirements[i]}</li>`
    }

    for(let i = 0; i < clickedVacancy.desirable.length; i++){
        desirableHTML += `<li>${clickedVacancy.desirable[i]}</li>`
    }

    for(let i = 0; i < clickedVacancy.benefits.length; i++){
        benefitsHTML += `<li>${clickedVacancy.benefits[i]}</li>`
    }

    requirements.innerHTML = requirementsHTML
    desirable.innerHTML = desirableHTML
    benefits.innerHTML = benefitsHTML

    console.log(clickedVacancy.status)
    let modalFooter = document.querySelector(".modal-footer")
    if(clickedVacancy.status == "Finished"){
        modalFooter.innerHTML = `
        <button type="button" class="btn btn-success btn-open-vacancy">Open Vacancy</button>
        <button type="button" class="btn btn-primary see-applyeds" data-bs-toggle="modal" data-bs-target="#ApplyedsModal">See Apllayeds</button>`
        OpenVacancy(clickedVacancy, vacanciesArray, vacanciesArrayFinished)
    }
    else{
        modalFooter.innerHTML = `
        <button type="button" class="btn btn-danger btn-finish-vacancy">Finish Vacancy</button>
        <button type="button" class="btn btn-primary see-applyeds" data-bs-toggle="modal" data-bs-target="#ApplyedsModal">See Apllayeds</button>`
        finishVacancy(clickedVacancy, vacanciesArray, vacanciesArrayFinished)
    }

    //Calls the function that generates the list of applied users
    usersApplayeds(clickedVacancy, applayedsArray, usersRegisterArray)

}

function usersApplayeds(clickedVacancy, applayedsArray, usersRegisterArray){
    //Filling the modal with the list of registered users

    document.querySelector(".see-applyeds").addEventListener("click", ()=>{
        // Capture of users registered in the respective vacancy
        let idUsers = []
        for (let i in applayedsArray){
           if(applayedsArray[i].vacancysCode.includes(clickedVacancy.id)){
               idUsers.push(applayedsArray[i].idUser)
           }
        }
        
        //capture user name
        let usersApplayedVacancy = []
        for (let i in usersRegisterArray){
            if(idUsers.includes(usersRegisterArray[i].id)){
                usersApplayedVacancy.push(`${usersRegisterArray[i].firstName} ${usersRegisterArray[i].lastName}`)
            }
        }

        //writing list in modal
        let usersApplyedHtml = ""
        for(let i in usersApplayedVacancy){
            usersApplyedHtml += `<li>${usersApplayedVacancy[i]}</li>`
        }

        // Check if there are registered users
        if(usersApplayedVacancy.length == 0){
            usersApplyedHtml = "There are no applications for this vacancy yet."
        }
    
        //writing list in modal in HTML
        document.querySelector(".applayeds-modal-content").innerHTML = `
        <div class="modal-header">
            <img src="/src/icons/company-icon.png" alt="logo-job">
            <h5 class="title-modal">${clickedVacancy.vacancyName}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <span class="title-applyeds-vacancys">Enrolled in the vacancies</span>
            <ul class="usersApllayed">${usersApplyedHtml}</ul>
        </div>`
    })
}
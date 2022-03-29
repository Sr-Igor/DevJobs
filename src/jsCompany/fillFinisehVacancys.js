function fillBoxesVacancyFinised(vacanciesArrayFinished){

    let vacancysFinisedCompany =[]
    for(let i in vacanciesArrayFinished){
        if(vacanciesArrayFinished[i].idCreator == currentUserCompany.id){
            vacancysFinisedCompany.push(vacanciesArrayFinished[i])
        }
    }
    writeBoxesFinised(vacancysFinisedCompany)
}

function writeBoxesFinised(vacancysCompany){

    let squareBoxes = document.querySelector(".box-jobs-finished")
    squareBoxes.innerHTML = ""
    let boxesHTML = ""
    for (let i in vacancysCompany){
        boxesHTML += `
            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key="${vacancysCompany[i].id}">
                <div class="box-header">
                    <img src="/src/icons/company-icon.png" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">${vacancysCompany[i].time}</div>
                    </div>
                    <div class="title-job">${vacancysCompany[i].vacancyName}</div>
                    <div class="language">${vacancysCompany[i].companyName}</div>
                    <div class="box-footer" style="color: #d60000;">Status: ${vacancysCompany[i].status}</div>
                </div>
            </div>
        `
    }
    squareBoxes.innerHTML = boxesHTML

    if(vacancysCompany.length == 0){
        squareBoxes.innerHTML = "You have no vacancies completed"
    }

    clickCardFinished()
}

function clickCardFinished(){
    let allBoxes = document.querySelectorAll(".box")
    allBoxes.forEach(item =>{
        item.addEventListener("click", searchCorrectBoxFinished)
    })
}

function searchCorrectBoxFinished(e){
    let clickedItem = e.currentTarget
    let idCard = clickedItem.getAttribute("data-key")

    for (let i in vacancysFinished){
        if(vacancysFinished[i].id == idCard){
            fillBoxFinised(vacancysFinished[i])
        }
    }
}

function fillBoxFinised(clickedVacancy){
    
    document.querySelector(".job-modal-content").innerHTML = `
    <div class="modal-header">
    <img src="/src/images/bancoInter.png" alt="logo-job">
    <h5 class="title-modal">${clickedVacancy.vacancyName}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <div class="row">
    <div class="col-12 box-finised-vacancy">
        This vacancy has been successfully completed
    </div>
    </div>
    <div class="row">
        <div class="col-4">
            <p class="title-info">Requisitos:</p>
            <ul class="company-requirements">

            </ul>
        </div>
        <div class="col-4">
            <p class="title-info">Desejavel:</p>
            <ul class="company-desirable">

            </ul>
        </div>
        <div class="col-4">
            <div class="row">
                <p class="title-info">Tipo: <strong>${clickedVacancy.type}</strong></p>
            </div>
            <div class="row">
                <p class="title-info">Periodo: <strong>${clickedVacancy.time}</strong></p>
            </div>
            <div class="row">
                <p class="title-info">Salario:</p>
                <strong class="fs-4">R$ ${clickedVacancy.payment}</strong>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
            <p class="title-info">Beneficios:</p>
            <ul class="company-benefits">

            </ul>
        </div>
        <div class="col-6">
            <div class="row">
                <p class="title-info">Informações Adicionais:</p>
                <span>${clickedVacancy.additional}</span>
            </div>
        </div>
    </div>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-success btn-open-vacancy">Open Vacancy</button>
    <button type="button" class="btn btn-primary see-applyeds" data-bs-toggle="modal" data-bs-target="#ApplyedsModal">See Apllayeds</button>
    </div>
    `
    //Fill Boxes
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

    usersApplayedsFinished(clickedVacancy)
    OpenVacancy(clickedVacancy)
}

function usersApplayedsFinished(clickedVacancy){
    document.querySelector(".see-applyeds").addEventListener("click", ()=>{
        let idUsers = []
        for (let i in vacancyId){
           if(vacancyId[i].vacancysCode.includes(clickedVacancy.id)){
               idUsers.push(vacancyId[i].idUser)
           }
        }
        
        let usersApplayedVacancy = []
        for (let i in users){
            if(idUsers.includes(users[i].id)){
                usersApplayedVacancy.push(`${users[i].firstName} ${users[i].lastName}`)
            }
        }

        let usersApplyedHtml = ""
    
        for(let i in usersApplayedVacancy){
            usersApplyedHtml += `<li>${usersApplayedVacancy[i]}</li>`
        }
    
        document.querySelector(".applayeds-modal-content").innerHTML = `
        <div class="modal-header">
        <img src="/src/images/bancoInter.png" alt="logo-job">
        <h5 class="title-modal">${clickedVacancy.vacancyName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <span class="title-applyeds-vacancys">Enrolled in the vacancies</span>
        <ul class="usersApllayed">
        ${usersApplyedHtml}
        </ul>
        </div>
        `
    })
}
function fillSubscriptions(user, applayedsArray, vacanciesArray){
    for(let i in applayedsArray){
        if(applayedsArray[i].idUser == user){
            VerifyApplyedVacancys(applayedsArray[i].vacancysCode, vacanciesArray)
        }
    }
    
}

function VerifyApplyedVacancys(vacancysCode, vacanciesArray){
    //Box
    let boxVacancy = document.querySelector(".box-vagancys")

    // Applied open vacancies
    let userOpenVacancys = []

    // Checks the user's open vacancies and calls the function to fill the screen
    for(let i in vacanciesArray){
        if(vacancysCode.includes(vacanciesArray[i].id)){
            userOpenVacancys.push(vacanciesArray[i])            
        }
    }

    // Check empty apply 
    if(userOpenVacancys.length > 0){
        fillScreen(userOpenVacancys, vacanciesArray)  
    }else{
        boxVacancy.innerHTML = "You are not applying for any open vacancy"
    }
}

function fillScreen(userOpenVacancys, vacanciesArray){
    //Box
    let boxVacancy = document.querySelector(".box-vagancys")

    //Writing vacancies in the variable
    let boxVacancyHTML = ""
    for (let i in userOpenVacancys){
        boxVacancyHTML += `
        <div class="vacancy" data-key="${userOpenVacancys[i].id}">
            <div class="company-name"><strong>Company: </strong> ${userOpenVacancys[i].companyName}</div>
            <div class="vacancy-title"><strong>Vacancy: </strong> ${userOpenVacancys[i].vacancyName}</div>
            <div class="status" style="color: #006600;"><strong>Stauts: </strong> ${userOpenVacancys[i].status}</div>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#infoModal">See Details</button>
            <button class="btn btn-danger btn-cancel-sub">Cancel Subscription</button>
        </div>`
    }
    
    //Writing vacancies in html
    boxVacancy.innerHTML = boxVacancyHTML

    //Cancel Subscription
    clickBtnCancel()

    //See details of the vacancy
    clickVacancy(vacanciesArray)
}

function clickVacancy(vacanciesArray){
    //Selecting the id of the clicked item
    document.querySelectorAll(".vacancy").forEach(item => {
        item.addEventListener("click", (e)=>{
            let clickedItem =  e.currentTarget.getAttribute("data-key")
            // Calling the function that searches the database for the correct vacancy
            searchInfoModal(clickedItem, vacanciesArray)
        })
    })
}

function searchInfoModal (clickedItem, vacanciesArray){
    // Looking for the right vacancy in the database
    for(let i in vacanciesArray){
        if(vacanciesArray[i].id == clickedItem){
            // Calling the function that fills the modal with the correct vacancy
            fillInfoModal(vacanciesArray[i])
        }
    }
}

function fillInfoModal(currentVacancy){
    //Filling the modal
    document.querySelector(".modal-info").innerHTML = `
    <div class="modal-header">
        <img src="/src/icons/company-icon.png" alt="logo-job">
        <h5 class="title-modal">${currentVacancy.companyName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row">
        <div class="col-4">
            <p class="title-info">Requisitos:</p>
            <ul class="list-requirements-info"></ul>
        </div>
        <div class="col-4">
            <p class="title-info">Desejavel:</p>
            <ul class="list-desirable-info"></ul>
        </div>
        <div class="col-4">
            <div class="row">
                <p class="title-info">Tipo: <strong>${currentVacancy.type}</strong></p>
            </div>
            <div class="row">
                <p class="title-info">Periodo: <strong>${currentVacancy.time}</strong></p>
            </div>
            <div class="row">
                <p class="title-info">Salario:</p>
                <strong class="fs-4">R$ ${currentVacancy.payment}</strong>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <p class="title-info">Beneficios:</p>
            <ul class="list-benefits-info"></ul>
        </div>
        <div class="col-6">
            <div class="row">
                <p class="title-info">Informações Adicionais:</p>
                <span>${currentVacancy.additional}</span>
            </div>
        </div>
    </div>
    </div>`

    //Filling modal lists
    let requirements = document.querySelector(".list-requirements-info")
    let desirable = document.querySelector(".list-desirable-info")
    let benefits = document.querySelector(".list-benefits-info")

    let requirementsHTMLinfo = ""
    let desirableHTMLinfo = ""
    let benefitsHTMLinfo = ""

    for(let i = 0; i < currentVacancy.requirements.length; i++){
        requirementsHTMLinfo += `<li>${currentVacancy.requirements[i]}</li>`
    }

    for(let i = 0; i < currentVacancy.desirable.length; i++){
        desirableHTMLinfo += `<li>${currentVacancy.desirable[i]}</li>`
    }

    for(let i = 0; i < currentVacancy.benefits.length; i++){
        benefitsHTMLinfo += `<li>${currentVacancy.benefits[i]}</li>`
    }

    requirements.innerHTML = requirementsHTMLinfo
    desirable.innerHTML = desirableHTMLinfo
    benefits.innerHTML = benefitsHTMLinfo
}






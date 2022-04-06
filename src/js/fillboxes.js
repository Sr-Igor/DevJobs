function fillboxes(vacanciesArray, numberPages){
    //Filling vacancies on the home screen
    let boxContainer = document.querySelector(".box-jobs")
    let vacancy = ""
    for(let i = 0; i < numberPages; i++){
        vacancy += `
        <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key=${vacanciesArray[i].id}>
            <div class="box-header">
                <img src="/src/icons/company-icon.png" alt="bancoInter">
            </div>
            <div class="box-body">
                <div class="post">
                    <div class="days">14 days</div>
                    <span>*</span>
                    <div class="time-course">${vacanciesArray[i].time}</div>
                </div>
                <div class="title-job">${vacanciesArray[i].vacancyName}</div>
                <div class="company-name">${vacanciesArray[i].companyName}</div>
                <div class="box-footer">See more details</div>
            </div>
        </div>`
    }
    //Writing in HTML
    boxContainer.innerHTML = vacancy

    if(vacanciesArray.length <= 0){
        let btnSeeMore = document.querySelector(".btn-see-more-jobs")
        btnSeeMore.style.display = "none"
        boxContainer.innerHTML = "No vacancies available at the moment"
    }else{
        let btnSeeMore = document.querySelector(".btn-see-more-jobs")
        btnSeeMore.style.display = "block"
    }

    changeModeHome()

    //Calling the function that identifies the clicked vacancy
    identifyApply(vacanciesArray)
}

function identifyApply(vacanciesArray){
    //Identifying the clicked vacancy
    document.querySelectorAll(".box").forEach(item =>{
        item.addEventListener("click", (e)=>{
            let currentItem = e.currentTarget
            let itemClicked = currentItem.getAttribute("data-key")
            /*Calling the function that fills the modal with the 
            information of the clicked vacancy*/
            fillApply(itemClicked, vacanciesArray)
        })
    })
}

//TORNAR ESSA FUNÇÃO INDEPENDENTE 
function fillApply(item, vacanciesArray){
    //Looking for the right job
    let currentVacancy = ""
    for(let i in vacanciesArray){
        if(vacanciesArray[i].id == item){
            currentVacancy = vacanciesArray[i]
        }
    }
    
    //Filling the modal header
    let jobModalHeader = document.querySelector(".modal-job-modal .modal-header")
    jobModalHeader.innerHTML = `
        <img src="/src/icons/company-icon.png" alt="logo-job">
        <h5 class="title-modal" data-key="${currentVacancy.id}">${currentVacancy.vacancyName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`

    //Filling the modal body 
    let jobModalBody = document.querySelector(".modal-job-modal .modal-body")
    jobModalBody.innerHTML =`
        <div class="row">
            <div class="col-4">
                <p class="title-info requirements">Requisitos:</p>
                <ul class="list-requirements"></ul>
            </div>
            <div class="col-4">
                <p class="title-info desirable">Desejavel:</p>
                <ul class="list-desirable"></ul>
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
                    <strong class="payment">R$ ${currentVacancy.payment}</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="title-info benefits">Beneficios:</p>
                    <ul class="list-benefits"></ul>
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
    let requirements = document.querySelector(".list-requirements")
    let desirable = document.querySelector(".list-desirable")
    let benefits = document.querySelector(".list-benefits")

    let requirementsHTML = ""
    let desirableHTML = ""
    let benefitsHTML = ""

    for(let i = 0; i < currentVacancy.requirements.length; i++){
        requirementsHTML += `<li>${currentVacancy.requirements[i]}</li>`
    }

    for(let i = 0; i < currentVacancy.desirable.length; i++){
        desirableHTML += `<li>${currentVacancy.desirable[i]}</li>`
    }

    for(let i = 0; i < currentVacancy.benefits.length; i++){
        benefitsHTML += `<li>${currentVacancy.benefits[i]}</li>`
    }

    requirements.innerHTML = requirementsHTML
    desirable.innerHTML = desirableHTML
    benefits.innerHTML = benefitsHTML
}



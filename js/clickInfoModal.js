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
        <img src="./src/icons/company-icon.png" alt="logo-job">
        <h5 class="title-modal" data-key="${currentVacancy.id}">${currentVacancy.vacancyName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`

    //Filling the modal body 
    let jobModalBody = document.querySelector(".modal-job-modal .modal-body")
    jobModalBody.innerHTML =`
        <div class="row">
            <div class="col-4">
                <p class="title-info requirements">Requirements:</p>
                <ul class="list-requirements"></ul>
            </div>
            <div class="col-4">
                <p class="title-info desirable">Desirable:</p>
                <ul class="list-desirable"></ul>
            </div>
            <div class="col-4">
                <div class="row">
                    <p class="title-info">Type: <strong>${currentVacancy.type}</strong></p>
                </div>
                <div class="row">
                    <p class="title-info">Period: <strong>${currentVacancy.time}</strong></p>
                </div>
                <div class="row">
                    <p class="title-info">Payment:</p>
                    <strong class="payment">U$ ${currentVacancy.payment}</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="title-info benefits">Benefits:</p>
                    <ul class="list-benefits"></ul>
                </div>
                <div class="col-6">
                    <div class="row">
                        <p class="title-info">Additional Information:</p>
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
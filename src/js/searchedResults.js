function AvailableSearchItens(){
    let searchButton = document.querySelector(".search")
    searchButton.addEventListener("click", searchJobs)
}



function searchJobs(e){
    e.preventDefault()

    let findJobInput = document.querySelector(".find-job")
    let states = document.querySelector(".states");
    let state = states.options[states.selectedIndex].value;
    let checkboxFullTime = document.querySelector(".checkbox-full-time").checked

    let wordsWritten = findJobInput.value.toLowerCase().split(" ")
    let filtersArray = []

    if(findJobInput.value == "" && state == 0 && checkboxFullTime == false){
        fillboxes()
        
    }else if(findJobInput.value == "" && state !== 0 || findJobInput.value == "" && checkboxFullTime == true){
        verifyFields(vacancys, state, checkboxFullTime)     
         
    }else if(findJobInput.value !== "" || state !== 0 || checkboxFullTime == true){ 
        for (let i in vacancys){
            let vacancyWords =  vacancys[i].vacancyName.toLowerCase().split(" ")
            vacancyWords.some(function(item){
                if(wordsWritten.includes(item)){
                    filtersArray.push(vacancys[i])
                }
             })
             verifyFields(filtersArray, state, checkboxFullTime)
         }
    }

}
 
function verifyFields(filtersArray, state, checkboxFullTime){

    if(state == 0 && checkboxFullTime == false){
        fillboxesSearch(filtersArray)

    }else if(state !== 0 && checkboxFullTime == false){
        let stateArray = []
        for (let i in filtersArray){
            if(filtersArray[i].uf == state){
                stateArray.push(filtersArray[i])
            }
        }
        fillboxesSearch(stateArray)
    }else if(state == 0 && checkboxFullTime == true){
        let stateArray = []
        for (let i in filtersArray){
            if(filtersArray[i].time == "Full Time"){
                stateArray.push(filtersArray[i])
            }
        }
        fillboxesSearch(stateArray)
    }else if(state !== 0 && checkboxFullTime == true){
        let stateArray = []
        for (let i in filtersArray){
            if(filtersArray[i].uf == state && filtersArray[i].time == "Full Time"){
                stateArray.push(filtersArray[i])
            }
        }
        fillboxesSearch(stateArray)
    }



}



function fillboxesSearch(resultsArray){
    
    let boxContainer = document.querySelector(".box-jobs")
    let vacancy = ""

    if(resultsArray.length == 0){
        boxContainer.innerHTML = `<span style="font-size: 30px;">No Results</span>`
        return
    }

    for(let i = 0; i < resultsArray.length; i++){
        vacancy += `
        <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key=${resultsArray[i].id}>
            <div class="box-header">
                <img src="src/images/bancoInter.png" alt="bancoInter">
            </div>
            <div class="box-body">
                <div class="post">
                    <div class="days">14 days</div>
                    <span>*</span>
                    <div class="time-course">${resultsArray[i].time}</div>
                </div>
                <div class="title-job">${resultsArray[i].vacancyName}</div>
                <div class="language">${resultsArray[i].companyName}</div>
                <div class="box-footer">See more details</div>
            </div>
        </div>
        `
        
    }
    boxContainer.innerHTML = vacancy
    
    
    identifyApplySearch()
}

function identifyApplySearch(){
    let currentBox = document.querySelectorAll(".box").forEach(item =>{
        item.addEventListener("click", (e)=>{
            let currentItem = e.currentTarget
            let item = currentItem.getAttribute("data-key")
            fillApplySearch(item)
        })
    })
}

function fillApplySearch(item){
    let currentVacancy
    for(let i in vacancys){
        if(vacancys[i].id == item){
            currentVacancy = vacancys[i]
        }
    }
    
    let jobModalHeader = document.querySelector(".modal-job-modal .modal-header")
    jobModalHeader.innerHTML = `
        <img src="src/images/bancoInter.png" alt="logo-job">
        <h5 class="title-modal" data-key="${currentVacancy.id}">${currentVacancy.vacancyName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `

    let jobModalBody = document.querySelector(".modal-job-modal .modal-body")
    jobModalBody.innerHTML =`
        <div class="row">
        <div class="col-4">
            <p class="title-info requirements">Requisitos:</p>
            <ul class="list-requirements">

            </ul>
        </div>
        <div class="col-4">
            <p class="title-info desirable">Desejavel:</p>
            <ul class="list-desirable">

            </ul>
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
    
        <div class="row">
            <div class="col-6">
                <p class="title-info benefits">Beneficios:</p>
                <ul class="list-benefits">

                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <p class="title-info">Informações Adicionais:</p>
                    <span>${currentVacancy.additional}</span>
                </div>
            </div>
        </div>

    </div>
    `

    //Fill lists modal

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

AvailableSearchItens()


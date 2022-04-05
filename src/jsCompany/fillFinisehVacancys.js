function fillBoxesVacancyFinised(vacanciesArrayFinished){
    // Checks the vacancies that were created by the current company
    let vacancysFinisedCompany =[]
    for(let i in vacanciesArrayFinished){
        if(vacanciesArrayFinished[i].idCreator == currentUserCompany.id){
            vacancysFinisedCompany.push(vacanciesArrayFinished[i])
        }
    }
    //calls the function that writes open vacancies in HTML
    writeBoxesFinised(vacancysFinisedCompany)
}

function writeBoxesFinised(vacancysCompany){

    //stores the vacancies in the variable and writes the items in the HTML
    let squareBoxes = document.querySelector(".box-jobs-finished")
    squareBoxes.innerHTML = ""
    let boxesHTML = ""
    for (let i in vacancysCompany){
        boxesHTML += `
            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key="${vacancysCompany[i].id}">
                <div class="box-header">
                    <img src="/src/icons/company-icon.png"" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">${vacancysCompany[i].time}</div>
                    </div>
                    <div class="title-job">${vacancysCompany[i].vacancyName}</div>
                    <div class="company-name">${vacancysCompany[i].companyName}</div>
                    <div class="box-footer" style="color: #d60000;">Status: ${vacancysCompany[i].status}</div>
                </div>
            </div>
        `
    }
    squareBoxes.innerHTML = boxesHTML

    // check if the HTML is empty
    if(vacancysCompany.length == 0){squareBoxes.innerHTML = "You have no vacancies completed"}

    changeModeSubsCompany()

    //calls the function that allows clicking on the vacancy
    clickCardFinished()
}

function clickCardFinished(){
    //Identifies the item clicked
    let allBoxes = document.querySelectorAll(".box")
    allBoxes.forEach(item =>{
        item.addEventListener("click", callClickCardOpenInfoVacancy)
    })
}


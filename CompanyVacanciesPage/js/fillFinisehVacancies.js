function fillBoxesVacancyFinised(vacanciesArrayFinished, currentCompany){
    // Checks the vacancies that were created by the current company
    let vacanciesFinisedCompany =[]
    for(let i in vacanciesArrayFinished){
        if(vacanciesArrayFinished[i].idCreator == currentCompany.id){
            vacanciesFinisedCompany.push(vacanciesArrayFinished[i])
        }
    }
    //calls the function that writes open vacancies in HTML
    writeBoxesFinised(vacanciesFinisedCompany)
}

function writeBoxesFinised(vacanciesCompany){

    //stores the vacancies in the variable and writes the items in the HTML
    let squareBoxes = document.querySelector(".box-jobs-finished")
    squareBoxes.innerHTML = ""
    let boxesHTML = ""
    for (let i in vacanciesCompany){
        boxesHTML += `
            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key="${vacanciesCompany[i].id}">
                <div class="box-header">
                    <img src="./src/icons/company-icon.png"" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">${vacanciesCompany[i].time}</div>
                    </div>
                    <div class="title-job">${vacanciesCompany[i].vacancyName}</div>
                    <div class="company-name">${vacanciesCompany[i].companyName}</div>
                    <div class="box-footer" style="color: #d60000;">Status: ${vacanciesCompany[i].status}</div>
                </div>
            </div>
        `
    }
    squareBoxes.innerHTML = boxesHTML

    // check if the HTML is empty
    if(vacanciesCompany.length == 0){squareBoxes.innerHTML = "You have no vacancies completed"}

    changeModeSubsCompany()

    //calls the function that allows clicking on the vacancy
    clickCardFinished()

    //Fill Date box
    selectBox(vacanciesCompany)
}

function clickCardFinished(){
    //Identifies the item clicked
    let allBoxes = document.querySelectorAll(".box")
    allBoxes.forEach(item =>{
        item.addEventListener("click", callClickCardOpenInfoVacancy)
    })
}


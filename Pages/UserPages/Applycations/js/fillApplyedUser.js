function fillSubscriptions(user, applayedsArray, vacanciesArray){
    for(let i in applayedsArray){
        if(applayedsArray[i].idUser == user){
            VerifyApplyedVacancies(applayedsArray[i].vacanciesCode, vacanciesArray)
        }
    }
}

function VerifyApplyedVacancies(vacanciesCode, vacanciesArray){
    //Box
    let boxVacancy = document.querySelector(".box-vacancies")

    // Applied open vacancies
    let userOpenVacancies = []

    // Checks the user's open vacancies and calls the function to fill the screen
    for(let i in vacanciesArray){
        if(vacanciesCode.includes(vacanciesArray[i].id)){
            userOpenVacancies.push(vacanciesArray[i])            
        }
    }

    // Check empty apply 
    if(userOpenVacancies.length > 0){
        fillScreen(userOpenVacancies, vacanciesArray)  
    }else{
        boxVacancy.innerHTML = "You are not applying for any open vacancy"
    }
}

function fillScreen(userOpenVacancies, vacanciesArray){
    //Box
    let boxVacancy = document.querySelector(".box-vacancies")
    //Writing vacancies in the variable
    let boxVacancyHTML = ""
    for (let i in userOpenVacancies){
        boxVacancyHTML += `
        <div class="vacancy" data-key="${userOpenVacancies[i].id}">
            <div class="company-name-applayed"><strong>Company: </strong> ${userOpenVacancies[i].companyName}</div>
            <div class="vacancy-title"><strong>Vacancy: </strong> ${userOpenVacancies[i].vacancyName}</div>
            <div class="status" style="color: #006600;"><strong>Stauts: </strong> ${userOpenVacancies[i].status}</div>
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
            fillApply(vacanciesArray[i].id, vacanciesArray)
        }
    }
}






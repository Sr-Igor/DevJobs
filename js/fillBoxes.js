function fillboxes(vacanciesArray, numberPages){
    //Filling vacancies on the home screen
    let boxContainer = document.querySelector(".box-jobs")
    let vacancy = ""
    for(let i = 0; i < numberPages; i++){
        vacancy += `
        <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key=${vacanciesArray[i].id}>
            <div class="box-header">
                <img src="./src/icons/company-icon.png" alt="bancoInter">
            </div>
            <div class="box-body">
                <div class="post">
                    <div class="days"></div>
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
        selectBox(vacanciesArray)
    }

    //Very dark mode after fill Inicial Page
    changeModeHome()

    //Calling the function that identifies the clicked vacancy
    identifyApply(vacanciesArray)
}

function selectBox(vacanciesArray){
    let boxes =  document.querySelectorAll(".box")
    boxes.forEach(item =>{
       let itemVacancyId = item.getAttribute("data-key")
       for (let i in vacanciesArray){
            if(vacanciesArray[i].id == itemVacancyId){
                whiteDate(vacanciesArray[i], item)
            }
        }
    })
}

// Verify calcs for select correct date
function whiteDate(vacancy, item){
    let writteDate = ""
    let dateElement = item.querySelector(".days")

    let verifyDate = new Date()
    let verifyYear = verifyDate.getFullYear()
    let verifyMonth = verifyDate.getMonth()
    let verifyDay = verifyDate.getDay()

    let calcYear = verifyYear - vacancy.date.year
    let calcMonth = verifyMonth - vacancy.date.month
    let calcDay = verifyDay - vacancy.date.day

    if(calcYear > 1){
        writteDate = `${calcYear} years ago`
    }else if(calcYear == 1 && calcMonth >= 0){
        writteDate = `${calcYear} year ago`
    }else if(calcMonth == 1){
        writteDate = `${calcMonth} month ago`
    }else if(calcMonth > 1){
        writteDate = `${calcMonth} months ago`
    }else if (calcMonth < 0){
        writteDate = `${12 + calcMonth} months ago`
    }else if(calcDay > 1){
        writteDate = `${calcDay} days ago`
    }else if(calcDay == 1){
        writteDate = `Yesterday`
    }else if(calcDay == 0){
        writteDate = `Today`
    }

    dateElement.innerHTML = writteDate
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



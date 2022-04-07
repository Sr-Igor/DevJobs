function selectBox(vacanciesCompany){
    let boxes =  document.querySelectorAll(".box")
    boxes.forEach(item =>{
       let itemVacancyId = item.getAttribute("data-key")
       for (let i in vacanciesCompany){
            if(vacanciesCompany[i].id == itemVacancyId){
                whiteDate(vacanciesCompany[i], item)
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

    console.log("year", calcYear)
    console.log("month", calcMonth)
    console.log("Day", calcDay)

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
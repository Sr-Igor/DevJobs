function finishVacancy(clickedVacancy, vacanciesArray, vacanciesArrayFinished){
    document.querySelector(".btn-finish-vacancy").addEventListener("click", (e)=>{
        e.preventDefault()
        e.currentTarget.setAttribute("disabled", true)
        clickedVacancy.status = "Finished"
        document.querySelector(".box-finised-vacancy").style.opacity = "1"
        document.querySelector(".box-finised-vacancy").innerHTML = "This vacancy has been successfully completed"

        setTimeout(()=>{
            document.querySelector(".box-finised-vacancy").style.opacity = "0"
            document.querySelector(".box-finised-vacancy").innerHTML = ""
        },3000)

        let indexEl = vacanciesArray.indexOf(clickedVacancy)
        vacanciesArray.splice(indexEl, 1)
        vacanciesArrayFinished.push(clickedVacancy)

        updateFinishedVacancies(vacanciesArrayFinished)
        updateVacancies(vacanciesArray)

        callOpenVacancies()
        callFinishedVacancies()
    })
}
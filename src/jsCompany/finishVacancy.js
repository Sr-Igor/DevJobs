function finishVacancy(clickedVacancy, vacanciesArray, vacanciesArrayFinished){
    document.querySelector(".btn-finish-vacancy").addEventListener("click", (e)=>{
        e.preventDefault()
        clickedVacancy.status = "Finished"
        document.querySelector(".box-finised-vacancy").style.display = "flex"
        document.querySelector(".box-finised-vacancy").innerHTML = "This vacancy has been successfully completed"

        setInterval(()=>{
            document.querySelector(".box-finised-vacancy").style.display = "none"
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
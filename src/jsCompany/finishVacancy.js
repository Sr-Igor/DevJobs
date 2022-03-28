function finishVacancy(clickedVacancy){
    document.querySelector(".btn-finish-vacancy").addEventListener("click", (e)=>{
        e.preventDefault()
        clickedVacancy.status = "Finished"
        document.querySelector(".box-finised-vacancy").style.display = "flex"
        document.querySelector(".box-finised-vacancy").innerHTML = "This vacancy has been successfully completed"

        setInterval(()=>{
            document.querySelector(".box-finised-vacancy").style.display = "none"
            document.querySelector(".box-finised-vacancy").innerHTML = ""
        },3000)

        let indexEl = vacancys.indexOf(clickedVacancy)
        vacancys.splice(indexEl, 1)
        vacancysFinished.push(clickedVacancy)

        updateLocalStorage()
        callLocalStorageVacanciesCompany()
        console.log(vacanciesArray)
        console.log(vacanciesFinishedArray)
    })
}
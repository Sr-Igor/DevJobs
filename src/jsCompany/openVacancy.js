function OpenVacancy(clickedVacancy, vacanciesArray, vacanciesArrayFinished){
    document.querySelector(".btn-open-vacancy").addEventListener("click", (e)=>{
        e.preventDefault()
        clickedVacancy.status = "In Process"
        document.querySelector(".box-finised-vacancy").style.display = "flex"
        document.querySelector(".box-finised-vacancy").innerHTML = "This vacancy has been successfully reopened"

        setInterval(()=>{
            document.querySelector(".box-finised-vacancy").style.display = "none"
            document.querySelector(".box-finised-vacancy").innerHTML = ""
        },3000)

        let indexEl = vacanciesArray.indexOf(clickedVacancy)
        vacanciesArrayFinished.splice(indexEl, 1)
        vacanciesArray.push(clickedVacancy)

        updateFinishedVacancies(vacanciesArrayFinished)
        updateVacancies(vacanciesArray)

        callOpenVacancies()
        callFinishedVacancies()
    })
}
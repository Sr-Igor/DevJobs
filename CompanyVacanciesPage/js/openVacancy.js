function OpenVacancy(clickedVacancy, vacanciesArray, vacanciesArrayFinished){
    //Add the function on the click to open the vacancy
    document.querySelector(".btn-open-vacancy").addEventListener("click", (e)=>{
        e.preventDefault()

        //Disable the button to avoid multiple clicks
        e.currentTarget.setAttribute("disabled", true)
        
        //Change vacancy status
        clickedVacancy.status = "In Process"

        //Show success message
        document.querySelector(".box-finised-vacancy").style.opacity= "1"
        document.querySelector(".box-finised-vacancy").innerHTML = "This vacancy has been successfully reopened"

        //Hide success message
        setTimeout(()=>{
            document.querySelector(".box-finised-vacancy").style.opacity = "0"
            document.querySelector(".box-finised-vacancy").innerHTML = ""
        },3000)

        //Change the vacancy between arrays
        let indexEl = vacanciesArray.indexOf(clickedVacancy)
        vacanciesArrayFinished.splice(indexEl, 1)
        vacanciesArray.unshift(clickedVacancy)

        //Update LocalStorage
        updateFinishedVacancies(vacanciesArrayFinished)
        updateVacancies(vacanciesArray)

        //Call the function to refresh the page
        callOpenVacancies()
        callFinishedVacancies()
    })
}
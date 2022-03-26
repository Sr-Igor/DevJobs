function fishVacancy(clickedVacancy){
    document.querySelector(".btn-finish-vacancy").addEventListener("click", (e)=>{
        e.preventDefault()
        clickedVacancy.status = "Finished"
        document.querySelector(".box-finised-vacancy").style.display = "flex"
        document.querySelector(".box-finised-vacancy").innerHTML = "This vacancy has been successfully completed"

        setInterval(()=>{
            document.querySelector(".box-finised-vacancy").style.display = "none"
            document.querySelector(".box-finised-vacancy").innerHTML = ""
        },3000)
        fillBoxesVacancyCreator()
    })
}
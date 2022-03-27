function clickBtnCancel(){
    let CollectiobbuttonCancelSub = document.querySelectorAll(".btn-cancel-sub")
    CollectiobbuttonCancelSub.forEach(item =>{
        item.addEventListener("click", deleteSubs)
    })
}

function deleteSubs(e){
   let currentVacancy = e.currentTarget
   for (let i in vacancyId){
       if(vacancyId[i].idUser == userVacancyApply.id){
        let currentItem = vacancyId[i].vacancysCode.indexOf(currentVacancy)
        vacancyId[i].vacancysCode.splice(currentItem, 1)
        console.log(vacancyId[i])
        document.querySelector(".box-vagancys").innerHTML = ""
        fillSubscriptions(userVacancyApply.id)
       }
   }
}
function clickBtnCancel(){
    let CollectiobbuttonCancelSub = document.querySelectorAll(".btn-cancel-sub")
    CollectiobbuttonCancelSub.forEach(item =>{
        item.addEventListener("click", deleteSubs)
    })
}

function deleteSubs(e){
   let currentVacancyClicked = Number(e.currentTarget.parentNode.getAttribute("data-key"))

   for (let i in vacancyId){
       if(vacancyId[i].idUser == userVacancyApply.id){
        let currentItem = vacancyId[i].vacancysCode.indexOf(currentVacancyClicked)
        vacancyId[i].vacancysCode.splice(currentItem, 1)
        document.querySelector(".box-vagancys").innerHTML = ""
        fillSubscriptions(userVacancyApply.id)
       }
   }
   updateLocalStorage()
}
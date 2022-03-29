function clickBtnCancel(){
    
    let CollectiobbuttonCancelSub = document.querySelectorAll(".btn-cancel-sub")
    CollectiobbuttonCancelSub.forEach(item =>{
        item.addEventListener("click", callUnsubiscrive)
    })
}

function deleteSubs(applayedsArray){
    
   let currentVacancyClicked = Number(event.currentTarget.parentNode.getAttribute("data-key"))

   for (let i in applayedsArray){
       if(applayedsArray[i].idUser == userVacancyApply.id){
        let currentItem = applayedsArray[i].vacancysCode.indexOf(currentVacancyClicked)
        applayedsArray[i].vacancysCode.splice(currentItem, 1)
        document.querySelector(".box-vagancys").innerHTML = ""
        updateApplyeds(applayedsArray, true)
       }
   }
   updateLocalStorage()
}
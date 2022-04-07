function clickBtnCancel(){
    //Makes it available to click on the cancel button
    let buttonCancelSub = document.querySelectorAll(".btn-cancel-sub")
    buttonCancelSub.forEach(item =>{
        item.addEventListener("click", callUnsubiscrive)
    })
}

function deleteSubs(applayedsArray, user){
    //this function removes the clicked item from the user's enrolled vacancies array
   let currentVacancyClicked = Number(event.currentTarget.parentNode.getAttribute("data-key"))
   for (let i in applayedsArray){
       if(applayedsArray[i].idUser == user.id){
        let currentItem = applayedsArray[i].vacanciesCode.indexOf(currentVacancyClicked)
        applayedsArray[i].vacanciesCode.splice(currentItem, 1)
        document.querySelector(".box-vacancies").innerHTML = ""
        updateApplyeds(applayedsArray)
        window.location.href = "./applycationUser.html";
       }
   }
}
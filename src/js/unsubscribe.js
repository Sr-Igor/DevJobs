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
        console.log("ok")
        let currentItem = applayedsArray[i].vacancysCode.indexOf(currentVacancyClicked)
        applayedsArray[i].vacancysCode.splice(currentItem, 1)
        document.querySelector(".box-vagancys").innerHTML = ""
        updateApplyeds(applayedsArray)
        window.location.href = "/Pages/UserPages/Applycations/applycationUser.html";
       }
   }
}
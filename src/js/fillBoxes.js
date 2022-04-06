function fillboxes(vacanciesArray, numberPages){
    //Filling vacancies on the home screen
    let boxContainer = document.querySelector(".box-jobs")
    let vacancy = ""
    for(let i = 0; i < numberPages; i++){
        vacancy += `
        <div class="box" data-bs-toggle="modal" data-bs-target="#myModal" data-key=${vacanciesArray[i].id}>
            <div class="box-header">
                <img src="/src/icons/company-icon.png" alt="bancoInter">
            </div>
            <div class="box-body">
                <div class="post">
                    <div class="days">14 days</div>
                    <span>*</span>
                    <div class="time-course">${vacanciesArray[i].time}</div>
                </div>
                <div class="title-job">${vacanciesArray[i].vacancyName}</div>
                <div class="company-name">${vacanciesArray[i].companyName}</div>
                <div class="box-footer">See more details</div>
            </div>
        </div>`
    }
    //Writing in HTML
    boxContainer.innerHTML = vacancy

    if(vacanciesArray.length <= 0){
        let btnSeeMore = document.querySelector(".btn-see-more-jobs")
        btnSeeMore.style.display = "none"
        boxContainer.innerHTML = "No vacancies available at the moment"
    }else{
        let btnSeeMore = document.querySelector(".btn-see-more-jobs")
        btnSeeMore.style.display = "block"
    }

    changeModeHome()

    //Calling the function that identifies the clicked vacancy
    identifyApply(vacanciesArray)
}

function identifyApply(vacanciesArray){
    //Identifying the clicked vacancy
    document.querySelectorAll(".box").forEach(item =>{
        item.addEventListener("click", (e)=>{
            let currentItem = e.currentTarget
            let itemClicked = currentItem.getAttribute("data-key")
            /*Calling the function that fills the modal with the 
            information of the clicked vacancy*/
            fillApply(itemClicked, vacanciesArray)
        })
    })
}



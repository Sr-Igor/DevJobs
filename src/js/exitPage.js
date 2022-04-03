function availableExit(){
    let bntExit = document.querySelector(".log-out")
    bntExit.addEventListener("click", exitPage)
}

function exitPage(){
    let cacheUserInfo = ""
    updateCurrentUser(cacheUserInfo)
}

availableExit()
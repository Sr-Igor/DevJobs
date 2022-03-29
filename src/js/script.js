function updateUsers(){
    localStorage.setItem("usersArray", JSON.stringify(users))
}
function callUsers(){
    let usersRegisterArray = JSON.parse(localStorage.getItem("usersArray"))
    verifyAccount(usersRegisterArray)
}

updateUsers()
// Current user information
let currentCompany = JSON.parse(localStorage.getItem("currentCompany"))
let companyTitle = document.querySelector(".company-title")
companyTitle.innerHTML = currentCompany.companyName

// Functions called on load
callCreateJob()
availableEditProfile()
callDarkProfileCompany()
changeModeProfileCompany()


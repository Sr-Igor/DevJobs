function callCreateVacancy(){
    let buttonEditProfile = document.querySelector(".btn-create-vacancy")
    buttonEditProfile.addEventListener("click", fillUserPageCompany) 
}

function backProfileUser(){
    let buttonEditProfile = document.querySelector(".hello-profile")
    buttonEditProfile.addEventListener("click", fillUserPageCompany) 
}

function fillUserPageCompany() {
    document.querySelector(".changePage").innerHTML = `
    <header>
    <div class="header">
        <div class="container">
            <div class="top-header">
                <h1>DevJobs Companys</h1>
                <div class="user">
                    <div class="box-login">
                        <div class="box-logout">
                            <div class="circle d-flex">
                                <a class="hello-profile active"><i class="bi bi-person-circle"></i> Peril</a>
                                <a href="#" class="my-applys open-applys-company"><i class="bi bi-window-plus"></i> Vagas</a>
                                <a href="/modules/ProfessionalLoginPage/Professional.html"class="log-out"><i class="bi bi-box-arrow-right"></i> Exit</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="box-clean-dark">
                    <div class="clean-mode"><i class="bi bi-brightness-high"></i></div>
                    <div class="light-switch">
                        <div class="pointer"></div>
                    </div>
                    <div class="dark-mode"><i class="bi bi-moon"></i></div>
                </div>
            </div>
        </div>
    </div>

    <a href="/index.html" class="inicial-page"><i class="bi bi-house"></i></a>
</header>

<main>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <div class="box-info-company">
                    <img src="/src/images/DefaultProfileCompany.png" alt="">
                    <div class="company-title color-ct">${currentUserCompany.companyName}</div>
                    <button class="btn btn-primary btn-edit-profile">Edit Profile</button>
                </div>
            </div>
            
            <div class="col-10 box-vacancy">
                <span class="title-create-job">Create a new vacancy</span>
                <span class="box-create-job"></span>
                <form>
                    <div class="row">
                        <div class="mb-3 col-5">
                            <label for="exampleInputEmail1" class="form-label">Vacancy Name</label>
                            <input type="text" class="form-control vacancy-name" aria-describedby="emailHelp">
                        </div>
        
                        <div class="mb-3 col-5">
                            <label for="exampleInputEmail1" class="form-label">Type</label>
                            <input type="text" class="form-control type" aria-describedby="emailHelp">
                            <div  class="form-text">Estagiary Junior  Senior  Pleno Other</div>
                        </div>
                    </div>
        
                    <div class="row">
                        <div class="mb-3 col-5">
                            <label for="exampleInputPassword1" class="form-label">Periody</label>
                            <select class="form-select periody" aria-label="Default select example">
                                <option value="0" selected></option>
                                <option value="1">Full Time</option>
                                <option value="2">1/2 Periody</option>
                                <option value="3">Night Time</option>
                              </select>
                        </div>
        
                        <div class="mb-3 col-5">
                            <label for="exampleInputPassword1" class="form-label">Wage</label>
                            <input type="text" class="form-control payment">
                            <div class="form-text">Only Numbers</div>
                        </div>
                    </div>
        
                    <div class="row">
                        <div class="mb-3 col-5">
                            <label for="exampleInputEmail1" class="form-label">Requirements:</label>
                            <textarea class="requirements-area"></textarea>
                            <div class="form-text">Separate items by comma ","</div>
                        </div>
        
                        <div class="mb-3 col-5">
                            <label for="exampleInputEmail1" class="form-label">Benefits:</label>
                            <textarea class="benefits-area"></textarea>
                            <div class="form-text">Separate items by comma ","</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="mb-3 col-5">
                            <label for="exampleInputEmail1" class="form-label">Desirable Knowledge:</label>
                            <textarea class="desirable-area"></textarea>
                            <div class="form-text">Separate items by comma ","</div>
                        </div>
        
                        <div class="mb-3 col-5">
                            <label for="exampleInputEmail1" class="form-label">Additional Information:</label>
                            <textarea class="aditional-area"></textarea>
                            <div class="form-text">Separate items by comma ","</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <button class="btn btn-primary public-vacancy">Public a vacancy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
</main>
`

        callCreateJob()
        availableEditProfile()
        OpenVacancysCompany()
        callDarkProfileCompany()
        changeModeProfileCompany()
}
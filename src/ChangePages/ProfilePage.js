function profilePage(){
    let profile = document.querySelector(".hello-profile")
    profile.addEventListener("click", fillProfilePage)
}

function fillProfilePage(){
    document.querySelector(".change-section").innerHTML = `
    <header>
    <div class="header">
        <div class="container">
            <div class="top-header">
                <h1>DevJobs</h1>
                <div class="user">    
                    <div class="box-logout-subs">
                        <div class="circle">
                            <a href="#" class="hello-profile"><i class="bi bi-house-door"></i> Home</a>
                            <a href="#"  class="my-applys"><i class="bi bi-window-plus"></i> Incrições</a>
                            <a href="/index.html"  class="log-out"><i class="bi bi-box-arrow-right"></i> Exit</a>
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
    </header>

    <main class="mainProfile">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="box-info-company">
                        <img src="src//images/DefaultProfile.jpg" alt="">
                        <div class="company-title">${userVacancyApply.firstName} ${userVacancyApply.lastName}</div>
                    </div>
                </div>

                <div class=" col-9 box-edit-profile">

                    <span class="title-create-job">Edit Profile</span>
                    <form>
                        <div class="row">
                            <div class="mb-3 col-12 error-box-edit">
                                <i class="bi bi-x-lg"></i>
                                <span class="error-message-edit"></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 col-12 success-box-edit">
                                <i class="bi bi-bookmark-check"></i>
                                <span class="success-message-edit">Profile edited successfully</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 col-12">
                                <label for="exampleInputEmail1" class="form-label">Complet Name</label>
                                <input type="text" class="form-control completName-profile" aria-describedby="emailHelp" readonly>
                            </div>
                        </div>

                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="exampleInputPassword1" class="form-label"> Current Password</label>
                                <input type="password" class="form-control password-profile">
                                <div class="form-text">Only letters and numbers</div>
                            </div>
            
                            <div class="mb-3 col-6">
                                <label for="exampleInputPassword1" class="form-label">New Password</label>
                                <input type="password" class="form-control new-password" id="exampleInputPassword1">
                            </div>
                        </div>
            
                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="text" class="form-control phone-profile" aria-describedby="emailHelp" placeholder="(xx) x xxx-xxxx">
                                <div  class="form-text">Only Numbers</div>
                            </div>
            
                            <div class="mb-3 col-6">
                                <label for="exampleInputEmail1" class="form-label">CPF</label>
                                <input type="text" class="form-control cpf-profile" aria-describedby="emailHelp" readonly>
                                <div class="form-text">Only Numbers</div>
                            </div>
                        </div>
            
                        <div class="row">
                            <div class="fs-4  title-subsection">Adress</div>
                            <div class="col-6">
                                <label for="#">
                                    CEP
                                    <input type="Number" name="Cep" placeholder="00000-000" class="cep-profile">
                                    
                                </label>
                            </div>
                            <div class="col-6">
                                <label for="#">
                                    Rua
                                    <input type="text" name="Street" class="street-profile">
                                    
                                </label>
                            </div>
                        </div>
            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    Bairro
                                    <input type="text" name="Bairro" class="district-profile">
                                </label>
                            </div>
            
                            <div class="col-6">
                                <label for="#">
                                    Cidade
                                    <input type="text" name="City" class="city-profile">
                                </label>
                            </div>
                        </div>
                            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    UF
                                    <input type="text" name="Uf" class="uf-profile">
                                </label>
                            </div>
            
                            <div class="col-6">
                                <label for="#">
                                    Número
                                    <input type="Number" name="number" class="number-profile">
                                </label>
                            </div>
            
                        </div>
            
                        <div class="row">
                            <div class="col-12">
                                <label for="#">
                                    Complemento
                                    <input type="text" name="Complemento" class="complement-profile">
                                </label>
                            </div>
                        </div>
            
                        <button type="submit" class="btn btn-primary save-edit-profile">Save as Edit</button>
                        <button type="submit" class="btn btn-danger cancel-edit-profile">Cancel</button>
                    </form>
            
                </div>

            </div>
    </main>`

    fillInputsProfile()
    profileCallHome()
    clickEventReloadHome()
    loadEditProfile()
}

profilePage()
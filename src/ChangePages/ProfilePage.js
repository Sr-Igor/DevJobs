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
                <div class="col-2">
                    <div class="box-info-company">
                        <img src="src//images/DefaultProfile.jpg" alt="">
                        <div class="company-title">${currentUser.firstName} ${currentUser.lastName}</div>
                    </div>
                </div>

                <div class=" col-10 box-edit-profile">

                    <span class="title-edit-profile">Edit Profile</span>
                    <form>
                        <div class="row">
                            <div class="mb-3 col-12 box-edit-user"></div>
                        </div>
                        <div class="row">
                            <div class="mb-3 col-12">
                                <label class="form-label">Complet Name</label>
                                <input type="text" class="form-control completName-profile" value="${currentUser.firstName} ${currentUser.lastName}" aria-describedby="emailHelp" readonly>
                            </div>
                        </div>

                        <div class="row">
                            <div class="mb-3 col-6">
                                <label class="form-label"> Current Password</label>
                                <input type="password" class="form-control password-profile">
                            </div>
            
                            <div class="mb-3 col-6">
                                <label class="form-label">New Password</label>
                                <input type="password" class="form-control new-password" id="exampleInputPassword1">
                                <div class="form-text">Min 8 chars: [a-z] [0-9] special char</div>
                            </div>
                        </div>
            
                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="number" class="form-control phone-profile" aria-describedby="emailHelp" value="${currentUser.phone}" placeholder="(xx) x xxx-xxxx">
                                <div  class="form-text">Only Numbers</div>
                            </div>
            
                            <div class="mb-3 col-6">
                                <label for="exampleInputEmail1" class="form-label">CPF</label>
                                <input type="text" class="form-control cpf-profile" aria-describedby="emailHelp" value="${currentUser.cpf}" readonly>
                                <div class="form-text">Only Numbers</div>
                            </div>
                        </div>
            
                        <div class="row">
                            <div class="fs-4  title-subsection">Adress</div>
                            <div class="col-6">
                                <label for="#">
                                    CEP
                                    <input type="Number" name="Cep" placeholder="00000-000" class="cep-profile" value="${currentUser.adress.cep}">
                                    
                                </label>
                            </div>
                            <div class="col-6">
                                <label for="#">
                                    Rua
                                    <input type="text" name="Street" class="street-profile" value="${currentUser.adress.street}">
                                    
                                </label>
                            </div>
                        </div>
            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    Bairro
                                    <input type="text" name="Bairro" class="district-profile" value="${currentUser.adress.district}">
                                </label>
                            </div>
            
                            <div class="col-6">
                                <label for="#">
                                    Cidade
                                    <input type="text" name="City" class="city-profile" value="${currentUser.adress.city}">
                                </label>
                            </div>
                        </div>
                            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    UF
                                    <input type="text" name="Uf" class="uf-profile" value="${currentUser.adress.uf}">
                                </label>
                            </div>
            
                            <div class="col-6">
                                <label for="#">
                                    Número
                                    <input type="Number" name="number" class="number-profile" value="${currentUser.adress.number}">
                                </label>
                            </div>
            
                        </div>
            
                        <div class="row">
                            <div class="col-12">
                                <label for="#">
                                    Complemento
                                    <input type="text" name="Complemento" class="complement-profile" value="${currentUser.adress.complement}">
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary save-edit-profile">Save as Edit</button>
                        <button type="submit" class="btn btn-danger cancel-edit-profile">Cancel</button>
                    </form>
            
                </div>

            </div>
    </main>`

    profileCallHome()
    clickEventReloadHome()
    loadEditProfile()
    availableExit()
}

profilePage()
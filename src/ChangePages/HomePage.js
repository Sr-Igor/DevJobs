function startProcessHomePage(){
    let inicialPage = document.querySelector(".inicial-page")
    inicialPage.addEventListener('click', callHome)
}

function profileCallHome(){
    let homebutton = document.querySelector(".hello-profile")
    homebutton.addEventListener("click", callHome)
}

function changeHomePage(){

    document.querySelector(".change-section").innerHTML = `
    <header class="home-header">
        <div class="header">
            <div class="container">
                <div class="top-header">
                    <h1>DevJobs</h1>
                    <div class="user">
                            <div class="box-login" style="display: none;">
                                <button class="cssbuttons-io-button"  data-bs-toggle="modal" data-bs-target="#LoginModal"> Login or Register
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </div>


                        <div class="box-logout" style="display: flex; opacity: 1;">
                            <div class="circle">
                                <a  href="#" class="hello-profile"><i class="bi bi-person-circle"></i> Peril</a>
                                <a  href="#" class="my-applys"><i class="bi bi-window-plus"></i> Incrições</a>
                                <a  href ="/index.html" class="log-out"><i class="bi bi-box-arrow-right"></i> Exit</a>
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
        <div class=" container down-header">
            <form action="#" class="form-search">
                <label>
                    <i class="bi bi-search"></i>
                    <input type="text" name="find"  placeholder="Find your job" class="find-job">
                </label>
                <label>
                    <i class="bi bi-geo-alt"></i>
                    <select class="states">
                            <option value="0" selected>All Locations</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goias</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Parana</option>
                            <option value="PE">Peranambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                </label>
                <label class="checkbox">
                    <input type="checkbox" name="full-time" class="checkbox-full-time">
                    Full time only
                </label>
                <button class="search">Search</button>
            </form>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="box-jobs">
            </div>
        </div>
        <div class="more-jobs">
            <button>See More Jobs</button>
        </div>
    </main>

    <section class="Job-Modal">
        <div class="modal fade" tabindex="-1" id="myModal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content modal-job-modal">
                <div class="modal-header"></div> 
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col-12 button-loged" style="display: flex;">
                            <button type="button" class="btn-open-modal btn btn-primary" data-bs-toggle="modal" data-bs-target="#ApplyModal">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section class="Apply-Modal">
        <div class="modal fade" tabindex="-1" id="ApplyModal">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="src/images/bancoInter.png" alt="logo-job">
                    <h5 class="title-modal">Senior Software Enginner</h5>
                    <button type="button" class="btn-close after-apply" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form action="#" class="form-apply">
                    <div class="row">
                        <div class="col-12 error-send-menssage"><i class="bi bi-x"></i> Please, 
                            Complete all the fields correctly</div>
                    </div>
                    <div class="row">
                        <div class="fs-4 title-subsection">Profile Info</div>
                        <div class="col-6">
                            <input type="text" name="firstName" placeholder="Frist Name" class="first-name">
                        </div>
                        <div class="col-6">
                            <input type="text" name="lastName" placeholder="Last Name" class="last-name">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <input type="email" name="email" placeholder="Email" class="email">
                        </div>
                        <div class="col-6">
                            <input type="email" name="confirmEmail" placeholder="Confirm your email" class="confirm-email">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <input type="number" placeholder="Phone" class="phone">
                        </div>
                        
                    </div>

                        <div class="row">
                        <div class="fs-4  title-subsection">Adress</div>
                            <div class="col-6">
                                <label for="#">
                                    CEP
                                    <input type="Number" name="Cep" placeholder="00000-000" class="cep">
                                    
                                </label>
                            </div>
                            <div class="col-6">
                                <label for="#">
                                    Rua
                                    <input type="text" name="Street" class="street">
                                    
                                </label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    Bairro
                                    <input type="text" name="Bairro" class="district">
                                </label>
                            </div>

                            <div class="col-6">
                                <label for="#">
                                    Cidade
                                    <input type="text" name="City" class="city">
                                </label>
                            </div>
                        </div>
                            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    UF
                                    <input type="text" name="Uf" class="uf">
                                </label>
                            </div>

                            <div class="col-6">
                                <label for="#">
                                    Número
                                    <input type="Number" name="number" class="number">
                                </label>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-12">
                                <label for="#">
                                    Complemento
                                    <input type="text" name="Complemento" class="complement">
                                </label>
                            </div>
                        </div>

                        <div class="row">
                        <div class="fs-4  title-subsection">Send your CV</div>                             
                            <input type="file" class="file">
                        </div>
                    
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success sendApplyButton">Send Application</button>
                </div>
                <div class="modal-success">
                    <img src="src/icons/conc.gif" alt="">
                    <span>Send whit success</span>
                    <span>Good Luck</span>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section class="Login-Modal">
        <div class="modal fade" tabindex="-1" id="LoginModal">
            <div class="modal-dialog  modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="title-modal">Login or Register</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form action="#" class="form-apply">
                    <div class="row">
                        <div class="col-12">
                            <div class="login-error"><i class="bi bi-x"></i>User or password are incorrect</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="fs-4 title-subsection">Login</div>
                        <div class="col-12">
                            <input type="email" name="loginEmail" placeholder="Email" id="userInput">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <input type="password" name="loginPassword" placeholder="Password" id="passwordInput">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <button type="button" class="btn btn-success" id="loginButton">Login</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <strong>or</strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#RegisterModal">Register</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="professional-login">Se você é CNPJ <a href="modules/ProfessionalLoginPage/Professional.html">Clique Aqui</a></div>
                        </div>
                        
                    </div>
            </div>
            </div>
        </div>
    </section>

    <section class="Register-Modal">
        <div class="modal fade" tabindex="-1" id="RegisterModal">
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="title-modal">Login or Register</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form action="#" class="form-apply">
                    <div class="row">
                        <div class="fs-4 title-subsection">Register</div>
                        <div class="col-6">
                            <input type="text" name="firstName" placeholder="Frist Name">
                        </div>
                        <div class="col-6">
                            <input type="text" name="lastName" placeholder="Last Name">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <input type="email" name="email" placeholder="Email">
                        </div>
                        <div class="col-6">
                            <input type="email" name="confirmEmail" placeholder="Confirm your email">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                        <input type="password" name="password" placeholder="Password">
                        </div>
                        <div class="col-6">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <input type="number" placeholder="Phone">
                        </div>
                        
                    </div>

                        <div class="row">
                        <div class="fs-4  title-subsection">Adress</div>
                            <div class="col-6">
                                <label for="#">
                                    CEP
                                    <input type="Number" name="Cep" placeholder="00000-000">
                                    
                                </label>
                            </div>
                            <div class="col-6">
                                <label for="#">
                                    Rua
                                    <input type="text" name="Street">
                                    
                                </label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    Bairro
                                    <input type="text" name="Bairro">
                                </label>
                            </div>

                            <div class="col-6">
                                <label for="#">
                                    Cidade
                                    <input type="text" name="City">
                                </label>
                            </div>
                        </div>
                            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    UF
                                    <input type="text" name="Uf">
                                </label>
                            </div>

                            <div class="col-6">
                                <label for="#">
                                    Número
                                    <input type="Number" name="number">
                                </label>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-12">
                                <label for="#">
                                    Complemento
                                    <input type="text" name="Complemento" class="complement">
                                </label>
                            </div>
                        </div>
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Register</button>
                </div>
            </div>
            </div>
        </div>
    </section>
    `
    
    clickEventReloadHome()
    AvailableSearchItens()
    profilePage()
}
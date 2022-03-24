function OpenVacancysCompany(){
    let applysCompany = document.querySelector(".open-applys-company")
    applysCompany.addEventListener("click", fillApplysCompany)
}

function fillApplysCompany(){
    document.querySelector(".changePage").innerHTML =`
    <header>
    <div class="header">
        <div class="container">
            <div class="top-header">
                <h1>DevJobs Companys</h1>
                <div class="user">
                    <div class="box-login">
                        <div class="box-logout">
                            <div class="circle d-flex">
                                <a href="#" class="hello-profile"><i class="bi bi-person-circle"></i> Peril</a>
                                <a href="#" class="my-applys"><i class="bi bi-window-plus"></i> Vagas</a>
                                <a href="#" class="log-out"><i class="bi bi-box-arrow-right"></i> Exit</a>
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
        <div class="h3">Your Vacancys</div>
        <div class="box-jobs">
            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal">
                <div class="box-header">
                    <img src="/src/images/bancoInter.png" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">Full Time</div>
                    </div>
                    <div class="title-job">Senior Software Engineer</div>
                    <div class="language">English</div>
                    <div class="box-footer">Status: Open</div>
                </div>
            </div>

            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal">
                <div class="box-header">
                    <img src="/src/images/bancoInter.png" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">Full Time</div>
                    </div>
                    <div class="title-job">Senior Software Engineer</div>
                    <div class="language">English</div>
                    <div class="box-footer">Status: Open</div>
                </div>
            </div>

            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal">
                <div class="box-header">
                    <img src="/src/images/bancoInter.png" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">Full Time</div>
                    </div>
                    <div class="title-job">Senior Software Engineer</div>
                    <div class="language">English</div>
                    <div class="box-footer">Status: Open</div>
                </div>
            </div>


            <div class="box" data-bs-toggle="modal" data-bs-target="#myModal">
                <div class="box-header">
                    <img src="/src/images/bancoInter.png" alt="bancoInter">
                </div>
                <div class="box-body">
                    <div class="post">
                        <div class="days">14 days</div>
                        <span>*</span>
                        <div class="time-course">Full Time</div>
                    </div>
                    <div class="title-job">Senior Software Engineer</div>
                    <div class="language">English</div>
                    <div class="box-footer">Status: Open</div>
                </div>
            </div>
        </div>
    </div>
</main>

<section class="Job-Modal">
    <div class="modal fade" tabindex="-1" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
                <img src="/src/images/bancoInter.png" alt="logo-job">
                <h5 class="title-modal">Senior Software Enginner</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                        <p class="title-info">Requisitos:</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>ReactJs</li>
                            <li>Vue</li>
                            <li>Angular</li>
                            <li>MySQ</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <p class="title-info">Desejavel:</p>
                        <ul>
                            <li>PowerPoint</li>
                            <li>PacoteOffice</li>
                            <li>MovieMaker</li>
                            <li>Ilustrator</li>
                            <li>Photshop</li>
                            <li>Coreldraw</li>
                            <li>Lumia Fusion</li>
                            <li>Word</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <p class="title-info">Tipo: <strong>Senior</strong></p>
                        </div>
                        <div class="row">
                            <p class="title-info">Periodo: <strong>Full Time</strong></p>
                        </div>
                        <div class="row">
                            <p class="title-info">Salario:</p>
                            <strong class="fs-4">R$ 1.700,00</strong>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <p class="title-info">Beneficios:</p>
                        <ul>
                            <li>Vale Transporte</li>
                            <li>Vale Refeição</li>
                            <li>100% Home Offcie</li>
                            <li>Comissão por vendas</li>
                            <li>Cargo Escalavel</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <p class="title-info">Informações Adicionais:</p>
                            <span>Temos reuniões todas as sextas feiras as 19hrs, é desejavel que todos os intengrantes da equipe participem</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ApplyModal">Finish Vacancy</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ApplyModal">Edit Vacancy</button>
            </div>
          </div>
        </div>
      </div>
    </section>`

    backProfileUser()
}
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
                                <a href="/modules/ProfessionalLoginPage/Professional.html" class="log-out"><i class="bi bi-box-arrow-right"></i> Exit</a>
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
        <div class="h3">Your Vacancys Openned</div>
        <div class="box-jobs">
        you don't have open vacancys
        </div>
        <div class="h3">Your Vacancys Closed</div>
        <div class="box-jobs-finished">
        you don't have closed vacancys
        </div>
    </div>
</main>

<section class="Job-Modal">
    <div class="modal fade" tabindex="-1" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content job-modal-content">
          </div>
        </div>
      </div>
</section>

<section class="Applayes-Modal">
    <div class="modal fade" tabindex="-1" id="ApplyedsModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content applayeds-modal-content">
          </div>
        </div>
      </div>
</section>`

    fillBoxesVacancyCreator()
    fillBoxesVacancyFinised()
    backProfileUser()
}
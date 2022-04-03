function clickEventReloadHome(){
    let subsButton = document.querySelector(".my-applys")
    subsButton.addEventListener("click", changeSubsPage)
}

function changeSubsPage(){
    document.querySelector(".change-section").innerHTML = `
    <header class="home-header">
        <div class="header">
            <div class="container">
                <div class="top-header">
                    <h1>DevJobs</h1>
                    <div class="user">    
                        <div class="box-logout-subs">
                            <div class="circle">
                                <a href="#" class="hello-profile"><i class="bi bi-person-circle"></i> Perfil</a>
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
        <a href="#" class="inicial-page"><i class="bi bi-house"></i></a>
    </header>

    <main>
        <div class="container">
            <div class="h1">Your Subscriptions</div>
            <div class="box-vagancys">
             You are not applying for any open vacancy
            </div>
        </div>
        <div class="container">
        <div class="h1">Your Vacancies closed</div>
            <div class="box-vagancys-closed">
             You are not applying for any closed vacancy
            </div>
    </div>
        <section class="Job-Modal">
            <div class="modal fade" tabindex="-1" id="infoModal">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content modal-info">

                </div>
                </div>
            </div>
        </section>
    </main>
    `
    callApplyeds()
    startProcessHomePage()
    profilePage()
    availableExit()
}
clickEventReloadHome()


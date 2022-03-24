function availableEditProfile(){
    let buttonEditProfile = document.querySelector(".btn-edit-profile")
    buttonEditProfile.addEventListener("click", changeMainPage) 
}

function changeMainPage(){
    document.querySelector("main").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="box-info-company">
                        <img src="/src/images/bancoInter.png" alt="">
                        <div class="company-title">${currentUserCompany.companyName}</div>
                        <button class="btn btn-primary btn-create-vacancy">Create Vacancy</button>
                    </div>
                </div>
            
                <div class=" col-9 box-edit-profile">

                    <span class="title-create-job">Edit Profile</span>
                    <form>
                        <div class="row">
                            <div class="mb-3 col-12">
                                <label for="exampleInputEmail1" class="form-label">Company Name</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" value="${currentUserCompany.companyName}">
                                <div class="form-text">Fantasy Name</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="exampleInputPassword1" class="form-label"> Current Password</label>
                                <input type="password" class="form-control"  value="${currentUserCompany.password}">
                                <div class="form-text">Only letters and numbers</div>
                            </div>

                            <div class="mb-3 col-6">
                                <label for="exampleInputPassword1" class="form-label">New Password</label>
                                <input type="password" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="(xx) x xxx-xxxx"  value="${currentUserCompany.phone}">
                                <div class="form-text">Only Numbers</div>
                            </div>

                            <div class="mb-3 col-6">
                                <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                <input type="number" class="form-control" aria-describedby="emailHelp"  value="${currentUserCompany.cnpj}">
                                <div class="form-text">Only Numbers</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="fs-4  title-subsection">Adress</div>
                            <div class="col-6">
                                <label for="#">
                                    CEP
                                    <input type="Number" name="Cep" placeholder="00000-000"  value="${currentUserCompany.adress.cep}">
                                </label>
                            </div>
                            <div class="col-6">
                                <label for="#">
                                    Rua
                                    <input type="text" name="Street"  value="${currentUserCompany.adress.street}">
                                </label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    Bairro
                                    <input type="text" name="Bairro"  value="${currentUserCompany.adress.district}">
                                </label>
                            </div>

                            <div class="col-6">
                                <label for="#">
                                    Cidade
                                    <input type="text" name="City"  value="${currentUserCompany.adress.city}">
                                </label>
                            </div>
                        </div>
                            
                        <div class="row">
                            <div class="col-6">
                                <label for="#">
                                    UF
                                    <input type="text" name="Uf"  value="${currentUserCompany.adress.uf}">
                                </label>
                            </div>

                            <div class="col-6">
                                <label for="#">
                                    Número
                                    <input type="Number" name="number"  value="${currentUserCompany.adress.number}">
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

                        <button type="submit" class="btn btn-primary">Save as Edit</button>
                        <button type="submit" class="btn btn-danger">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `

    callCreateVacancy()
}
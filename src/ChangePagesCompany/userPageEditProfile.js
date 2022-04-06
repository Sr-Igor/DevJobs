function availableEditProfile(){
    let buttonEditProfile = document.querySelector(".btn-edit-profile")
    buttonEditProfile.addEventListener("click", changeMainPage) 
}

function changeMainPage(){
    document.querySelector("main").innerHTML = `
    <div class="container">
    <div class="row mobile-row">
        <div class="col-md-2 col-12">
            <div class="box-info-company">
                <img src="/src/images/DefaultProfileCompany.png" alt="">
                <div class="company-title color-ct" data-key-company=""></div>
                <a href="/Pages/CompanyPages/UserPage/ProfessionalUser.html" class="btn btn-primary btn-create-vacancy">Create Vacancy</a>
            </div>
        </div>
        <div class=" col-10 box-edit-profile">

            <span class="title-create-job">Edit Profile</span>
            <form class="edit-profile-form">
                <div class="row">
                    <div class="mb-3 col-12 box-message-edit-profile"></div>
                </div>
                <div class="row">
                    <div class="mb-3 col-12">
                        <label for="exampleInputEmail1" class="form-label">Company Name</label>
                        <input type="text" class="form-control edit-company-name" aria-describedby="emailHelp" >
                        <div class="form-text">Fantasy Name</div>
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-6">
                        <label for="exampleInputPassword1" class="form-label"> Current Password</label>
                        <input type="password" class="form-control current-password">
                        <div class="form-text">Only letters and numbers</div>
                    </div>

                    <div class="mb-3 col-6">
                        <label for="exampleInputPassword1" class="form-label">New Password</label>
                        <input type="password" class="form-control new-password">
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-6">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="number" class="form-control phone-edit" aria-describedby="emailHelp" placeholder="(xx) x xxx-xxxx"  >
                        <div class="form-text">Only Numbers</div>
                    </div>

                    <div class="mb-3 col-6">
                        <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                        <input type="number" class="form-control cnpj-edit" aria-describedby="emailHelp" >
                        <div class="form-text">Only Numbers</div>
                    </div>
                </div>

                <div class="row">
                    <div class="fs-4  title-subsection">Address</div>
                    <div class="col-md-6 col-12">
                        <label for="#">
                            CEP
                            <input class="cep-edit" type="Number" name="Cep" placeholder="00000-000"  >
                        </label>
                    </div>
                    <div class="col-md-6 col-12">
                        <label for="#">
                            Street
                            <input class="street-edit" type="text" name="Street" >
                        </label>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-12">
                        <label for="#">
                            District
                            <input class="district-edit" type="text" name="Bairro">
                        </label>
                    </div>

                    <div class="col-md-6 col-12">
                        <label for="#">
                            City
                            <input class="city-edit" type="text" name="City">
                        </label>
                    </div>
                </div>
                    
                <div class="row">
                    <div class="col-md-6 col-12">
                        <label for="#">
                            UF
                            <input class="uf-edit" type="text" name="Uf">
                        </label>
                    </div>

                    <div class="col-md-6 col-12">
                        <label for="#">
                            Number
                            <input class="number-edit" type="Number" name="number">
                        </label>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <label for="#">
                            Complement
                            <input class="complement-edit" type="text" name="Complemento" class="complement">
                        </label>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-save-edit">Save as Edit</button>
                <button type="submit" class="btn btn-danger btn-cancel-edit">Cancel</button>
            </form>
        </div>
    </div>
</div>
    `

    fillProfilePage()
    loadEditProfile()
    changeModeProfileCompany()
}
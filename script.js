let lightSwitch = document.querySelector(".light-switch")

lightSwitch.addEventListener("click", changeMode)

function changeMode(){
    lightSwitch.classList.toggle("dark")
}
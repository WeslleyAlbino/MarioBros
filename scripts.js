
const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-form")

function clikbotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"  
    form.style.transition = "1.5s"
    mascara.style.visibility = "visible"
}

function sairform(){
    form.style.left = "-275px"
    form.style.transform = "translateX(0)"
    form.style.transition = "0.5s"
    mascara.style.visibility = "hidden"

}
let boton=document.getElementById("boton")

let nombres=document.getElementById("nombres")
let salario=document.getElementById("salario")
let horas=document.getElementById("horas")
let cargo=document.getElementById("cargo")
let experiencia=document.getElementById("experiencia")

//escuchamos el evento de hacerle clic al boton del formulario
boton.addEventListener("click",function(evento){

    evento.preventDefault()
  
    nombreIngresado=nombres.value
    salarioIngresado=salario.value
    horasIngresadas=horas.value
    cargoIngresado=cargo.value 
    experienciaIngresada=experiencia.value 

    let datos=JSON.stringify({
        nombresEmpleado:nombreIngresado,
        salarioEmpleado:salarioIngresado,
        horasEmpleado:horasIngresadas,
        cargoEmpleado:cargoIngresado,
        experienciaEmpleado:experienciaIngresada
    })


})
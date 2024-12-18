import { guardarEnfermedad } from "../../services/enfermedadService.js"

let nombreEnfermedad = document.getElementById("nombreEnfermedad")
let sintomasEnfermedad = document.getElementById("sintomasEnfermedad")
let clasificacionEnfermedad = document.getElementById("clasificacionEnfermedasd")
let gradoEnfermdad = document.getElementById("gradoEnfermedad")
let probabilidadVida = document.getElementById("probabilidadDeVida")

let botonRegistroEnfermedad = document.getElementById("botonRegistroEnfermedad")

botonRegistroEnfermedad.addEventListener("click", function(evento) {
    evento.preventDefault()

    let datosFormularioEnfermedad = {
        nombre: nombreEnfermedad.value,
        sintomas: sintomasEnfermedad.value,
        clasificacion: clasificacionEnfermedad.value,
        grado: gradoEnfermdad.value,
        probavilidadVida: probabilidadVida.value
    }

    console.dir(datosFormularioEnfermedad);
    console.error(validarDatos())
    if (validarDatos()) {
        guardarEnfermedad(datosFormularioEnfermedad)
            .then((respuesta) => {
                console.log(respuesta);
                Swal.fire({
                    title: "Registro exitoso",
                    text: "Ya eres parte de nuestra gran familia",
                    icon: "success",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
})

function validarDatos() {
    if (sintomasEnfermedad.value != "" && clasificacionEnfermedad.value != "" && gradoEnfermdad.value != "" && probabilidadVida.value != "") {
        return true
    } else {
        Swal.fire({
            title: "Necesitas ingresar datos",
            text: "Ingresa correctamente los campos",
            icon: "error",
        });
        return false
    }
}

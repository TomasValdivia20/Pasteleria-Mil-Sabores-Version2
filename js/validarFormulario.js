const formulario = document.getElementById('formularioReg');
function validarFormulario(){
//Elementos de formulario//


//Inicialización de IDs//
let inputRut = document.getElementById("inputRut").value;
const inputNombre = document.getElementById("inputNombre").value;
const inputApellido = document.getElementById("inputApellido").value;
const inputDireccion = document.getElementById("inputDireccion").value;
const inputRegion = document.getElementById("inputRegion").value;
const inputCorreo = document.getElementById("inputCorreo").value;
const inputContra = document.getElementById("inputContra").value;


//If de validaciones//

if (!rutvalidado.validarRut(inputRut)){
   alert('Rut inválido, seguir formato (11111111-1)')
   return false;
}

if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputNombre)){
    alert('Nombre inválido, solo se permiten caracteres')
    return false;
}

if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputApellido)){
    alert('Apellido inválido, solo se permiten caracteres')
    return false;
}

if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputDireccion)){
    alert('Direccion inválida, solo se permiten caracteres')
    return false;
}

if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputRegion)){
    alert('Region inválida, solo se permiten caracteres')
    return false;
}

if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inputCorreo)){
    alert('Correo inválido')
    return false;
}

if (inputContra < 6){
    alert('Contraseña inválida, tiene que ser mayor de 6 caracteres')
    return false;
}

return true
}

var rutvalidado = {validarRut(rut) {
            rut = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();
            if (!/^\d{7,8}[0-9K]$/.test(rut)) return false;

            const cuerpo = rut.slice(0, -1);
            const dv = rut.slice(-1);

            let suma = 0;
            let multiplo = 2;

            for (let i = cuerpo.length - 1; i >= 0; i--) {
                suma += parseInt(cuerpo.charAt(i)) * multiplo;
                multiplo = multiplo < 7 ? multiplo + 1 : 2;
            }

            const dvEsperado = 11 - (suma % 11);
            let dvCalculado = '';

            if (dvEsperado === 11) dvCalculado = '0';
            else if (dvEsperado === 10) dvCalculado = 'K';
            else dvCalculado = dvEsperado.toString();


            return dvCalculado === dv;
        }
        }

        // Capturamos el submit del formulario
        document.getElementById('formularioReg').addEventListener('submit', function(event) {
            event.preventDefault();  // Evita que el formulario recargue la página
        if (validarFormulario()){
            alert('Registro completado exitosamente')
            this.submit()
        }
    
        });




 function changeImage(event, src) {
            document.getElementById('mainImage').src = src;
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            event.target.classList.add('active');
        }
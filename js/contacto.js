function verificarVacio(campo, mensaje_error){
    // Verifica si el campo esta vacio
    if(campo.value === null || campo.value == ""){
        campo.classList.add("form-error");
        mensaje_error.innerText = "El campo no puede estar vacio."
    }else{
        campo.classList.remove("form-error");
        mensaje_error.innerText = " "
    }
};

function limitarCaracteres(e){
    const inputValue = e.target.value;
    const filtered = inputValue.replace(nombreExp, "");
    e.target.value = filtered;
}

function validarEmail(email, mensaje_error){
    if(regExEmail.test(email.value)){
        email.classList.remove("form-error");
        //console.log(campo.value)
        mensaje_error.innerText = " "
    }else{
        email.classList.add("form-error");
        mensaje_error.innerText = "El email debe seguir el siguiente formato: name@example.com."
    }
}

const nombreExp = /[^A-Za-zÀ-ÿ ']/
const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("form");
    const campo_nombre = document.getElementById("nombre");
    const campo_apellido = document.getElementById("apellido");
    const campo_email = document.getElementById("email");
    const campo_consulta = document.getElementById("consulta");

    const error_nombre = document.getElementById("error-nombre");
    const error_apellido = document.getElementById("error-apellido");
    const error_email = document.getElementById("error-email");
    const error_consulta = document.getElementById("error-consulta");

    campo_nombre.addEventListener("input", e => limitarCaracteres(e));
    campo_apellido.addEventListener("input", e => limitarCaracteres(e));


    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        verificarVacio(campo_nombre, error_nombre);
        verificarVacio(campo_apellido, error_apellido);
        verificarVacio(campo_email, error_email);
        verificarVacio(campo_consulta, error_consulta);

        campo_email.value && validarEmail(campo_email, error_email);

    });
});
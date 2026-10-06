const formulario = document.getElementById("formLogin");

const correo = document.getElementById("correo");
const password = document.getElementById("password");

const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");

const mensajeGeneral = document.getElementById("mensajeGeneral");


formulario.addEventListener("submit", function (event) {

    // Evita que el navegador envíe el formulario
    event.preventDefault();


    // Limpiar mensajes anteriores
    errorCorreo.textContent = "";
    errorPassword.textContent = "";
    mensajeGeneral.textContent = "";

    correo.classList.remove("input-error");
    password.classList.remove("input-error");


    // Obtener valores
    const correoIngresado = correo.value.trim();
    const passwordIngresado = password.value.trim();


    let formularioValido = true;

    // VALIDAR CORREO

    if (correoIngresado === "") {

        errorCorreo.textContent =
            "El correo electrónico es obligatorio.";

        correo.classList.add("input-error");

        formularioValido = false;

    }
    else if (!validarCorreo(correoIngresado)) {

        errorCorreo.textContent =
            "Ingresa un correo electrónico válido.";

        correo.classList.add("input-error");

        formularioValido = false;
    }

    // VALIDAR CONTRASEÑA

    if (passwordIngresado === "") {

        errorPassword.textContent =
            "La contraseña es obligatoria.";

        password.classList.add("input-error");

        formularioValido = false;

    }
    else if (!validarPassword(passwordIngresado)) {

        errorPassword.textContent =
            "La contraseña no cumple con los requisitos.";

        password.classList.add("input-error");

        formularioValido = false;
    }


    if (!formularioValido) {

        return;
    }


    // GUARDAR USUARIO
    localStorage.setItem(
        "usuarioLogueado",
        correoIngresado
    );


    // IR AL SISTEMA
    window.location.href = "index.html";

});
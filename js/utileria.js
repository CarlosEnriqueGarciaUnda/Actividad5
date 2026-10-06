// Validación de correo electrónico mediante expresión regular
function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

// Validación de contraseña (no vacía y longitud mínima opcional)
function validarPassword(password) {
  return password !== null && password.trim().length >= 4;
}
// Formulario de contacto simple

// Obtenemos los elementos del formulario
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

// Cuando se envía el formulario
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  // Validamos que los campos obligatorios no estén vacíos
  if (nameInput.value.trim() === "") {
    alert("Por favor, introduce tu nombre");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Por favor, introduce tu email");
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Por favor, escribe un mensaje");
    return;
  }

  // Si todo está bien, mostramos el mensaje de éxito
  successMessage.classList.remove("hidden");

  // Limpiamos el formulario
  form.reset();

  // Ocultamos el mensaje después de 4 segundos
  setTimeout(function () {
    successMessage.classList.add("hidden");
  }, 4000);
});

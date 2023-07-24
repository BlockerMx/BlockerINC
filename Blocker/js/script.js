// Obtener los elementos de los botones de Iniciar Sesión y Registrarte
const loginButton = document.querySelector('a[href="#InicioSesion"]');
const registerButton = document.querySelector('a[href="#Registro"]');

// Agregar eventos de clic a los botones
loginButton.addEventListener('click', scrollToSection);
registerButton.addEventListener('click', scrollToSection);

// Función para desplazarse suavemente a la sección correspondiente
function scrollToSection(event) {
    event.preventDefault();
    const targetSectionId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetSectionId);

    // Calcular la posición del inicio de la sección
    const sectionTop = targetSection.getBoundingClientRect().top;

    // Desplazarse suavemente utilizando el método scrollIntoView
    window.scrollBy({
        top: sectionTop,
        behavior: 'smooth'
    });
}

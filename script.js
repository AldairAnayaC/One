// Interactividad para el botón de búsqueda
document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    alert(`Buscando: ${searchTerm}`);
});

// Interactividad para el formulario de newsletter
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    alert(`Gracias por suscribirte con el correo: ${email}`);
});

// Interactividad para los botones de recetas
document.querySelectorAll('.view-recipe').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Receta en desarrollo! Pronto estará disponible.');
    });
});
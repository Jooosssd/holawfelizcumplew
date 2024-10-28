const confettiContainer = document.querySelector('.confetti-container');
const audio = document.getElementById('hola');

// Función para crear confeti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Cambiar el color de cada pieza de confeti aleatoriamente
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    // Posicionar el confeti aleatoriamente
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * -50}px`; // Comienza arriba de la pantalla

    confettiContainer.appendChild(confetti);

    // Eliminar el confeti después de la animación
    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

// Intento de reproducción automática
function tryPlayAudio() {
    audio.play().catch(() => {
        // Si el navegador bloquea el audio, añade el evento click para reproducir
        document.body.addEventListener('click', startAudio);
    });
}

// Reproducir audio al hacer clic en la página si falló el intento automático
function startAudio() {
    audio.play();
    document.body.removeEventListener('click', startAudio); // Remover evento después de la reproducción
}

// Ejecutar confeti y el intento de reproducción al cargar
window.onload = () => {
    tryPlayAudio();
    setInterval(createConfetti, 100);
};

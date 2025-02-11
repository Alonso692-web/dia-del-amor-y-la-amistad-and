document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Mensajes personalizados para Andy
    const messages = [
        "Andy, tqm <3",
        "Admiro tu fuerza, siempre echándole ganas 💪",
        "Me encanta pasar el tiempo contigo ⏳",
        "Es reconfortante el tiempo que pasamos juntos 🌟",
        "¿Te gustaría ser mi San Valentín? 🌹" // Pregunta directa
    ];

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('flip')) return;

            const back = card.querySelector('.back');
            back.textContent = messages[index];

            card.classList.add('flip');

            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("¡Espero que digas que sí! ❤️");

                    // Abre una nueva pestaña con el video de YouTube en el segundo 10
                    window.open("https://www.youtube.com/watch?v=wB0bhtZ4NR8&t=10s", '_blank');

                }, 800);
            }
        });
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.querySelector('.heart-rain').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 300);
});
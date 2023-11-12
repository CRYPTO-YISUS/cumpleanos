document.addEventListener("DOMContentLoaded", function () {
    const balloonContainer = document.querySelector(".balloons");

    // Iniciar generación de globos
    generateBalloons();

    function generateBalloons() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => { // Agregado un retraso para generar los globos escalonadamente
                const balloon = createBalloon();
                balloonContainer.appendChild(balloon);
            }, i * 1000); // Se incrementa el tiempo de espera para cada globo
        }
    }

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = getRandomColor(); // Asignar color al fondo
        return balloon;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

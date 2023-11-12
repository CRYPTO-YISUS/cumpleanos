document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const audio = document.getElementById("myAudio");
    const text1 = document.getElementById("t1");
    const text2 = document.getElementById("t2");
    const text3 = document.getElementById("t3");

    startButton.addEventListener("click", function () {
        // Inicia la música
        audio.play();

        // Cambia la clase para activar estilos adicionales
        startButton.classList.add("active");

        // Inicia las animaciones después de hacer clic en el botón
        const balloonContainer = document.querySelector(".balloons");
        generateBalloons(balloonContainer);
        startAnimations();

        // Muestra el texto al iniciar
        text1.classList.remove("t1");
        text2.classList.remove("t2");
        text3.classList.remove("t3");
        startButton.style.display = "none";
    });

    function generateBalloons(container) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const balloon = createBalloon();
                container.appendChild(balloon);
            }, i * 1000);
        }
    }

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = getRandomColor();
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

    function startAnimations() {
        // Agrega aquí las animaciones que quieras iniciar después de hacer clic en el botón
        const message = document.querySelector(".message");
        message.style.animation = "textScale 5s linear infinite alternate, blink 2s linear infinite";
    }
});

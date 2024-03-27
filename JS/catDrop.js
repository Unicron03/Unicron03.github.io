
let audio = new Audio('Sounds/NyanCat.ogg');

document.getElementById("catDrop").addEventListener("click", function() {
    if(audio.paused) {
        alert('ACTIVER LE SON !!! \u{1F63A}');
        audio.play();
        setTimeout(() => {
            let intervalId = setInterval(createImage, 10);
            setTimeout(() => {
                clearInterval(intervalId);
            }, 10000);
        }, 4000);
    
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 19000);
    }

    function createImage() {
        let img = document.createElement('img');
        img.src = 'Image/cat.png';
        img.height
        img.style.position = 'fixed';
        img.style.top = '0px';
        img.style.left = Math.random() * window.innerWidth + 'px';
        img.style.animation = 'fall 5s linear';
        img.style.transform = 'scale(2)'
        document.body.appendChild(img);
        setTimeout(() => {
            document.body.removeChild(img);
        }, 5000);
    }
});

let style = document.createElement('style');
    style.innerHTML = `
    @keyframes fall {
        to {
        transform: translateY(100vh);
        }
    }
    `;
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = document.getElementById('music-player');
    const scrollButton = document.getElementById('scroll-button');
    const footer = document.querySelector('footer');

    function checkFooterVisibility() {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top <= window.innerHeight && footerRect.bottom >= 0;

        if (isFooterVisible) {
            // Adiciona fade-out quando o rodapé estiver visível
            musicPlayer.classList.remove('fade-in');
            musicPlayer.classList.add('fade-out');
            scrollButton.classList.remove('fade-in');
            scrollButton.classList.add('fade-out');
        } else {
            // Adiciona fade-in quando o rodapé não estiver visível
            musicPlayer.classList.remove('fade-out');
            musicPlayer.classList.add('fade-in');
            scrollButton.classList.remove('fade-out');
            scrollButton.classList.add('fade-in');
        }
    }

    // Verifica a visibilidade do rodapé ao rolar a página
    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); 
});
 
  // Efeito de surgimento na pagina
  AOS.init();

// Função de contagem regressiva
function countdown() {
    const eventDate = new Date("2024-12-15T00:00:00").getTime();
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown-timer").innerHTML = "O grande dia chegou!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
// Iniciar a contagem regressiva
document.addEventListener("DOMContentLoaded", countdown);

// Controle do número de acompanhantes
function increment() {
    const input = document.getElementById("acompanhantes");
    input.value = parseInt(input.value) + 1;
}

function decrement() {
    const input = document.getElementById("acompanhantes");
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

// Função para exibir mensagem de confirmação
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("rsvp-form").classList.add("hidden"); 
    document.getElementById("confirmation-message").classList.remove("hidden"); 
});


 // Efeito de corações caindo
 function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

document.addEventListener("DOMContentLoaded", function() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
    waveColor: '#d58e94',
    progressColor: '#4d4d4d',
    cursorColor: 'transparent',
    height: 20,         
    barWidth: 1.5,     
    barGap: 2,            
    responsive: true
    });

    const tracks = [
        'src/musica/all-of-me.mp3',
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        wavesurfer.load(tracks[index]);
        document.getElementById("play-pause-btn").innerText = "▶"; 
    }

    document.getElementById("play-pause-btn").addEventListener("click", function() {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
            this.innerText = "▶"; 
        } else {
            wavesurfer.play();
            this.innerText = "❚❚"; 
        }
    });

    document.getElementById("prev-btn").addEventListener("click", function() {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            loadTrack(currentTrackIndex);
            wavesurfer.play();
        }
    });

    document.getElementById("next-btn").addEventListener("click", function() {
        if (currentTrackIndex < tracks.length - 1) {
            currentTrackIndex++;
            loadTrack(currentTrackIndex);
            wavesurfer.play();
        }
    });

    // Carregar a música e tocar automaticamente
    loadTrack(currentTrackIndex);
    wavesurfer.on('ready', function() {
        wavesurfer.play();
    });
});

// Abrir o menu lateral em dispositivos moveis
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.display = 'block'; 
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.style.display = 'none'; 
    }
     // Adiciona classe de efeito de surgimento ao abrir o menu
     if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('slide-in');
    } else {
        mobileMenu.classList.remove('slide-in');
    }
}

// ==========================================
// 1. Lógica do Player de Música
// ==========================================
const audio = document.getElementById('nossa-musica');
const vinylImage = document.getElementById('vinyl-image');
const playIcon = document.getElementById('play-icon');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        vinylImage.classList.remove('playing');
        playIcon.classList.remove('hidden');
        isPlaying = false;
    } else {
        audio.play().then(() => {
            vinylImage.classList.add('playing');
            playIcon.classList.add('hidden');
            isPlaying = true;
        }).catch(error => {
            alert("Ops! Não foi possível tocar a música. Verifique o arquivo mp3.");
            console.error("Erro no áudio:", error);
        });
    }
}

// ==========================================
// 2. Corações Flutuantes (Maiores e em tons fortes)
// ==========================================
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = Math.random() > 0.5 ? '❤' : '✨'; 
    
    // Posição aleatória na tela
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Velocidade de subida aleatória
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    // NOVO: Tamanho ainda maior (variando entre 25px e 60px)
    heart.style.fontSize = Math.floor(Math.random() * 55 + 45) + 'px';
    
    // NOVO: Paleta de cores fortes (Vermelhos intensos e Rosas escuros)
    const cores = ['#FF0000', '#CC0000', '#D81159', '#FF1493', '#FF0055'];
    heart.style.color = cores[Math.floor(Math.random() * cores.length)];
    
    // NOVO: Um pequeno brilho no fundo de cada coração para destacar a cor
    heart.style.textShadow = "0px 0px 8px rgba(255, 255, 255, 0.4)";
    
    document.body.appendChild(heart);
    
    // Remove o coração da memória depois de 7 segundos
    setTimeout(() => { heart.remove(); }, 7000);
}

// Cria os corações rapidamente (a cada 150 milissegundos)
setInterval(createHeart, 150);

// ==========================================
// 3. Cronômetro (Anos, Meses e Dias)
// ==========================================
// Coloque a data do início do namoro no formato: 'ANO-MES-DIA'
const dataInicio = new Date('2023-06-25T00:00:00');

function atualizarCronometro() {
    const elementoTimer = document.getElementById('timer');
    if (elementoTimer) {
        const hoje = new Date();
        let anos = hoje.getFullYear() - dataInicio.getFullYear();
        let meses = hoje.getMonth() - dataInicio.getMonth();
        let dias = hoje.getDate() - dataInicio.getDate();

        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }
        if (meses < 0) {
            anos--;
            meses += 12;
        }

        let partes = [];
        if (anos === 1) partes.push("1 ano");
        else if (anos > 1) partes.push(`${anos} anos`);

        if (meses === 1) partes.push("1 mês");
        else if (meses > 1) partes.push(`${meses} meses`);

        if (dias === 1) partes.push("1 dia");
        else if (dias !== 1 || partes.length === 0) partes.push(`${dias} dias`);

        let resultado = partes.join(', ').replace(/, ([^,]*)$/, ' e $1');
        elementoTimer.innerText = resultado;
    }
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000 * 60 * 60);
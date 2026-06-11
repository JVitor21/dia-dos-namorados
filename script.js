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
// 2. Corações Flutuantes
// ==========================================
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = Math.random() > 0.5 ? '❤' : '✨'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}
setInterval(createHeart, 400);

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
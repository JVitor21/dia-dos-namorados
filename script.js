// ==========================================
// 3. Lógica do Cronômetro (Anos, Meses e Dias)
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

        // Se os dias derem negativo, pegamos dias "emprestados" do mês anterior
        if (dias < 0) {
            meses--;
            // Pega o total de dias do mês anterior exato
            const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        // Se os meses derem negativo, pegamos meses "emprestados" do ano
        if (meses < 0) {
            anos--;
            meses += 12;
        }

        // Montando o texto final de forma inteligente (para não mostrar "0 anos", por exemplo)
        let partes = [];
        
        if (anos === 1) partes.push("1 ano");
        else if (anos > 1) partes.push(`${anos} anos`);

        if (meses === 1) partes.push("1 mês");
        else if (meses > 1) partes.push(`${meses} meses`);

        if (dias === 1) partes.push("1 dia");
        else if (dias !== 1 || partes.length === 0) partes.push(`${dias} dias`);

        // Junta tudo colocando uma vírgula e um "e" no último item
        let resultado = partes.join(', ').replace(/, ([^,]*)$/, ' e $1');

        elementoTimer.innerText = resultado;
    }
}

// Atualiza a caixinha
atualizarCronometro();
// Como não usamos mais segundos, ele confere se virou o dia a cada hora
setInterval(atualizarCronometro, 1000 * 60 * 60);
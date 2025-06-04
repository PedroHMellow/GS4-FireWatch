// Adicione seu código JavaScript aqui para interagir com a API, atualizar a interface, etc. 

document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/pontosfoco')
        .then(response => response.json())
        .then(data => {
            const pontosFocoList = document.getElementById('pontos-foco-list');
            data.forEach(ponto => {
                const card = document.createElement('div');
                card.className = 'ponto-foco-card';
                
                const dataHora = new Date(ponto.dataHora).toLocaleString('pt-BR');
                const status = ponto.ativo ? 'Ativo' : 'Inativo';
                const statusClass = ponto.ativo ? 'ativo' : 'inativo';
                
                card.innerHTML = `
                    <h3>Ponto de Foco #${ponto.id}</h3>
                    <p><strong>Localização:</strong> ${ponto.latitude.toFixed(4)}, ${ponto.longitude.toFixed(4)}</p>
                    <p><strong>Data/Hora:</strong> ${dataHora}</p>
                    <p><strong>Status:</strong> <span class="status ${statusClass}">${status}</span></p>
                `;
                
                pontosFocoList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar pontos de foco:', error);
            const pontosFocoList = document.getElementById('pontos-foco-list');
            pontosFocoList.innerHTML = '<p>Erro ao carregar os pontos de foco. Por favor, tente novamente mais tarde.</p>';
        });
}); 
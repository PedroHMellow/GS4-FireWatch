// Atualiza as estatísticas do dashboard e a barra de status
function updateDashboardStats() {
    // Dados fictícios para demonstração
    const stats = {
        activeFires: 25, // Dados fictícios
        pendingAlerts: 11,
        resolvedIncidents: 155,
        avgResponse: '20 min'
    };

    // Atualiza os elementos do DOM (verificando se existem)
    const activeFiresElement = document.getElementById('active-fires');
    if (activeFiresElement) activeFiresElement.textContent = stats.activeFires;

    const pendingAlertsElement = document.getElementById('pending-alerts');
    if (pendingAlertsElement) pendingAlertsElement.textContent = stats.pendingAlerts;

    const resolvedIncidentsElement = document.getElementById('resolved-incidents');
    if (resolvedIncidentsElement) resolvedIncidentsElement.textContent = stats.resolvedIncidents;

    const avgResponseElement = document.getElementById('avg-response');
    if (avgResponseElement) avgResponseElement.textContent = stats.avgResponse;

    // Dados simulados adicionais para o Status Bar (se o layout o incluir)
    const sensorsOnlineElement = document.getElementById('sensors-online');
    if (sensorsOnlineElement) sensorsOnlineElement.textContent = '50'; // Exemplo

    const dronesAvailableElement = document.getElementById('drones-available');
    if (dronesAvailableElement) dronesAvailableElement.textContent = '7'; // Exemplo

    const activeIncidentsElement = document.getElementById('active-incidents');
    if (activeIncidentsElement) activeIncidentsElement.textContent = stats.activeFires; // Exemplo
}

// Simula dados para a lista de Alertas Recentes
function simulateRecentAlerts() {
    const alertsListElement = document.getElementById('recent-alerts-list');
    if (!alertsListElement) return;

    const fictitiousAlerts = [
        {
            level: 'Crítico',
            location: 'Parque Nacional do Iguaçu - Trilha das Cataratas',
            sensor: 'Sensor #012',
            time: 'Agora'
        },
        {
            level: 'Alto',
            location: 'Reserva Ecológica da Tijuca - Setor B',
            sensor: 'Sensor #025',
            time: '15 min atrás'
        },
        {
            level: 'Médio',
            location: 'Zona Rural de Campinas - Sítio Recanto Verde',
            sensor: 'Denúncia Cidadã #158',
            time: '45 min atrás'
        },
        {
            level: 'Alto',
            location: 'Serra da Mantiqueira - Pico da Onça',
            sensor: 'Sensor #030',
            time: '1 hora atrás'
        },
         {
            level: 'Crítico',
            location: 'Floresta Amazônica - Área de Desmate Recente',
            sensor: 'Sensor Satélite #001',
            time: '3 horas atrás'
        },
         {
            level: 'Médio',
            location: 'Proximidades da Rodovia BR-116 km 50',
            sensor: 'Denúncia Cidadã #160',
            time: '5 horas atrás'
        }
    ];

    alertsListElement.innerHTML = ''; // Limpa a lista atual

    fictitiousAlerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.classList.add('alert-item');
        // Adiciona classe de cor baseada no nível do alerta (para estilização CSS)
        let colorClass = '';
        if (alert.level === 'Crítico') colorClass = 'critical';
        else if (alert.level === 'Alto') colorClass = 'warning';
        else colorClass = 'info'; // Médio e outros
        alertItem.classList.add(colorClass);

        // Adiciona ícone baseado no nível (usando Font Awesome)
        let iconClass = '';
        if (alert.level === 'Crítico') iconClass = 'fas fa-fire';
        else if (alert.level === 'Alto') iconClass = 'fas fa-exclamation-triangle';
        else iconClass = 'fas fa-bell';

        alertItem.innerHTML = `
            <div class="alert-icon"><i class="${iconClass}"></i></div>
            <div class="alert-content">
                <div class="alert-title">Alerta: ${alert.level} em ${alert.location}</div>
                <div class="alert-description">Sensor/Fonte: ${alert.sensor}</div>
                <div class="alert-time">${alert.time}</div>
            </div>
        `;
        alertsListElement.appendChild(alertItem);
    });
}

// Simula um breve relatório e lista de Atividade dos Drones
function simulateDroneActivity() {
    const droneListElement = document.getElementById('drone-status-list'); // ID do div dentro de .drone-activity
    const parentSection = document.querySelector('#dashboard .drone-activity'); // Seleciona a seção pai

     if (!droneListElement || !parentSection) return;

    droneListElement.innerHTML = ''; // Limpa o conteúdo atual da lista

    // Adiciona dados fictícios de drones na lista
     const fictitiousDrones = [
        { id: 'DRN001', status: 'Em Missão', location: 'Região Sul', battery: '75%' },
        { id: 'DRN002', status: 'Disponível', location: 'Base Central', battery: '90%'  },
        { id: 'DRN003', status: 'Em Missão', location: 'Região Oeste', battery: '60%'  },
        { id: 'DRN004', status: 'Manutenção', location: 'Base Norte', battery: '--'  },
        { id: 'DRN005', status: 'Disponível', location: 'Base Sul', battery: '88%'  },
         { id: 'DRN006', status: 'Em Missão', location: 'Região Sudeste', battery: '70%'  },
          { id: 'DRN007', status: 'Disponível', location: 'Base Leste', battery: '95%'  },
     ];

    fictitiousDrones.forEach(drone => {
        const droneItem = document.createElement('div');
        droneItem.classList.add('drone-item');
        let statusClass = '';
        if (drone.status === 'Em Missão') statusClass = 'mission';
        else if (drone.status === 'Disponível') statusClass = 'operational';
        else statusClass = 'maintenance'; // Simulação básica

        droneItem.innerHTML = `
            <span class="drone-status ${statusClass}"></span>
            <div class="drone-info">
                <h4>Drone ${drone.id} - ${drone.status}</h4>
                <p class="drone-location">Localização: ${drone.location}</p>
                ${drone.battery !== '--' ? `<p class="drone-battery">Bateria: ${drone.battery}</p>` : ''}
            </div>
        `;
        droneListElement.appendChild(droneItem);
    });

     // Simula o texto do relatório, adicionando-o uma única vez abaixo da lista, se ainda não existir
     let reportTextElement = parentSection.querySelector('.drone-report-text');
     if (!reportTextElement) {
         reportTextElement = document.createElement('div');
         reportTextElement.classList.add('drone-report-text');
         reportTextElement.style.marginTop = '20px'; // Espaçamento
         parentSection.appendChild(reportTextElement);
     }
    reportTextElement.innerHTML = '<p><strong>Resumo de Operações de Drones:</strong> Atualmente, temos <strong>3 drones em missão</strong> de monitoramento ativo e resposta rápida em diversas regiões de risco. Há <strong>7 drones disponíveis</strong> em diferentes bases estratégicas, prontos para serem despachados. 1 drone está passando por manutenção preventiva. A equipe de monitoramento acompanha as rotas e o status de bateria em tempo real para otimizar o uso dos recursos aéreos.</p>';

}

// Cria um gráfico simulado de Análise de Risco por Região
function createRiskAnalysisChart() {
    const ctx = document.getElementById('riskChart');
    if (!ctx) return;

    // Verifica se já existe uma instância do gráfico e a destrói
    if (ctx.chart) {
        ctx.chart.destroy();
    }

    const riskData = {
        labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
        datasets: [{
            label: 'Nível de Risco',
            data: [75, 60, 85, 90, 70], // Dados fictícios de risco por região
            backgroundColor: [
                'rgba(231, 76, 60, 0.8)', // Vermelho (Crítico)
                'rgba(243, 156, 18, 0.8)', // Laranja (Alto)
                'rgba(241, 196, 15, 0.8)', // Amarelo (Médio-Alto)
                'rgba(192, 57, 43, 0.8)', // Vermelho Escuro (Muito Crítico)
                'rgba(211, 84, 0, 0.8)' // Laranja Avermelhado (Alto-Crítico)
            ],
            borderColor: [
                'rgb(231, 76, 60)',
                'rgb(243, 156, 18)',
                'rgb(241, 196, 15)',
                'rgb(192, 57, 43)',
                'rgb(211, 84, 0)'
            ],
            borderWidth: 1
        }]
    };

    const riskChart = new Chart(ctx, {
        type: 'pie',
        data: riskData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Nível de Risco por Região',
                    padding: {
                        bottom: 20
                    },
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#333'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });

    // Armazena a instância do gráfico no elemento canvas
    ctx.chart = riskChart;
}

// Inicializa o dashboard quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Atualiza as estatísticas iniciais e a barra de status
    updateDashboardStats();

    // Simula alertas recentes e atividade dos drones
    simulateRecentAlerts();
    simulateDroneActivity();

    // Cria o gráfico inicial
    createRiskAnalysisChart();

    // Opcional: Atualizar dados periodicamente (descomente para ativar)
    /*
    setInterval(() => {
        console.log('Atualizando dados fictícios...');
        updateDashboardStats();
        simulateRecentAlerts();
        simulateDroneActivity();
        // Para atualizar o gráfico com novos dados, você precisaria modificar os dados
        // em riskData.datasets[0].data e chamar riskChart.update();
    }, 15000); // Atualiza a cada 15 segundos (exemplo)
    */
}); 
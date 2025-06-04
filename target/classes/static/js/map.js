// Inicialização do mapa
let map;
let markers = [];
let circles = [];

// Configuração dos ícones personalizados
const fireIcon = L.icon({
    iconUrl: '/images/fire-icon.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Inicializa o mapa quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o mapa
    map = L.map('map').setView([-15.7801, -47.9292], 4); // Coordenadas do Brasil

    // Adiciona o tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Adiciona alguns focos de fogo fictícios
    addFictitiousFires();
});

// Função para adicionar focos de fogo fictícios
function addFictitiousFires() {
    const fictitiousFires = [
        {
            lat: -23.5505,
            lng: -46.6333,
            intensity: 0.8,
            status: 'active'
        },
        {
            lat: -3.1190,
            lng: -60.0217,
            intensity: 0.6,
            status: 'combat'
        },
        {
            lat: -8.0476,
            lng: -34.8770,
            intensity: 0.4,
            status: 'controlled'
        }
    ];

    fictitiousFires.forEach(fire => {
        // Adiciona o marcador
        const marker = L.marker([fire.lat, fire.lng], { icon: fireIcon }).addTo(map);
        
        // Adiciona o círculo de intensidade
        const circle = L.circle([fire.lat, fire.lng], {
            color: getFireColor(fire.status),
            fillColor: getFireColor(fire.status),
            fillOpacity: fire.intensity * 0.3,
            radius: 5000
        }).addTo(map);

        // Adiciona o popup
        marker.bindPopup(`
            <strong>Foco de Incêndio</strong><br>
            Status: ${getFireStatus(fire.status)}<br>
            Intensidade: ${Math.round(fire.intensity * 100)}%<br>
            Última atualização: ${new Date().toLocaleTimeString()}
        `);

        // Armazena as referências
        markers.push(marker);
        circles.push(circle);
    });
}

// Função para obter a cor baseada no status do fogo
function getFireColor(status) {
    switch(status) {
        case 'active': return '#ff0000';
        case 'combat': return '#ffa500';
        case 'controlled': return '#ffff00';
        case 'extinguished': return '#00ff00';
        default: return '#ff0000';
    }
}

// Função para obter o texto do status
function getFireStatus(status) {
    switch(status) {
        case 'active': return 'Ativo';
        case 'combat': return 'Em Combate';
        case 'controlled': return 'Controlado';
        case 'extinguished': return 'Extinto';
        default: return 'Desconhecido';
    }
} 
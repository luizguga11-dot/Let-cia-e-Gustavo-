// Dados dos presentes
const giftsData = [
    { id: 1, name: "Balança Digital de Cozinha", category: "Cozinha", price: 70, description: "Para quem gosta de precisão nas receitas" },
    { id: 2, name: "Jogo de Utensílios de Silicone", category: "Cozinha", price: 80, description: "Essencial para o dia a dia na cozinha" },
    { id: 3, name: "Kit para Vinho ou Coquetelaria", category: "Cozinha", price: 100, description: "Perfeito para receber amigos" },
    { id: 4, name: "Jogo de Facas para Cozinha", category: "Cozinha", price: 120, description: "Um item prático e sempre útil" },
    { id: 5, name: "Jogo Americano e Guardanapos de Tecido", category: "Casa", price: 120, description: "Para montar uma mesa bonita no dia a dia" },
    { id: 6, name: "Jogo de Potes Herméticos", category: "Cozinha", price: 150, description: "Ajuda a organizar e conservar os alimentos" },
    { id: 7, name: "Kit de Almofadas Decorativas", category: "Casa", price: 150, description: "Para deixar a sala ou o quarto mais aconchegante" },
    { id: 8, name: "Jogo de Toalhas de Banho de Qualidade", category: "Casa", price: 180, description: "Peças que sempre se renovam" },
    { id: 9, name: "Liquidificador Potente", category: "Cozinha", price: 250, description: "Facilita o preparo de muitas receitas" },
    { id: 10, name: "Churrasqueira Elétrica", category: "Cozinha", price: 300, description: "Ótima para apartamentos e reuniões práticas" },
    { id: 11, name: "Cafeteira Nespresso Essenza Mini", category: "Cozinha", price: 375, description: "Para os amantes de um bom café, modelo compacto e eficiente" },
    { id: 12, name: "Jogo de Panelas Tramontina (10 peças)", category: "Cozinha", price: 400, description: "Um clássico de qualidade para a casa nova" },
    { id: 13, name: "Jogo de Cama Completo (Queen Size)", category: "Casa", price: 500, description: "Incluindo lençóis, fronhas e edredom" },
    { id: 14, name: "Fritadeira Elétrica (Air Fryer) Oven 12L", category: "Cozinha", price: 600, description: "Um item super versátil que funciona como forno e fritadeira" },
    { id: 15, name: "Processador de Alimentos Completo", category: "Cozinha", price: 600, description: "Um grande aliado para quem cozinha com frequência" },
    { id: 16, name: "Robô Aspirador (Modelos de Entrada)", category: "Casa", price: 650, description: "Para automatizar a limpeza da casa" },
    { id: 17, name: "Adega Climatizada Pequena", category: "Casa", price: 800, description: "Para os apreciadores de vinho" },
    { id: 18, name: "Robô Aspirador Inteligente (com mapeamento)", category: "Casa", price: 2250, description: "Modelos mais avançados e eficientes que mapeiam a casa" },
    { id: 19, name: "Smart TV 50 polegadas 4K", category: "Casa", price: 2500, description: "Um centro de entretenimento para a sala" },
    { id: 20, name: "Ar-Condicionado Split", category: "Casa", price: 2500, description: "Um conforto a mais para o quarto ou a sala" }
];

const PIX_CPF = "75812282153";
let gifts = [...giftsData];
let selectedCategory = "Todos";
let selectedGiftForModal = null;
let buyerName = "";
let showPixInfo = false;

// Renderizar a página
function render() {
    const root = document.getElementById('root');
    
    const categories = ["Todos", ...new Set(gifts.map(g => g.category))];
    const filteredGifts = selectedCategory === "Todos" 
        ? gifts.sort((a, b) => a.price - b.price)
        : gifts.filter(g => g.category === selectedCategory).sort((a, b) => a.price - b.price);
    
    const selectedCount = gifts.filter(g => g.selected).length;
    const totalValue = gifts.filter(g => g.selected).reduce((sum, g) => sum + g.price, 0);
    
    root.innerHTML = `
        <div class="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
            <!-- Header -->
            <header class="bg-white border-b border-rose-100 sticky top-0 z-50 shadow-sm">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">❤️</span>
                            <h1 class="text-2xl font-bold text-gray-800">Gustavo & Letícia</h1>
                        </div>
                        <div class="text-sm text-gray-600">
                            ${selectedCount > 0 ? `<span class="font-semibold text-rose-600">${selectedCount} presente${selectedCount !== 1 ? 's' : ''} selecionado${selectedCount !== 1 ? 's' : ''}</span>` : ''}
                        </div>
                    </div>
                </div>
            </header>

            <!-- Hero Section -->
            <section class="py-16 px-4 text-center">
                <div class="container mx-auto">
                    <h2 class="text-5xl font-bold text-gray-800 mb-4">Nosso Casamento</h2>
                    <p class="text-xl text-gray-600 mb-8">Celebrando o amor e a união de duas vidas</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div class="p-6 border-2 border-rose-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
                            <div class="text-4xl mb-3 text-center">📅</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Data</h3>
                            <p class="text-gray-600 font-semibold">20 de Dezembro de 2025</p>
                            <p class="text-sm text-gray-500 mt-1">Sábado</p>
                        </div>
                        <div class="p-6 border-2 border-rose-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
                            <div class="text-4xl mb-3 text-center">📍</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Local</h3>
                            <p class="text-gray-600 font-semibold">Churrascaria Nativas Grill</p>
                            <p class="text-sm text-gray-500 mt-1">Cerimônia civil</p>
                        </div>
                        <div class="p-6 border-2 border-rose-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
                            <div class="text-4xl mb-3 text-center">👥</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Convidados</h3>
                            <p class="text-gray-600">Pessoas especiais</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Gift Registry Section -->
            <section class="py-16 px-4 bg-white">
                <div class="container mx-auto">
                    <div class="text-center mb-12">
                        <div class="text-4xl mb-4">🎁</div>
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">Lista de Presentes</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            Em vez de presentes físicos, preferimos receber o valor em dinheiro para que possamos escolher exatamente o que precisamos para nossa casa. Cada item abaixo representa um valor que você pode contribuir.
                        </p>
                    </div>

                    ${selectedCount > 0 ? `
                        <div class="p-6 bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-lg mb-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="text-sm text-gray-600 mb-1">Presentes Selecionados</p>
                                    <p class="text-3xl font-bold text-rose-600">${selectedCount}</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-600 mb-1">Valor Total</p>
                                    <p class="text-3xl font-bold text-rose-600">R$ ${totalValue.toLocaleString('pt-BR')}</p>
                                </div>
                            </div>
                        </div>
                    ` : ''}

                    <!-- Category Filter -->
                    <div class="flex flex-wrap gap-2 mb-8 justify-center">
                        ${categories.map(cat => `
                            <button 
                                onclick="selectCategory('${cat}')"
                                class="px-4 py-2 rounded-lg font-semibold transition-all ${selectedCategory === cat ? 'bg-rose-500 text-white' : 'bg-white border-2 border-rose-200 text-gray-800 hover:border-rose-300'}"
                            >
                                ${cat}
                            </button>
                        `).join('')}
                    </div>

                    <!-- Gifts Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${filteredGifts.map(gift => `
                            <div class="p-6 rounded-lg transition-all border-2 ${gift.selected ? 'border-rose-500 bg-rose-50 shadow-lg' : 'border-gray-200 hover:border-rose-300 hover:shadow-md'}">
                                <div class="flex justify-between items-start mb-3">
                                    <span class="text-xs font-semibold text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                                        ${gift.category}
                                    </span>
                                    ${gift.selected ? '<span class="text-2xl">❤️</span>' : ''}
                                </div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">${gift.name}</h3>
                                <p class="text-sm text-gray-600 mb-4">${gift.description}</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-2xl font-bold text-rose-600">R$ ${gift.price.toLocaleString('pt-BR')}</span>
                                    <button 
                                        onclick="openModal(${gift.id})"
                                        class="px-4 py-2 rounded-lg font-semibold transition-all ${gift.selected ? 'bg-rose-500 text-white cursor-not-allowed' : 'bg-white border-2 border-rose-200 text-gray-800 hover:bg-rose-50'}"
                                        ${gift.selected ? 'disabled' : ''}
                                    >
                                        ${gift.selected ? `✓ ${gift.selectedBy}` : 'Selecionar'}
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Modal -->
            ${selectedGiftForModal ? `
                <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div class="w-full max-w-md bg-white rounded-lg p-6">
                        ${!showPixInfo ? `
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="text-2xl font-bold text-gray-800">Confirmar Presente</h3>
                                <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
                            </div>

                            <div class="mb-6 p-4 bg-rose-50 rounded-lg border-2 border-rose-200">
                                <p class="text-sm text-gray-600 mb-1">Presente Selecionado</p>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">${selectedGiftForModal.name}</h4>
                                <p class="text-2xl font-bold text-rose-600">R$ ${selectedGiftForModal.price.toLocaleString('pt-BR')}</p>
                            </div>

                            <div class="mb-6">
                                <label class="block text-sm font-semibold text-gray-700 mb-2">Seu Nome</label>
                                <input 
                                    type="text" 
                                    id="buyerNameInput"
                                    placeholder="Digite seu nome completo"
                                    class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                                    onkeypress="if(event.key === 'Enter') confirmGift()"
                                />
                            </div>

                            <div class="flex gap-3">
                                <button onclick="closeModal()" class="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-50">
                                    Cancelar
                                </button>
                                <button onclick="confirmGift()" class="flex-1 px-4 py-2 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600">
                                    Confirmar
                                </button>
                            </div>
                        ` : `
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="text-2xl font-bold text-gray-800">Dados para Transferência</h3>
                                <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
                            </div>

                            <div class="mb-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                                <p class="text-sm text-gray-600 mb-2">Presente Confirmado!</p>
                                <p class="text-lg font-semibold text-gray-800 mb-4">${selectedGiftForModal.name}</p>
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="text-green-600">✓</span>
                                    <span class="text-gray-700">Selecionado por <strong>${buyerName}</strong></span>
                                </div>
                            </div>

                            <div class="mb-6">
                                <p class="text-sm font-semibold text-gray-700 mb-3">Dados do Pix:</p>
                                <div class="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                                    <p class="text-xs text-gray-600 mb-1">CPF</p>
                                    <div class="flex items-center justify-between gap-2">
                                        <code class="text-lg font-bold text-gray-800">${PIX_CPF}</code>
                                        <button onclick="copyPix()" class="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100">
                                            📋 Copiar
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 mb-6">
                                <p class="text-sm text-blue-800">
                                    <strong>Valor a transferir:</strong> R$ ${selectedGiftForModal.price.toLocaleString('pt-BR')}
                                </p>
                            </div>

                            <button onclick="closeModal()" class="w-full px-4 py-2 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600">
                                Fechar
                            </button>
                        `}
                    </div>
                </div>
            ` : ''}

            <!-- Footer -->
            <footer class="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-12 px-4">
                <div class="container mx-auto text-center">
                    <div class="text-4xl mb-4">❤️</div>
                    <h3 class="text-2xl font-bold mb-2">Gustavo & Letícia</h3>
                    <p class="text-rose-100 mb-4">Obrigado por fazer parte dessa jornada especial!</p>
                    <p class="text-sm text-rose-100">© 2025 - Celebrando o amor</p>
                </div>
            </footer>
        </div>
    `;
}

// Funções de interação
function selectCategory(cat) {
    selectedCategory = cat;
    render();
}

function openModal(giftId) {
    selectedGiftForModal = gifts.find(g => g.id === giftId);
    showPixInfo = false;
    buyerName = "";
    render();
}

function closeModal() {
    selectedGiftForModal = null;
    showPixInfo = false;
    buyerName = "";
    render();
}

function confirmGift() {
    const input = document.getElementById('buyerNameInput');
    if (input && input.value.trim()) {
        buyerName = input.value.trim();
        const gift = gifts.find(g => g.id === selectedGiftForModal.id);
        if (gift) {
            gift.selected = true;
            gift.selectedBy = buyerName;
        }
        showPixInfo = true;
        render();
    }
}

function copyPix() {
    navigator.clipboard.writeText(PIX_CPF);
    alert('CPF copiado para a área de transferência!');
}

// Renderizar inicial
render();

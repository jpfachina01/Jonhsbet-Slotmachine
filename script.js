// Símbolos para os rolos do slot machine
const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🔔", "⭐", "💎"];

// Referências aos elementos HTML
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const message = document.getElementById("message");
const spinButton = document.getElementById("spinButton");

// Função para gerar um símbolo aleatório
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Função para girar os slots
function spin() {
    // Desativar o botão enquanto os slots estão girando
    spinButton.disabled = true;
    message.textContent = "Girando...";

    // Animação de rotação dos slots
    let spins = 10;
    let interval = setInterval(() => {
        slot1.textContent = getRandomSymbol();
        slot2.textContent = getRandomSymbol();
        slot3.textContent = getRandomSymbol();
        spins--;

        // Quando a rotação termina
        if (spins === 0) {
            clearInterval(interval);
            checkResult();
            spinButton.disabled = false;
        }
    }, 100); // Troca os símbolos a cada 100ms
}

// Função para verificar o resultado do jogo
function checkResult() {
    if (slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent) {
        message.textContent = "🎉 Parabéns! Você ganhou! 🎉";
    } else {
        message.textContent = "Que pena! Tente novamente!";
    }
}

// Adicionar evento ao botão de girar
spinButton.addEventListener("click", spin);

let counter = 0;
let actionCount = 0;

const counterElement = document.getElementById('counter');
const addOneButton = document.getElementById('add-one');
const addTwoButton = document.getElementById('add-two');
const resetButton = document.getElementById('reset');
const subtractOneButton = document.getElementById('subtract-one');
const subtractTwoButton = document.getElementById('subtract-two');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history');

// Atualizar o contador na tela
function updateCounter() {
  counterElement.textContent = counter;
}

// Função para adicionar ao histórico
function addToHistory(action) {
    actionCount++;
    const li = document.createElement('li');
    
    li.innerHTML = `<span>Ação ${actionCount}: ${action}</span>`;
    
    // Definir cor baseada na ação
    switch(action) {
        case '+1':
        case '+2':
            li.style.color = 'green';
            break;
        case '-1':
        case '-2':
            li.style.color = 'red';
            break;
        case 'reset':
            li.style.color = 'gray';
            break;
    }
    
    historyList.insertBefore(li, historyList.firstChild);
}

// Event listeners
addOneButton.addEventListener('click', () => {
    counter += 1;
    updateCounter();
    addToHistory('+1');
});

addTwoButton.addEventListener('click', () => {
    counter += 2;
    updateCounter();
    addToHistory('+2');
});

subtractOneButton.addEventListener('click', () => {
    if (counter > 0) {
        counter = Math.max(0, counter - 1);
        updateCounter();
        addToHistory('-1');
    }
});

subtractTwoButton.addEventListener('click', () => {
    if (counter > 0) {
        counter = Math.max(0, counter - 2);
        updateCounter();
        addToHistory('-2');
    }
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
    addToHistory('Descarregado');
});

clearHistoryButton.addEventListener('click', () => {
    historyList.innerHTML = '';
    actionCount = 0;
});

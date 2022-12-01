// Funzione per creare l'elemento

function getNewSqaure (index) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square', 'd-flex');
    newSquare.innerHTML = `<span class="m-auto"> ${index} </span>`;
        newSquare.addEventListener('click', function(){
            console.log('Hai cliccato la casella ' + index);
            newSquare.classList.toggle('active');
        })
    return newSquare;
}

const button = document.getElementById('button');

button.addEventListener('click', function(){

    const gridContainer = document.querySelector('div.grid');

    gridContainer.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const newSquare = getNewSqaure(i);
        gridContainer.appendChild(newSquare);
    }
})

// 1. - Generazione di 16 numeri casuali all'interno dei 100 numeri creati per le celle.
// 2. - Quando l'utente clicca su uno di questi 16 numeri ha perso la partita (al click la cella diventerà rossa e all'inizio voglio che si crei un alert).
// SE il numero generato dall'utente === all'indice i ALLORA ==> vedi 2.
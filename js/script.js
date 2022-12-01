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


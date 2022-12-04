
// Funzione per creare l'elemento
function getNewSquare (index) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square', 'd-flex');
    // newSquare.innerHTML = `<span class="m-auto"> ${index} </span>`;
    return newSquare;
}

// Funzione per creare un numero randomico
function getRandomNumber (numMin, numMax) {
    if (numMin === numMax) {
        return numMax;
    }

    return Math.floor ( Math.random() * (numMax - numMin + 1) + numMin );
}

// Funzione per creare un numero randomico ed inserirlo in una lista con tutti numeri randomici diversi tra loro
function getRandomUniqueNumber (blacklist, min, max) {
    let isValid = false;
    let randomNum;

    while ( isValid === false) {
        randomNum = getRandomNumber (min, max);

        if ( ! blacklist.includes(randomNum) ) {
            isValid = true;
        }
    }
    return randomNum;
}

function writeIntoElementById (elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}


const button = document.getElementById('button');

button.addEventListener('click', function() {

    const bombs = [];

    let isGameOver = false;

    let score = 0;

    writeIntoElementById ('score', 'Hai iniziato una nuova partita, clicca su una cella per fare un punto');

    const gridContainer = document.querySelector('div.grid');

    gridContainer.innerHTML = '';

    while (bombs.length < 16) {
        let numCreated = getRandomUniqueNumber (bombs, 1, 100);
        bombs.push(numCreated);
    }
    // console.log(bombs);

    for (let i = 1; i <= 100; i++) {
        const newSquare = getNewSquare(i);

        newSquare.addEventListener('click', function(){
            
            if(!isGameOver){
                if (bombs.includes(i)){
                    newSquare.classList.toggle('bomb');
                    isGameOver = true;
                    writeIntoElementById ('score', 'BOOM! Hai perso; il tuo punteggio è: ' + score);
                } else {
                    newSquare.classList.toggle('active');
                    score++;
                    writeIntoElementById ('score', 'Il tuo punteggio è: ' + score);
                    if ( score === (100-16) ) {
                        writeIntoElementById ('score', 'HAI VINTO!! Il tuo punteggio è: ' + score);
                        isGameOver = true;
                    }
                }
            } else {
                console.log('Non puoi cliccare su altre celle, la partita è terminata');
            }
        }, {once : true})

        gridContainer.appendChild(newSquare);
    }
})


// Funzione per creare l'elemento
function getNewSqaure (index) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square', 'd-flex');
    newSquare.innerHTML = `<span class="m-auto"> ${index} </span>`;
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


const button = document.getElementById('button');

button.addEventListener('click', function() {

    const bombs = [];

    let score = 0;

    const gridContainer = document.querySelector('div.grid');

    gridContainer.innerHTML = '';

    while (bombs.length < 16) {
        let numCreated = getRandomUniqueNumber (bombs, 1, 100);
        bombs.push(numCreated);
    }
    console.log(bombs);

    for (let i = 1; i <= 100; i++) {
        const newSquare = getNewSqaure(i);

        newSquare.addEventListener('click', function(){
            console.log('Hai cliccato la casella ' + i);
            if ( bombs.includes(i) ) {
                newSquare.classList.toggle('bomb');
                alert(`HAI PERSO! Hai totalizzato ${score} punti.`);
            }
            newSquare.classList.toggle('active');
            score += 1;
            
        }, {once : true})

        gridContainer.appendChild(newSquare);
    }
    
})

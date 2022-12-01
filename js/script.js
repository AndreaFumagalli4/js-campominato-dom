
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


const button = document.getElementById('button');

button.addEventListener('click', function() {

    const bombs = [];

    let score = 0;

    let game = true;

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
            
            if (!game) {
                return
            };

            if ( bombs.includes(i) ) {
                alert(`GAME OVER! Hai totalizzato ${score} punti.`);
                newSquare.classList.toggle('bomb');
                game = false;
            }
            newSquare.classList.toggle('active');
            score += 1;
            
            if ( score === (100 - 16) ) {
                alert(`CONGRATULATIONS!! YOU WIN!`);
                game = false;
            }

        }, {once : true})

        gridContainer.appendChild(newSquare);
    }
})

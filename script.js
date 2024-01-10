document.getElementById('stegen').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'Stegen'
    stegen()
})
document.getElementById('knockOut').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'Knock Out Number'
    knockOutNumber()
})
document.getElementById('boston').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'Going To Boston'
    goingToBoston()
})
document.getElementById('stenSaxPase').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'Sten, Sax, Påse'
    stenSaxPase()
})
document.getElementById('fizzBuzz').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'FizzBuzz'
    fizzBuzz()
})
document.getElementById('highLow').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'Högt och Lågt'
    högtOchLågt()
})
document.getElementById('likheter').addEventListener('click', function () {
    document.getElementById('gameName').textContent = 'Likheter'
    likheter()
})

const gameBoard = document.getElementById('gameBoard')

function stegen() {
    let goal = 1;
    let nmbrOfThrows = 0;

    while (goal < 7) {
        let dice = Math.floor(Math.random() * 6 + 1);
        console.log('Du kastade ' + dice);
        nmbrOfThrows++;
        if (dice === goal) {
            goal++;
            console.log('Snyggt! du kastade rätt!')
        }
    }

    console.log('Grattis du vann på ' + nmbrOfThrows + ' antal kast!')
}

function knockOutNumber() {
    let score = 0;
    let knockOutNmber = 0;
    let goal = 0;
    let isInputApproved = false;

    while (!isInputApproved) {
        knockOutNmber = parseInt(window.prompt('Ange ett tal (6-9)'));
        if (knockOutNmber < 6 || knockOutNmber > 9) {
            window.alert('Du måste ange ett tal mellan 6 - 9');
        }
        else {
            goal = window.prompt('Ange ett mål!! (Större än 0)')
            if (goal <= 0) {
                window.alert('Du måste ange ett mål som är större än 0')
            } else {
                isInputApproved = true;
            }
        }
    }
    while (score < goal) {
        let diceOne = Math.floor(Math.random() * 6 + 1);
        let diceTwo = Math.floor(Math.random() * 6 + 1);
        let sum = diceOne + diceTwo;
        console.log(' Du kastade ' + diceOne + ' och ' + diceTwo + ' Summan var ' + sum)

        if (sum === knockOutNmber) {
            score -= 3;
        } else {
            score += sum;
        }

        console.log('Din totala poäng är nu ' + score + ' / ' + goal);
    }
}

function goingToBoston() {

    let nmbrOfDices = 3;
    let playerScore = [0, 0];

    for (let player = 0; player < playerScore.length; player++) {

        for (let i = nmbrOfDices; i > 0; i--) {

            let highestRolledDice = 0;

            for (let j = 0; j < i; j++) {

                let rolledDice = Math.floor(Math.random() * 6 + 1)

                if (highestRolledDice < rolledDice) {
                    highestRolledDice = rolledDice;
                }
                console.log('Tärningen fick: ' + rolledDice)

            }

            playerScore[player] += highestRolledDice;
            console.log('Spelaren fick ' + highestRolledDice + ' poäng!')
        }
    }

    for (let player = 0; player < playerScore.length; player++) {
        console.log(`Spelare ${player + 1}: ${playerScore[player]} poäng`);
    }

}

function stenSaxPase() {


    let computer = ['sten', 'sax', 'påse'];
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let played = window.prompt('Sten, Sax, Påse');

        if (played === 'sten' || played === 'sax' || played === 'påse') {
            console.log('Du spelade ' + played);

            let num = Math.floor(Math.random() * 3)
            console.log('Datorn spelade ' + computer[num])

            if (played === computer[num]) {
                console.log('oavgjort!');
            } else if (
                (played === 'sten' && computer[num] === 'sax') ||
                (played === 'sax' && computer[num] === 'påse') ||
                (played === 'påse' && computer[num] === 'sten')
            ) {
                console.log('Du vann!')
                playerScore++
            } else {
                console.log('Datorn vann! ')
                computerScore++
            }

        } else {
            console.log('Du måste välja sten, sax eller påse')
        }

    }

    if (playerScore > computerScore) {
        window.alert('Grattis du vann spelet!')
    } else {
        window.alert('Datorn vann! spelet prova igen')
    }

}

function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            console.log('FizzBuzz')
        } else if (i % 5 === 0) {

            console.log('Buzz')
        } else if (i % 3 === 0) {

            console.log('Fizz')
        } else {

            console.log(i)
        }
    }
}

function högtOchLågt() {

    let secretNmbr = Math.floor(Math.random() * 100 + 1)
    let gissning = 0;
    let antalGissningar = 0;

    while (secretNmbr !== gissning) {

        gissning = parseInt(window.prompt('Gissa ett nummer mellan 1 och 100'))

        antalGissningar++

        if (gissning > secretNmbr) {
            console.log('Du gissade på ' + gissning + ' det är för högt! Antal gissningar ' + antalGissningar);

        } else if (gissning < secretNmbr) {
            console.log('Du gissade på ' + gissning + ' det är  för lågt! Antal gissningar ' + antalGissningar);
        }

    }
    window.alert('Du gissade på ' + gissning + ' det är rätt! Antal gissningar ' + antalGissningar);

}

function likheter() {
    let isSameLength = false;
    let wordOne
    let wordTwo
    let bokstavLika = 0;


    while (!isSameLength) {
        wordOne = window.prompt('ord ett ')
        wordTwo = window.prompt('ord två ')

        if (wordOne.length !== wordTwo.length) {
            console.log(' Orden måste vara lika långa ')
        } else {
            isSameLength = true;
        }

    }

    for (let i = 0; i < wordOne.length; i++) {


        if (wordOne[i] === wordTwo[i]) {
            console.log(wordOne[i] + ' är Lika')
            bokstavLika++
        } else if (wordOne[i] !== wordTwo[i]) {
            console.log(wordOne[i] + ' och ' + wordTwo[i] + ' är Olika')
        }
    }

    console.log('Ord ' + wordOne + ' har ' + bokstavLika + ' bokstäver som förekommer på samma plats som ' + wordTwo)

}


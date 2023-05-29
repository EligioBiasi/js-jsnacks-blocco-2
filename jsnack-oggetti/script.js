
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 

// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
const playerData = {
    code: (makeid(3, 'ABCDEFGHILMNOPQRSTUVZKWYX') + randomNum(9,0) + randomNum(9,0) + randomNum(9,0)),
    name : 'giorgio',
    surname : 'Giorgi',
    age:24,
    points: randomNum(50,0),
    succes_from_three:randomNum(100,0),
    stop : randomNum(30,0),
    launch : randomNum(100,20),
}
console.log(playerData)

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100
function randomNum(maxNum, minNum) {
    let Num = (Math.floor(Math.random() * maxNum)+minNum);
    return Num
}


//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

function makeid(length, allowedChars) {
    let result = '';    
    let counter = 0;

    while (counter < length) {
      result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
      counter ++;
    }
    return result;
}

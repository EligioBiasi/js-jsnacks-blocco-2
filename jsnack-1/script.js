// Crea un array vuoto
const emptyBox = []

// chiedi all'utente un numero da inserire nell'array.
let fifty = 0;

while(fifty<50){
    let numberAdded = parseInt(prompt('inserisci un numero'));
    fifty+=numberAdded
    emptyBox.push(numberAdded);
}
console.log(emptyBox)

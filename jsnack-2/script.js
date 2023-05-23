
// Generare numero casuale tra 1 e 100 COMPRESI
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let playerNumber = parseInt(prompt('indovina un numero da 1 a 100'));

while(playerNumber!=randomNumber){
    if(playerNumber>randomNumber){
        console.log('the pc number is lower')
        playerNumber = parseInt(prompt('riprova'));
    }else{
        console.log('the pc number is higher')
       playerNumber = parseInt(prompt('riprova'))
    }
}
console.log('your guess is right')
alert('hai indovinato');

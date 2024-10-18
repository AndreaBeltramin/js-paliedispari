//!Esercizio di oggi: Palindromia e pari e dispari

//TRACCIA:

//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola palindroma");
console.log(userWord);

//creo una funzione per capire se la parola inserita è palindroma
function palindromeWord(userWord) {
	//devo controllare se la parola inserita è palindroma,
	//quindi verifico per ogni indice fino alla metà della lugnhezza della parola
	for (let i = 0; i < userWord.length / 2; i++) {
		//SE gli indici della parola inserita sono uguali agli indici dell'altra estremità della parola
		if (userWord[i] === userWord[userWord.length - i - 1]) {
			//se sono uguali la parola è palindroma
			return true;
		}
	} //se no la parola non è palindroma
	return false;
}
//se la parola è palindroma
if (palindromeWord(userWord)) {
	//stampo un messaggio di output positivo
	let outputMessage = "Esatto " + userWord + " è una parola palindroma.";
	console.log(outputMessage);
	alert(outputMessage);
} else {
	//altrimenti stampo messaggio negativo
	let outputMessage =
		"Mi dispiace " + userWord + " non è una parola palindroma.";
	console.log(outputMessage);
	alert(outputMessage);
}

//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//chiedo all'utente pari o dispari
const userChoice = prompt("Pari o dispari?");
//chiedo all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(
	"Hai scelto " + userChoice,
	", il tuo numero scelto è " + userNumber
);

//creo una funzione per poter generare un numero random da 1 a 5 per il computer
function randomNumber(min, max) {
	const computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return computerNumber;
}

const computerNumber = randomNumber(1, 5);
console.log("Il numero del computer è " + computerNumber);
alert("Il numero del computer è " + computerNumber);

//sommo il numero dell'utente e il numero del computer (usando una funzione)
/*function sommaNumeri(userNumber, computerNumber) {
	const risultatoSomma = userNumber + computerNumber;
	return risultatoSomma;
}
const Somma = sommaNumeri(userNumber, computerNumber);
console.log(Somma);*/

//sommo i due numeri
let sommaNumeri = userNumber + computerNumber;
let outputMessage = "La somma dei due numeri è uguale a : " + sommaNumeri;
console.log(outputMessage);
alert(outputMessage);

//Stabilisco se la somma dei due numeri è pari o dispari (usando una funzione)
function isSumEven(sommaNumeri) {
	return sommaNumeri % 2 === 0;
	// UGUALE A SCRIVERE :
	/*if (sommaNumeri % 2 === 0) {
		return true;
	} else {
		return false;
	}*/
}

const sumIsEven = isSumEven(sommaNumeri);
//console.log(sumIsEven);

//Dichiaro chi ha vinto

if (userChoice === "pari" && sumIsEven) {
	let outputMessage = "La somma dei due numeri è pari, hai vinto!!";
	console.log(outputMessage);
	alert(outputMessage);
} else if (userChoice === "dispari" && !sumIsEven) {
	let outputMessage = "La somma dei due numeri è dispari, hai vinto!!";
	console.log(outputMessage);
	alert(outputMessage);
} else {
	let outputMessage = "Hai perso!!";
	console.log(outputMessage);
	alert(outputMessage);
}

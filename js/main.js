//!Esercizio di oggi: Palindromia e pari e dispari

//TRACCIA:

//Palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedo all'utente di inserire una parola e la stampo
const userWord = prompt("Inserisci una parola palindroma");
console.log("La parola che hai inserito è " + userWord);

//creo una funzione per capire se la parola inserita è palindroma
function invertedWord(userWord) {
	//uso .split applicato a userWord per separare le lettere e ottenere un array con quelle lettere
	//uso .reverse per invertire le lettere inserite nell'array e ottengo l'array invertito
	//uso .join per riunire le lettere in una stringa
	const invertedUserWord = userWord.split("").reverse().join("");

	//SE la parola dell'utente coincide alla parola invertita è palindroma
	if (userWord === invertedUserWord) {
		return true;
	} //ALTRIMENTI la parola non è palindroma
	return false;
}
//applico la funzione invertedWord alla parola inserita dall'utente e capisco se la parola è palindroma o no
const invertedUserWord = invertedWord(userWord);
//stampo se true o false
console.log("La parola è palindroma? " + invertedUserWord);
//SE true mando alert
if (invertedUserWord === true) {
	alert("La parola è palindroma");
	//ALTRIMENTI mando altro alert
} else {
	alert("La parola non è palindroma");
}

/*
//ALTRA POSSIBILE FUNZIONE 
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
	//ALTRIMENTI
} else {
	//stampo messaggio negativo
	let outputMessage =
		"Mi dispiace " + userWord + " non è una parola palindroma.";
	console.log(outputMessage);
	alert(outputMessage);
}
*/

//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//chiedo all'utente pari o dispari
const validWord = ["pari", "dispari"];
let userChoice = prompt("pari o dispari?");

while (!validWord.includes(userChoice)) {
	userChoice = prompt("pari o dispari?");
}

//chiedo all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(
	"Hai scelto " + userChoice,
	", il tuo numero scelto è " + userNumber
);

//SE il numero inserito dall'utente è <0 O <5 O è NaN
if (userNumber < 0 || userNumber > 5 || isNaN(userNumber)) {
	//scrivo messaggio numero non valido
	console.log("Numero non valido!");
	alert("Numero non valido!");

	//ALTRIMENTI procedo
} else {
	//creo una funzione per poter generare un numero random da 1 a 5 per il computer
	function randomNumber(min, max) {
		const computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return computerNumber;
	}
	//creo il numero del computer e lo stampo
	const computerNumber = randomNumber(1, 5);
	console.log("Il numero del computer è " + computerNumber);
	alert("Il numero del computer è " + computerNumber);

	//sommo il numero dell'utente e il numero del computer (usando una funzione)
	//function sommaNumeri(userNumber, computerNumber) {
	//   const risultatoSomma = userNumber + computerNumber;
	//    return risultatoSomma;
	// }
	//const somma = sommaNumeri(userNumber, computerNumber);
	//console.log(somma);

	//sommo i due numeri e stampo la loro somma
	let sommaNumeri = userNumber + computerNumber;
	let outputMessage = "La somma dei due numeri è uguale a : " + sommaNumeri;
	console.log(outputMessage);
	alert(outputMessage);

	//Stabilisco se la somma dei due numeri è pari o dispari (usando una funzione)
	//creo la funzione
	function isSumEven(sommaNumeri) {
		return sommaNumeri % 2 === 0;
		// UGUALE A SCRIVERE :
		/*if (sommaNumeri % 2 === 0) {
		    return true;
	    } else {
		    return false;
	    } */
	}

	//stabilisco se la somma è pari o dispari
	const sumIsEven = isSumEven(sommaNumeri);
	//console.log(sumIsEven);

	//Dichiaro chi ha vinto
	//SE la scelta dell'utente è pari E la sommma è pari
	if (userChoice === "pari" && sumIsEven) {
		let outputMessage = "La somma dei due numeri è pari, hai vinto!!";
		console.log(outputMessage);
		alert(outputMessage);
		//ALTRIMENTI SE la scelta dell'utente è dispari E la somma NON è pari
	} else if (userChoice === "dispari" && !sumIsEven) {
		let outputMessage = "La somma dei due numeri è dispari, hai vinto!!";
		console.log(outputMessage);
		alert(outputMessage);
		//ALTRIMENTI l'utente ha perso
	} else {
		let outputMessage = "Hai perso!!";
		console.log(outputMessage);
		alert(outputMessage);
	}
}

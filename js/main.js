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

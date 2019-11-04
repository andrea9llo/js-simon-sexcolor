// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

// chiedo all'utente nome e sesso
var nome = prompt("NOME");
var sesso = prompt("SESSO");

// creo array per il sesso
var sessoUtenteF = ["F","femmina","f","donna"];
var sessoUtenteM = ["M","maschio","m","uomo"];
// controllo che l utente inserisca di fatto il sesso
var sessoM = controlliArray(sesso,sessoUtenteM);
var sessoF = controlliArray(sesso,sessoUtenteF);

// dichiaro la variabile per il cambio di colore
var element = document.getElementById('mioid');

// dichiaro le condizioni per cambiare il colore del nome in base al sesso
if (sessoF == true) {
  document.getElementById('mioid').innerHTML = "ciao " + nome;
  element.style.color = "pink";
} else if (sessoM == true) {
  document.getElementById('mioid').innerHTML = "ciao " + nome;
  element.style.color = "lightblue";
}


// creo una funzione con il quale mi aiuto a fare i comtrolli
function controlliArray(valore,array) {
  var found = false;
  // creo ciclo while fino a quando found è falso e i < array.length
  var i = 0;
  while (found == false && i < array.length) {
    if (array[i] == valore) {
      found = true;
    }
    i++;
  }
  return found;
}

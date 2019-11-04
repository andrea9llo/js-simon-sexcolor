// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;


//creo un array vuoto dove pushare i 5 numeri random creatomi con la funzione
var num = [];
// creo un ciclo per generare 5 numeri
while (num.length < 5 ) {
  var numRandom = getRandomIntInclusive(0,99);
  // controllo che il numero generato non venga ripetuto
  var controllo = controlliArray(numRandom,num);
  // creo la condizione per salvare il numero nell array se non presente
  if (controllo == false) {
  num.push(numRandom);
}
}
console.log(num);

// creo un alert con i 5 numeri casuali da ricordare
alert("Al click hai 30 secondi per ricordare questi numeri: " + num);




// dopo 30 secondi faccio partire una serie di prompt in cui faccio inserire i numeri
setTimeout(function () {
  // creo un array vuoto dove pushare i numeri dell utente
   var numUtenti = [];
  for (var i = 0; i < 5; i++) {
    var numIns = parseInt(prompt("Inserisci un numero"));
    // con la funzione controlliArray controllo se il numero inserito dall'utente è uguale al numero random generato
    var controlliNumUtente = controlliArray(numIns,num);
    // console.log(controlliNumUtente);

    // con la funzione controlliArray controllo se l'utente non inserisca due volte lo stesso numero
    var controlNum = controlliArray(numIns,numUtenti);
    // se i numeri inseriti sono uguali  uguali faccio ripetere la scelta
    if (controlNum == true) {
      alert("hai già inserito questo numero");
      i--;
      // dichiaro la condizione con cui verifico se i numeri inseriti dall'utente siano uguali ai numeri random iniziali
    } else if (controlliNumUtente == true) {
      numUtenti.push(numIns);
      document.getElementById('mioid').innerHTML = "Hai memorizato " + numUtenti.length + " numero/i " + numUtenti;
      // console.log("Hai memorizato " + numUtenti.length + " numero/i " + numUtenti );
      // controllo se la lunghezza degli array sono uguali allora ho indovinato tutti i numeri
    } if (numUtenti.length === num.length) {
      document.getElementById('mioid2').innerHTML = "ti sei ricordato tutti i numeri...HAI VINTO ";
      // console.log("ti sei ricordato tutti i numeri...HAI VINTO ");
    } else if (numUtenti.length === 0) {
      document.getElementById('mioid2').innerHTML = "non ti sei ricordato nessun numero";
      // console.log("non ti sei ricordato nessun numero");
    }
   }
}, 3000);



// creo una funzione per generare 5 numeri casuali
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
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

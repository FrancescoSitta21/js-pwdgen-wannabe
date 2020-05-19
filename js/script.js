var nomeUtente = prompt('Qual\'è il tuo mome?');
console.log(nomeUtente);

var cognomeUtente = prompt('Qual\'è il tuo cognome?');
console.log(cognomeUtente);

var colorePreferito = prompt('Qual\'è il tuo colore preferito?');
console.log(colorePreferito);

var annoPassato  = 19;

var nuovaPassword = nomeUtente + cognomeUtente + colorePreferito + annoPassato
document.getElementById('password').innerHTML = nuovaPassword;

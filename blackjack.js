// Definerer variabler for summen til dealeren og spilleren, og antallet ess som dealeren og spilleren har.
// Alle variablene settes til 0 som standard.
var dealerSum = 0;
var yourSum = 0;
var dealerAceCount = 0;
var yourAceCount = 0;

// Definerer variabler for det skjulte kortet og kortstokken.
var hidden;
var deck;

// Definerer en variabel for om spilleren kan trekke flere kort.
// Variabelen settes til true som standard.
var canHit = true;

// Definerer en funksjon som kjøres når nettsiden lastes.
// Funksjonen bygger et kortstokk, stokker kortstokken og starter spillet.
window.onload = function () {
  buildDeck();
  shuffleDeck();
  startGame();
};

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med id'en "stay"
// en tilfeldig bakgrunnsfarge når musen beveger seg innenfor elementet, og fjerner bakgrunnsfargen
// når musen beveger seg utenfor elementet.
document.addEventListener("DOMContentLoaded", function () {
  const stay2 = document.querySelector("#stay");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter bakgrunnsfargen til elementet til den tilfeldige fargen.
    stay2.style.backgroundColor = color;
  }

  // Definerer en funksjon som kjøres når musen beveger seg innenfor elementet.
  // Funksjonen setter en tilfeldig bakgrunnsfarge på elementet.
  stay2.onmouseover = function () {
    setRandomColor();
  };

  // Definerer en funksjon som kjøres når musen beveger seg utenfor elementet.
  // Funksjonen fjerner bakgrunnsfargen fra elementet.
  stay2.onmouseout = function () {
    stay2.style.backgroundColor = "";
  };
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med id'en "hit"
// en tilfeldig bakgrunnsfarge når musen beveger seg innenfor elementet, og fjerner bakgrunnsfargen
// når musen beveger seg utenfor elementet.
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#hit");
  function setRandomColor() {
    // Lager en array med farger.
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter bakgrunnsfargen til elementet til den tilfeldige fargen.
    element.style.backgroundColor = color;
  }

  // Definerer en funksjon som kjøres når musen beveger seg innenfor elementet.
  // Funksjonen setter en tilfeldig bakgrunnsfarge på elementet.
  element.onmouseover = function () {
    setRandomColor();
  };

  // Definerer en funksjon som kjøres når musen beveger seg utenfor elementet.
  // Funksjonen fjerner bakgrunnsfargen fra elementet.
  element.onmouseout = function () {
    element.style.backgroundColor = "";
  };
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med klassen "tekst"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".tekst");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    text.style.color = color;
    text.style.webkitTextFillColor = color;
    text.style.MozTextFillColor = color;
  }
  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med klassen "dealer"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const dealer = document.querySelector(".dealer");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    dealer.style.color = color;
    dealer.style.webkitTextFillColor = color;
    dealer.style.MozTextFillColor = color;
  }
  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med klassen "you"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const you = document.querySelector(".you");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    you.style.color = color;
    you.style.webkitTextFillColor = color;
    you.style.MozTextFillColor = color;
  }

  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med klassen "Overskrift"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const OS = document.querySelector(".Overskrift");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    OS.style.color = color;
    OS.style.webkitTextFillColor = color;
    OS.style.MozTextFillColor = color;
  }

  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med id'en "results"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const res = document.getElementById("results");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = ["red", "yellow", "green", "blue", "indigo", "violet"];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    res.style.color = color;
    res.style.webkitTextFillColor = color;
    res.style.MozTextFillColor = color;
  }

  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med klassen "text-shrink"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".text");
  function setRandomColor() {
    // Lager en array med farger.
    const colors = ["red", "yellow", "green", "blue", "indigo", "violet"];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    text.style.color = color;
    text.style.webkitTextFillColor = color;
    text.style.MozTextFillColor = color;
  }
  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});

// Legger til en event listener som lytter etter når DOM-innholdet har blitt lastet inn.
// Når innholdet har blitt lastet inn, defineres en funksjon som gir elementet med id'en "hit"
// en tilfeldig farge.
document.addEventListener("DOMContentLoaded", function () {
  const hit = document.getElementById("hit");

  function setRandomColor() {
    // Lager en array med farger.
    const colors = ["red", "green", "blue", "indigo", "violet"];
    // Velger en tilfeldig farge fra arrayen og lagrer den i en variabel.
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Setter fargen på elementet til den tilfeldige fargen.
    hit.style.color = color;
    hit.style.webkitTextFillColor = color;
    hit.style.MozTextFillColor = color;
  }

  // Kjører funksjonen for å sette en tilfeldig farge på elementet.
  setRandomColor();
});



// Dette kodeprogrammet vil endre fargen på elementet med id "stay" til tilfeldig valgt farge fra listen "colors" når siden lastes.
document.addEventListener("DOMContentLoaded", function () {
const stay = document.getElementById("stay"); // Henter elementet med id "stay"

function setRandomColor() {
const colors = ["red", "green", "blue", "indigo", "violet"]; // Liste med mulige farger
const color = colors[Math.floor(Math.random() * colors.length)]; // Velger tilfeldig farge fra listen
stay.style.color = color; // Endrer fargen på teksten til valgt farge
stay.style.webkitTextFillColor = color; // Endrer fargen på teksten til valgt farge (for webkit-baserte nettlesere)
stay.style.MozTextFillColor = color; // Endrer fargen på teksten til valgt farge (for Mozilla-baserte nettlesere)
}

setRandomColor(); // Kaller på funksjonen for å sette tilfeldig farge
});

// Funksjon for å bygge en kortstokk med 52 kort
function buildDeck() {
let values = [
"A",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"J",
"Q",
"K",
]; // Liste med kortverdier
let types = ["C", "D", "H", "S"]; // Liste med kortsymboler
deck = []; // Oppretter tom liste for kortstokken

// Looper gjennom listene med kortverdier og kortsymboler og legger til hvert mulig kombinasjonskort i kortstokken
for (let i = 0; i < types.length; i++) {
for (let j = 0; j < values.length; j++) {
deck.push(values[j] + "-" + types[i]); // Legger til kort i kortstokken (eks. "A-C" for ess of kløver)
}
}
// console.log(deck);
}

// Funksjon for å blande kortstokken
function shuffleDeck() {
for (let i = 0; i < deck.length; i++) {
let j = Math.floor(Math.random() * deck.length); // Velger tilfeldig indeks i kortstokken
let temp = deck[i]; // Lagrer kortet på indeks i i en midlertidig variabel
deck[i] = deck[j]; // Bytter kortet på indeks i med kortet på indeks j
deck[j] = temp; // Bytter kortet på indeks j med det midlertidige kortet
}
}

//Det første kortet i kortstokken tas ut og legges i et skjult kort for dealeren. Deretter legger dealeren til kort til sin egen hånd inntil summen av kortene er 17 eller mer. Til slutt legges det to kort til spillerens hånd og knappene for å trekke flere kort ("hit") eller holde ("stay") blir aktivert.
function startGame() {
  hidden = deck.pop(); // Tar ut det første kortet i kortstokken og legger det i et skjult kort
  dealerSum += getValue(hidden); // Legger til verdien av skjult kort i dealerens totale sum
  dealerAceCount += checkAce(hidden); // Legger til 1 hvis skjult kort er et ess, ellers legges det til 0
  while (dealerSum < 17) {
    // Så lenge dealerens sum er mindre enn 17, legges det til nye kort til dealerens hånd
    //<img src="./cards/4-C.png">
    let cardImg = document.createElement("img"); // Oppretter et nytt bilde-element
    let card = deck.pop(); // Tar ut det neste kortet i kortstokken
    cardImg.src = "./cards/" + card + ".png"; // Setter bildekilden til å være filstien til kortbildet
    dealerSum += getValue(card); // Legger til verdien av kortet i dealerens totale sum
    dealerAceCount += checkAce(card); // Legger til 1 hvis kortet er et ess, ellers legges det til 0
    document.getElementById("dealer-cards").append(cardImg); // Legger til bildet av kortet i dealerens hånd
  }

  // Legger til to kort til spillerens hånd
  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img"); // Oppretter et nytt bilde-element
    let card = deck.pop(); // Tar ut det neste kortet i kortstokken
    cardImg.src = "./cards/" + card + ".png"; // Setter bildekilden til å være filstien til kortbildet
    yourSum += getValue(card); // Legger til verdien av kortet i spillerens totale sum
    yourAceCount += checkAce(card); // Legger til 1 hvis kortet er et ess, ellers legges det til 0
    document.getElementById("your-cards").append(cardImg); // Legger til bildet av kortet i spillerens hånd
  }
  document.getElementById("hit").addEventListener("click", hit); // Legger til en "click"-lytter til knappen "hit" som kaller på funksjonen "hit" når den blir trykket på
  document.getElementById("stay").addEventListener("click", stay); // Legger til en "click"-lytter til knappen "stay" som kaller på funksjonen "stay" når den blir trykket på
}
// Denne funksjonen gir spilleren muligheten til å trekke et nytt kort (hit).
function hit() {
  // Først sjekker funksjonen om spilleren har mulighet til å trekke et nytt kort (med canHit-variabelen).
  if (!canHit) {
    return; // Hvis spilleren ikke har mulighet til å trekke et nytt kort, så returneres funksjonen uten å gjøre noe mer.
  }
  let cardImg = document.createElement("img"); // Deretter opprettes et img-element og en variabel for et kort.
  let card = deck.pop(); // Så får vi et kort fra stokken (deck) og lagrer det i "card"-variabelen.
  cardImg.src = "./cards/" + card + ".png"; // Bildet til kortet lagres i img-elementet og kilden til bildet settes til kortets filnavn i "cards"-mappen.
  yourSum += getValue(card); // Spillerens sum økes med kortets verdi (med getValue-funksjonen) og antall ess spilleren har økes med 1 hvis kortet er et ess (med checkAce-funksjonen).
  yourAceCount += checkAce(card); // Så legges img-elementet til i HTML-koden under "your-cards"-id-en.
  document.getElementById("your-cards").append(cardImg); // Til slutt sjekker funksjonen om spillerens sum er over 21 etter at eventuelle ess har blitt redusert til 1 (med reduceAce-funksjonen).

  if (reduceAce(yourSum, yourAceCount) > 21) { // Hvis spillerens sum er over 21, så settes canHit-variabelen til false slik at spilleren ikke kan trekke flere kort.
    canHit = false;
  }
}


// Denne funksjonen blir kalt når spilleren velger å "holde" og ikke trekke flere kort. Dealerens skjulte kort vises og verdien av dealerens og spillerens sum av kort blir beregnet. Det vises også en melding om hvem som vant (spilleren, dealeren eller om det ble uavgjort).
function stay() {
dealerSum = reduceAce(dealerSum, dealerAceCount); // Kaller på funksjonen "reduceAce" for å redusere verdien av ess i dealerens hånd dersom summen av kortene overstiger 21
yourSum = reduceAce(yourSum, yourAceCount); // Kaller på funksjonen "reduceAce" for å redusere verdien av ess i spillerens hånd dersom summen av kortene overstiger 21

canHit = false; // Setter variabelen "canHit" til "false" slik at spilleren ikke kan trekke flere kort
document.getElementById("hidden").src = "./cards/" + hidden + ".png"; // Setter bildekilden til skjult kort til å være filstien til kortbildet

let message = ""; // Oppretter en tom melding
// Sjekker om spilleren har tapt
if (yourSum > 21) {
message = "❌You Lose!❌";
}
// Sjekker om dealeren har tapt
else if (dealerSum > 21) {
message = "✌️ You win!✌️ ";
}
// Sjekker om det ble uavgjort (begge har summen 21 eller lavere)
else if (yourSum == dealerSum) {
message = "Tie!";
}
// Sjekker om spilleren har vunnet (summen er høyere enn dealerens)
else if (yourSum > dealerSum) {
message = "✌️ You Win!✌️ ";
}
// Sjekker om spilleren har tapt (summen er lavere enn dealerens)
else if (yourSum < dealerSum) {
message = "❌You Lose!❌";
}

// Oppdaterer verdiene på skjermen for dealerens og spillerens sum, samt resultatmeldingen
document.getElementById("dealer-sum").innerText = dealerSum;
document.getElementById("your-sum").innerText = yourSum;
document.getElementById("results").innerText = message;
}
// Denne funksjonen tar inn en parameter som representerer et kort (f.eks. "4-C" for kortet fire i kløver).
function getValue(card) {
  let data = card.split("-"); // Funksjonen splitter opp kortet i tallverdien og sorten, og lagrer disse i en variabel kalt "data".
  let value = data[0]; // Deretter lagres tallverdien i variabelen "value".
  // Så sjekker funksjonen om "value" er et tall (med isNaN-funksjonen).
  if (isNaN(value)) {
    if (value == "A") {
      // Hvis "value" ikke er et tall, så sjekker funksjonen om det er et ess (med "value == 'A'").
      return 11; // Hvis dette er sant, så returneres 11.
    }
    return 10; // Hvis "value" ikke er et ess, så returneres 10.
  }
  return parseInt(value); // Hvis "value" er et tall, så returneres "value" som et tall (med parseInt-funksjonen).
}
// Denne funksjonen tar inn et kort (f.eks. "4-C" for kortet fire i kløver) som parameter.
function checkAce(card) {
  if (card[0] == "A") { // Funksjonen sjekker om dette kortet er et ess (med "card[0] == 'A'").
    return 1; // Hvis kortet er et ess, så returneres 1.
  }
  return 0; // Hvis kortet ikke er et ess, så returneres 0.
}
// Denne funksjonen tar inn to parametere: spillerens totale sum (playerSum) og antall ess (playerAceCount) spilleren har.
function reduceAce(playerSum, playerAceCount) {
  while (playerSum > 21 && playerAceCount > 0) {
    // Funksjonen kjører en løkke så lenge spillerens sum er over 21 og spilleren har minst ett ess igjen.
    playerSum -= 10; // I løkka reduseres spillerens sum med 10 og antallet ess spilleren har med 1.
    playerAceCount -= 1; // I løkka reduseres spillerens sum med 10 og antallet ess spilleren har med 1.
  }
  return playerSum; // Til slutt returneres spillerens sum.
}

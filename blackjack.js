
var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0; 

var hidden;
var deck;

var canHit = true; //allows the player (you) to draw while yourSum <= 21

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

document.addEventListener("DOMContentLoaded", function () {
  const dealer = document.querySelector(".dealer");

  function setRandomColor() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    dealer.style.color = color;
    dealer.style.webkitTextFillColor = color;
    dealer.style.MozTextFillColor = color;
  }
  setRandomColor();
});

document.addEventListener("DOMContentLoaded", function () {
  const you = document.querySelector(".you");

  function setRandomColor() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    you.style.color = color;
    you.style.webkitTextFillColor = color;
    you.style.MozTextFillColor = color;
  }

  setRandomColor();
});


document.addEventListener("DOMContentLoaded", function () {
  const OS = document.querySelector(".Overskrift");

  function setRandomColor() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    OS.style.color = color;
    OS.style.webkitTextFillColor = color;
    OS.style.MozTextFillColor = color;
  }

  setRandomColor();
});

document.addEventListener("DOMContentLoaded", function () {
  const res = document.getElementById("results");

  function setRandomColor() {
    const colors = [
      "red",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    res.style.color = color;
    res.style.webkitTextFillColor = color;
    res.style.MozTextFillColor = color;
  }

  setRandomColor();
});

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".text-shrink");

  function setRandomColor() {
    const colors = ["red", "yellow", "green", "blue", "indigo", "violet"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    text.style.color = color;
    text.style.webkitTextFillColor = color;
    text.style.MozTextFillColor = color;
  }

  setRandomColor();
});
document.addEventListener("DOMContentLoaded", function () {
  const hit = document.getElementById("hit");

  function setRandomColor() {
    const colors = ["red", "green", "blue", "indigo", "violet"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    hit.style.color = color;
    hit.style.webkitTextFillColor = color;
    hit.style.MozTextFillColor = color;
  }

  setRandomColor();
});

document.addEventListener("DOMContentLoaded", function () {
  const stay = document.getElementById("stay");

  function setRandomColor() {
    const colors = ["red", "green", "blue", "indigo", "violet"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    stay.style.color = color;
    stay.style.webkitTextFillColor = color;
    stay.style.MozTextFillColor = color;
  }

  setRandomColor();
});



function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        //<img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }

    console.log(yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);

}

function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
        canHit = false;
    }

}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";

    let message = "";
    if (yourSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You win!";
    }
    //both you and dealer <= 21
    else if (yourSum == dealerSum) {
        message = "Tie!";
    }
    else if (yourSum > dealerSum) {
        message = "You Win!";
    }
    else if (yourSum < dealerSum) {
        message = "You Lose!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

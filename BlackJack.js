const deck = [
  { value: 2, suit: "hearts" },
  { value: 3, suit: "hearts" },
  { value: 4, suit: "hearts" },
  { value: 5, suit: "hearts" },
  { value: 6, suit: "hearts" },
  { value: 7, suit: "hearts" },
  { value: 8, suit: "hearts" },
  { value: 9, suit: "hearts" },
  { value: 10, suit: "hearts" },
  { value: 11, suit: "hearts" }, // Jack
  { value: 12, suit: "hearts" }, // Queen
  { value: 13, suit: "hearts" }, // King
  { value: 14, suit: "hearts" }, // Ace
  { value: 2, suit: "spades" },
  { value: 3, suit: "spades" },
  // ...
];
function drawCard(hand) {
  // Draw a random card from the deck
  const cardIndex = Math.floor(Math.random() * deck.length);
  const card = deck[cardIndex];

  // Add the card to the hand
  hand.push(card);

  // Remove the card from the deck
  deck.splice(cardIndex, 1);
}
document.getElementById("hit-button").addEventListener("click", function () {
  // draw a card for the player
  drawCard(playerHand);

  // update the HTML to display the player's new hand
  updatePlayerHand();
});

document.getElementById("stand-button").addEventListener;
function playDealerTurn() {
  // Draw cards for the dealer until their hand value is 17 or higher
  while (dealerHand.reduce((a, b) => a + b, 0) < 17) {
    drawCard(dealerHand);
  }

  // Update the HTML to display the dealer's new hand
  updateDealerHand();

  // Determine the winner of the game
  if (playerHand.reduce((a, b) => a + b, 0) > 21) {
    console.log("Dealer wins! You bust.");
  } else if (dealerHand.reduce((a, b) => a + b, 0) > 21) {
    console.log("You win! Dealer busts.");
  } else if (
    playerHand.reduce((a, b) => a + b, 0) >
    dealerHand.reduce((a, b) => a + b, 0)
  ) {
    console.log("You win!");
  } else if (
    dealerHand.reduce((a, b) => a + b, 0) >
    playerHand.reduce((a, b) => a + b, 0)
  ) {
    console.log("Dealer wins!");
  } else {
    console.log("It's a tie!");
  }
}

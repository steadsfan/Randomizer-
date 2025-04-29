const cards = [
  "images/karta1.png",
  "images/karta2.png",
  "images/karta3.png",
  "images/karta4.png"
];

function displayRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];
  document.getElementById("cardDisplay").src = selectedCard;
}
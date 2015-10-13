var gameboard = document.getElementById('blackjack'),
    dealerHand = document.getElementById('dealerHand'),
    playerHand = document.getElementById('playerHand'),
    startButton = document.getElementById('startGame'),
    chips = document.getElementById('chips'),
    playerName = document.getElementById('playerName');


function showCard(receiver, card) {
  if (receiver instanceof Dealer) {
    dealerHand.innerHTML += "<div id='card' class='card " + card.title + "'>" + card.name + "</div>";
  } else if (receiver instanceof Player) {
    playerHand.innerHTML += "<div id='card' class='card " + card.title + "'>" + card.name + "</div>";
  }
}

function showPlayerInfo(player) {
  playerName.innerHTML += player.name + "'s Hand";
}

function showChips(object) {
  var whiteChips = object.getChipsCount('white');
  chips.innerHTML += "<div id='chip' class='chip white-chip col-md-1'>" + whiteChips + "</div>";
  var redChips = object.getChipsCount('red');
  chips.innerHTML += "<div id='chip' class='chip red-chip col-md-1'>" + redChips + "</div>";
  var greenChips = object.getChipsCount('green');
  chips.innerHTML += "<div id='chip' class='chip green-chip col-md-1'>" + greenChips + "</div>";
  var blackChips = object.getChipsCount('black');
  chips.innerHTML += "<div id='chip' class='chip black-chip col-md-1'>" + blackChips + "</div>";
}

startButton.onclick = function() {
  player.chips.dealChips(15, 10, 5, 2);
  showPlayerInfo(player);
  dealer.startGame();
  this.style.display = "none";
};

// window.onload = function() {
//   player.chips.dealChips(15, 10, 5, 2);
//   dealer.startGame();
// };

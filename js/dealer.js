// dealer logic
/////////////////

function Dealer(name, deck, player) {

  this.name =     name;
  this.hand =     new Hand();
  this.deck =     deck;
  this.player =   player;

}

Dealer.prototype.drawCard = function() {

  return this.deck.cards.pop();

}

Dealer.prototype.dealCard = function(receiver) {

  var dealtCard = this.drawCard();

  receiver.hand.cards.push(dealtCard);

  console.log(dealtCard.title + ' dealt to ' + receiver.name);

  showCard(receiver, dealtCard);
  return dealtCard;

}

Dealer.prototype.startGame = (function() {

  var executed = false;

  return function () {
      if (!executed) {
          executed = true;
          this.deck.shuffle();

          this.dealCard(this.player);
          this.dealCard(this);
          this.dealCard(this.player);
          this.dealCard(this);
      }
  };

})();

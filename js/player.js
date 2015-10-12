// Player logic
/////////////////

function Player(name) {
  this.name = name;
  this.chips = new ChipSet();
  this.hand = new Hand();
}

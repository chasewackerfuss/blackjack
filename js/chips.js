// chips logic
/////////////////

// each chip has a value and a color
function Chip(value, color) {
  this.value = value;
  this.color = color;
}

var whiteChip = new Chip(1, 'white'),
    redChip = new Chip(5, 'red'),
    greenChip = new Chip(25, 'green'),
    blackChip = new Chip(100, 'black');



function ChipSet() {
  this.chips = [];
}

ChipSet.prototype.dealChips = (function(whiteCount, redCount, greenCount, blackCount) {

  var executed = false;

  return function (whiteCount, redCount, greenCount, blackCount) {
      if (!executed) {

          executed = true;

          for ( i = 0; i < whiteCount; i++ ) {
            this.chips.push(whiteChip);
          }
          for ( i = 0; i < redCount; i++ ) {
            this.chips.push(redChip);
          }
          for ( i = 0; i < greenCount; i++ ) {
            this.chips.push(greenChip);
          }
          for ( i = 0; i < blackCount; i++ ) {
            this.chips.push(blackChip);
          }

          showChips(this);

          console.log('Player receives ' + whiteCount + ' white chips, ' + redCount + ' red chips, ' + greenCount + ' green chips, and ' + blackCount + ' black chips.')
      }
  };

})();



ChipSet.prototype.getChipsCount = function(color) {

  var count = 0;

  if (color == undefined) {

    count = this.chips.length;

  } else {

    for (chip in this.chips) {
      if (this.chips[chip].color == color) {
        count++;
      }
    }

  }

  return count;

}

ChipSet.prototype.getChipsValue = function(color) {

  var value = 0;

  if (color == undefined) {

    for (chip in this.chips) {
      value += this.chips[chip].value;
    }

  } else {

    for (chip in this.chips) {
      if (this.chips[chip].color == color) {
        value += this.chips[chip].value;
      }
    }

  }

  console.log('ChipSet has ' + value + ' dollars worth of ' + color + ' chips');

  return value;

}

ChipSet.prototype.addChips = function(newChips) {

  for (chip in newChips) {
    this.chips.push(newChips[chip]);
  }

  console.log('Added chips to your pool');

  return this.chips;

}

ChipSet.prototype.removeChip = function(color) {

  var i = 0;
  do {

    for (chip in this.chips) {
      if (this.chips[chip].color == color) {
        var removedChip = this.chips[chip];
        i++;
      }
    }

  }

  while ( i = 0);

  var chipIndex = this.chips.indexOf(removedChip);

  this.chips.splice(chipIndex, 1);

  console.log('Removed one ' + color + ' chip from your pool.');

  return removedChip;

}


ChipSet.prototype.betPool = [];

ChipSet.prototype.clearBetPool = function() {
  this.betPool = [];
}

ChipSet.prototype.betChip = function(color) {

  var bettedChip = this.removeChip(color);

  this.betPool.push(bettedChip);

  console.log('Bet one ' + color + ' chip.');

  return this.betPool;

}

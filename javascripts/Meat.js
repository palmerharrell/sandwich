// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	Turkey: 0.90, 
  	Beef: 1.10,
  	Chicken: 1.00
  };

  // Augment the original object with another method
  maker.addMeat = function(ingredient) {
    return meatPrices[ingredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

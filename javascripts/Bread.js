// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	White: 0.65, 
  	Wheat: 0.65,
  	Rye: 0.85
  };

  // Augment the original object with another method
  maker.addBread = function(ingredient) {
    return breadPrices[ingredient];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

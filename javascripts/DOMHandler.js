// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var finalSandwichEl = document.getElementById("finalSandwich"); //PH

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var breadChooser = document.getElementById("bread-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  if (selectedTopping !== 'None') {
	  // Get the value chosen from the DOM
	  selectedTopping = event.target.value;

	  // Determine the price of the topping chosen
	  var meatPrice = SandwichMaker.addMeat(selectedTopping);

	  // Add the topping to the SandwichMaker to increase the total price
	  SandwichMaker.addTopping(meatPrice);

	  finalSandwichEl.innerHTML += `<p>$${meatPrice} ${selectedTopping} </p>`;
	};
});

// Veggies
veggieChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  if (selectedTopping !== 'None') {
	  var veggiePrice = SandwichMaker.addVeggie(selectedTopping);
	  SandwichMaker.addTopping(veggiePrice);
	  finalSandwichEl.innerHTML += `<p>$${veggiePrice} ${selectedTopping} </p>`;
  };
});


console.log(document.querySelectorAll('h5'), 'fuck');
// Variables to store user selections
let selectedPizza = '';
let selectedSize = '';
let selectedcheese = '';
let selectedMeat = '';
let selectedVeggie = '';
let selectedDipping = '';

// Function to update the pizza details
function updatePizzaDetails() {
    document.getElementById('pizzaName').textContent = `Pizza: ${selectedPizza}`;
    document.getElementById('pizzaSize').textContent = `Size: ${selectedSize}`;
    document.getElementById('pizzacheese').textContent = `Cheese: ${selectedcheese}`;
    document.getElementById('Meat').textContent = `Meat : ${selectedMeat}`;
    document.getElementById('Veggie').textContent = `Veggie : ${selectedVeggie}`;
    console.log('hell,', document.getElementById('Veggie').textContent);
    document.getElementById('Dipping').textContent = `Dipping: ${selectedDipping}`;
}

// Function to reset selections
function resetSelections() {
    selectedPizza = '';
    selectedSize = '';
    selectedcheese = '';
    selectedMeat = '';
    selectedVeggie = '';
    selectedDipping = '';
    updatePizzaDetails();
}

// Step 1: Listen for the pizza card click
const pizzaCards = document.querySelectorAll('.card');
pizzaCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedPizza = card.querySelector('h5').textContent;
        updatePizzaDetails();
    });
});

// Step 2: Listen for the size selection
const sizeCards = document.querySelectorAll('.card-size');
sizeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedSize = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Step 3: Listen for the cheese selections
const cheeseCards = document.querySelectorAll('.card-cheese');
cheeseCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedcheese = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Step 4: Listen for the Meat  selections
const extraCards = document.querySelectorAll('.card-meat');
extraCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedMeat = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Step 5: Listen for the Veggie  selections
const VeggieCards = document.querySelectorAll('.card-veggie');
VeggieCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedVeggie = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Step 6: Listen for the Dipping  selections
const dippingCards = document.querySelectorAll('.card-dipping');
dippingCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedDipping = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Reset selections when the modal is closed
const closeModalButton = document.querySelector('.btn-close');
closeModalButton.addEventListener('click', () => {
    resetSelections();
});








// Add an event listener to the Close button
document.getElementById('close-modal').addEventListener('click', function () {
    const selectedcheese = arguments/* code to check if a cheese is selected */; // Replace with your logic
    const selectedMeat = arguments /* code to check if an extra is selected */; // Replace with your logic
    const selectedVeggie = arguments /* code to check if an extra is selected */; // Replace with your logic
    const selectedDipping = arguments/* code to check if a sauce is selected */; // Replace with your logic


    if (selectedcheese && selectedMeat && selectedVeggie && selectedDipping) {
        $('#exampleModal-1').modal('hide'); // Close the modal using Bootstrap modal functions
    } else {
        alert('Please select one option from each category before closing.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    console.log(abdullah);

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            // Remove the "selected-card" class from all cards
            cards.forEach(function (c) {
                c.classList.remove("selected-card");
            });

            // Add the "selected-card" class to the clicked card
            card.classList.add("selected-card");
        });
    });


});
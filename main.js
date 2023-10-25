// Variables to store user selections
let selectedPizza = '';
let selectedSize = '';
let selectedCrust = '';
let selectedExtras1 = '';
let selectedExtras2 = '';

// Function to update the pizza details
function updatePizzaDetails() {
    document.getElementById('pizzaName').textContent = `Pizza: ${selectedPizza}`;
    document.getElementById('pizzaSize').textContent = `Size: ${selectedSize}`;
    document.getElementById('pizzaCrust').textContent = `Crust: ${selectedCrust}`;
    document.getElementById('pizzaExtras1').textContent = `Extras 1: ${selectedExtras1}`;
    document.getElementById('pizzaExtras2').textContent = `Extras 2: ${selectedExtras2}`;
}

// Function to reset selections
function resetSelections() {
    selectedPizza = '';
    selectedSize = '';
    selectedCrust = '';
    selectedExtras1 = '';
    selectedExtras2 = '';
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

// Step 3: Listen for the crust and extras selections
const crustAndExtrasCards = document.querySelectorAll('.card-crust');
crustAndExtrasCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedCrust = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Step 4: Listen for the extras 1 selections
const extraCards = document.querySelectorAll('.card-extra');
extraCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedExtras1 = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Step 5: Listen for the extras 2 selections
const dippingCards = document.querySelectorAll('.card-dipping');
dippingCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectedExtras2 = card.querySelector('.card-text').textContent;
        updatePizzaDetails();
    });
});

// Reset selections when the modal is closed
const closeModalButton = document.querySelector('.btn-close');
closeModalButton.addEventListener('click', () => {
    resetSelections();
});



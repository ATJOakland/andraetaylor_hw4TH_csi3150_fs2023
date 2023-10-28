import usedCars from "./usedCars.js";

// Card table and image default
const carCardTable = document.querySelector(".carCardTable");
const defaultCarImage = document.querySelector(".carCard img").src;

// Hide the default carCard
const defaultCarCard = document.querySelector(".carCard:first-child");
defaultCarCard.style.display = "none";

//---------- For showing all the cards -------------

usedCars.forEach((car) => {
  // Create a new carCard object
  const carCard = document.createElement("div");
  carCard.classList.add("carCard");

  // Add the same CSS attributes as the original carCard
  carCard.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
  carCard.style.maxWidth = "calc(33.33% - 20px)";
  carCard.style.margin = "10px 0";
  carCard.style.textAlign = "center";
  carCard.style.fontFamily = "arial";
  carCard.style.boxSizing = "border-box";
  carCard.style.padding = "10px";
  
  // Add the car's information to the carCards
  carCard.innerHTML = `
    <img src="${defaultCarImage}" alt="Picture of ${car.make} ${car.model}" style="width:100%">
    <h1>${car.make} ${car.model}</h1>
    <h3>Year: ${car.year}</h3>
    <p>$${car.price}</p>
    <p>Color: ${car.color}</p>
    <p>Mileage: ${car.mileage}</p>
    <p>Gas Mileage: ${car.gasMileage}</p>
    <button>Add to Cart</button>
  `;

  // Append the carCard element to the carCardTable element.
  carCardTable.appendChild(carCard);
});

function applyFilter() {
  // Get the selected color options from the dropdown.
  const selectedColors = Array.from(document.querySelectorAll('#color option:checked')).map(option => option.value);

  // Hide all car cards initially.
  const carCards = document.querySelectorAll('.carCard');
  carCards.forEach(carCard => {
    carCard.style.display = 'none';
  });

  // Show car cards that match the selected colors.
  usedCars.forEach(car => {
    if (selectedColors.includes(car.color)) {
      // Find the  car card and show it.
      const carCard = document.querySelector(`.carCard:has(#carColor[value="${car.color}"])`);
      if (carCard) {
        carCard.style.display = 'block';
      }
    }
  });

  console.log("Filter function called.");
}

// Makes an event for the button
document.getElementById("filterButton").addEventListener("click", applyFilter);

/*
If no cars from the dataset matches the filter criteria set by the user, the interface must state the same to user and ask them to try again.
In such a scenario, no car listings should be shown on the interface.
*/
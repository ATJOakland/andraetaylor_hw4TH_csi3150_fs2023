import usedCars from "./usedCars.js";

// Function to display all cars initially
function displayAllCars() {
  const carCardTable = document.querySelector(".carCardTable");
  carCardTable.innerHTML = ""; // Clear existing car cards

  usedCars.forEach((car) => {
    // Create a new carCard object
    const carCard = document.createElement("div");
    carCard.classList.add("carCard");

    // Add the cars information to the carCards
    carCard.innerHTML = `
      <img src="./img/older-used-car_jpg.png" alt="Picture of ${car.make} ${car.model}" style="width:100%">
      <h1>${car.make} ${car.model}</h1>
      <h3>Year: ${car.year}</h3>
      <p>$${car.price}</p>
      <p>Color: ${car.color}</p>
      <p>Mileage: ${car.mileage}</p>
      <p>Gas Mileage: ${car.gasMileage}</p>
      <button>Add to Cart</button>
    `;

    // Hide the no cars mesage
    document.getElementById("noCarsMessage").style.display = "none";

    // Append the carCard element to the carCardTable
    carCardTable.appendChild(carCard);
  });
}

// Function to filter and display cars
function applyFilter() {
  const selectedMakes = Array.from(document.getElementById("make").selectedOptions).map(option => option.value);

  // Filter cars based on makes
  const filteredCars = usedCars.filter(car => selectedMakes.includes(car.make));

  // Update the car cards to display the filtered
  const carCardTable = document.querySelector(".carCardTable");
  carCardTable.innerHTML = ""; // Clear existing car cards

  filteredCars.forEach(car => {
    // Create and append car card elements for the filtered cars
    const carCard = document.createElement("div");
    carCard.classList.add("carCard");
    carCard.innerHTML = `
      <img src="./img/older-used-car_jpg.png" alt="Picture of ${car.make} ${car.model}" style="width:100%">
      <h1>${car.make} ${car.model}</h1>
      <h3>Year: ${car.year}</h3>
      <p>$${car.price}</p>
      <p>Color: ${car.color}</p>
      <p>Mileage: ${car.mileage}</p>
      <p>Gas Mileage: ${car.gasMileage}</p>
      <button>Add to Cart</button>
    `;
    carCardTable.appendChild(carCard);

    console.log("Filter function called.");
  });
}

// Apply Filter button
document.getElementById("filterButton").addEventListener("click", applyFilter);

// Reset the filter and show all the cards
function resetCars() {
  const carCardTable = document.querySelector(".carCardTable");
  carCardTable.innerHTML = ""; // Clear existing car cards

  usedCars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("carCard");

    carCard.innerHTML = `
      <img src="./img/older-used-car_jpg.png" alt="Picture of ${car.make} ${car.model}" style="width:100%">
      <h1>${car.make} ${car.model}</h1>
      <h3>Year: ${car.year}</h3>
      <p>$${car.price}</p>
      <p>Color: ${car.color}</p>
      <p>Mileage: ${car.mileage}</p>
      <p>Gas Mileage: ${car.gasMileage}</p>
      <button>Add to Cart</button>
    `;

    carCardTable.appendChild(carCard);

    document.getElementById("noCarsMessage").style.display = "none";

    console.log("Reset Called.");
  });
}

// Reset filter button
document.getElementById("resetFilterButton").addEventListener("click", resetCars);

// Display all cars initially
displayAllCars();
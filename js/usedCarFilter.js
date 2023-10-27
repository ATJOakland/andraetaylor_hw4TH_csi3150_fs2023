import usedCars from "./usedCars";

// Reference the main section in the HTML
const mainSection = document.querySelector(".main");

// Reference the car card template (the one with the basic $19.99 price) and hide it
const templateCarCard = document.querySelector(".carCard");
templateCarCard.style.display = "none"; // Hide the template car card

// Loop through the usedCars array and create car cards for each car
usedCars.forEach((car) => {
  // Clone the template car card
  const carCard = templateCarCard.cloneNode(true);
  carCard.style.display = "block"; // Display the cloned car card

  // Set the content of the car card based on the car object from usedCars
  carCard.querySelector("h1#carMake").textContent = car.make;
  carCard.querySelector("h2#carModel").textContent = car.model;
  carCard.querySelector("h3#carYear").textContent = car.year;
  carCard.querySelector("p#carPrice").textContent = `$${car.price}`;
  carCard.querySelector("p#carColor").textContent = car.color;
  carCard.querySelector("p#carMileage").textContent = `Mileage: ${car.mileage} miles`;
  carCard.querySelector("p#carGasMileage").textContent = `Gas Mileage: ${car.gasMileage}`;
  
  // Append the car card to the main section
  mainSection.appendChild(carCard);
});

/**
 * The interface must also support a filter functionality (to be implemented using JS) which will allow users to specify their desired values for the following filter fields
 * (what html elements you use to implement them is upto you)
a. Min. car year – Max. car year (e.g. 2005 -- 2012)
b. Select one or more options from the available (car) make at the dealership (for e.g. Toyota, or Ford, or Lexus, etc.)
c. Choose the desired max threshold value of car mileage (e.g. under 15000 or under 30000 miles etc.)
d. Min. car price – Max. car price (e.g. 5,000 – 25,000) [or just specify the max price]
e. Select one or more options from the available (car) colors (e.g. silver, white, black, etc)

If no cars from the dataset matches the filter criteria set by the user, the interface must state the same to user and ask them to try again.
In such a scenario, no car listings should be shown on the interface.
*/
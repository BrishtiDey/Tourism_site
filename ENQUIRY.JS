const form = document.querySelector("#enquiry-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  
  const roomTypes = document.querySelector("#room-types").value;
  const foodFacility = document.querySelector("#food-facility").value;
  const sightseeingOptions = document.querySelector(
    "#sightseeing-options"
  ).value;
  const rentalCarFacilities = document.querySelector(
    "#rental-car-facilities"
  ).value;


  console.log(`Room Types: ${roomTypes}`);
  console.log(`Food Facility: ${foodFacility}`);
  console.log(`Sightseeing Options: ${sightseeingOptions}`);
  console.log(`Rental Car Facilities: ${rentalCarFacilities}`);
});

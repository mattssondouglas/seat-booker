const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

// Updates total + count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Keeps track of which seats are selected with an array of seat indexes
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // Saves seatsIndex to local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Selects movie
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Selects seats (adds class 'selected' to the seat)
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// -----------------------------------------------------
// Fee Calculator Logic
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculateBtn");
  calculateButton.addEventListener("click", calculateTotal);
});

function calculateTotal() {
  const checkboxes = document.querySelectorAll(".course:checked");
  let total = 0;

  checkboxes.forEach(c => {
    total += parseFloat(c.value);
  });

  // Discount: 10% off if 3 or more courses selected
  if (checkboxes.length >= 3) {
    total *= 0.9;
  }

  // Add 15% VAT
  total *= 1.15;

  const totalDisplay = document.getElementById("totalDisplay");

  if (checkboxes.length === 0) {
    totalDisplay.textContent = "Please select at least one course.";
  } else {
    totalDisplay.textContent = `Your total estimated fee (incl. VAT): R${total.toFixed(2)}`;
  }
}
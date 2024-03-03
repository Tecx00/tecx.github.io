<!-- Include your modified JavaScript here -->

  document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('purchaseForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Optionally, you can reset the form or redirect the user after a delay
    // Example: Reset the form after 3 seconds
    setTimeout(function () {
      document.getElementById('purchaseForm').reset();
      document.getElementById('prompt').classList.remove('active');
      document.getElementById('confirmationMessage').style.display = 'none'; // Hide the confirmation message
    }, 3000);
  });
});

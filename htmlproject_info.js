document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "card"
    const cards = document.querySelectorAll(".card");

    // Loop through each card
    cards.forEach(function (card) {
        // Add a click event listener to each card
        card.addEventListener("click", function () {
            // Toggle the "active" class on the clicked card
            card.classList.toggle("active");
        });
    });
});
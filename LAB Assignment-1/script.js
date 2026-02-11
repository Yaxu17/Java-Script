const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(eventTitle.value);
    console.log(eventDate.value);
    console.log(category.value);
    console.log(description.value);
});
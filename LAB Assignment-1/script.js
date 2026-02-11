const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(eventTitle.value);
    console.log(eventDate.value);
    console.log(category.value);
    console.log(description.value);

    
});

const eventCards = document.querySelector(".cards")
form.addEventListener("submit", function(event) {
    event.preventDefault()
    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
        <h2>${title}</h2>
        <p>Date:📅 ${date}</p>
        <button class="category">${cat}</button>
        <p>Description: ${desc}</p>
        <div class="deleteCard">X</div>
    `

    card.querySelector(".deleteCard").addEventListener("click", function() {
        card.remove()
    })
    eventCards.appendChild(card)
})

document.addEventListener("keydown", function(event) {
    document.querySelector('.key').innerText = event.key
})
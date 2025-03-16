const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "images/gyukotsu (1).jpg", rating: 5, comment: "Rich and flavorful broth!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro (1).jpg", rating: 4, comment: "Nice balance of spice and umami!" },
    { id: 3, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "images/naruto (1).jpg", rating: 5, comment: "A heavenly taste experience!" },
    { id: 4, name: "Naruto Ramen", restaurant: "Ichiraku", image: "images/nirvana (1).jpg", rating: 4, comment: "Feels like anime magic!" },
    { id: 5, name: "Shoyu Ramen", restaurant: "Tokyo Ramen", image: "images/shoyu (1).jpg", rating: 5, comment: "Classic and satisfying!" }
];
function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));

        menu.appendChild(img);
    });
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}/5`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;

    const ramenImage = document.getElementById("ramen-image");
    ramenImage.src = ramen.image;
    ramenImage.alt = ramen.name;
}
function addSubmitListener() {
    document.getElementById("new-ramen").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const restaurant = document.getElementById("restaurant").value.trim();
        const image = document.getElementById("image").value.trim();
        const rating = parseInt(document.getElementById("rating").value);
        const comment = document.getElementById("comment").value.trim();

        if (!name || !restaurant || !image || isNaN(rating) || rating < 1 || rating > 5 || !comment) {
            alert("Please fill all fields correctly. Rating must be between 1 and 5.");
            return;
        }

        const newRamen = { id: ramens.length + 1, name, restaurant, image, rating, comment };
        ramens.push(newRamen);

        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));

        document.getElementById("ramen-menu").appendChild(img);
        handleClick(newRamen);
        e.target.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);

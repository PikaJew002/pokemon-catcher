let ballThrow = (ball) => {
    let number = (Math.floor(Math.random() * 10) + 1);
    let returnArea = document.querySelector("#resultDiv");
    if (ball === "pokeball") {
        if (number > 6) {
            returnArea.innerHTML += "<p>Pokemon caught!</p>";
        } else {
            returnArea.innerHTML += "<p>Pokemon escaped.</p>";
        }
    }

    if (ball === "greatball") {
        if (number > 5) {
            returnArea.innerHTML += "<p>Pokemon caught!</p>";
        } else {
            returnArea.innerHTML += "<p>Pokemon escaped.</p>";
        }
    }

    if (ball === "ultraball") {
        if (number > 3) {
            returnArea.innerHTML += "<p>Pokemon caught!</p>";
        } else {
            returnArea.innerHTML += "<p>Pokemon escaped.</p>";
        }
    }

    if (ball === "masterball") {
        returnArea.innerHTML += "<p>Pokemon caught without a fight.</p>";
    }
};
// Aaron! You have nice looking code. 
// Here are some suggestions that would as least make it slightly more performant/are good practice
// The stacked if statements (as is) would all be tested even if the first or second test true. 
// I would suggest returning early (add a return; inside the first two ifs, at the bottom after the code (see below))
// Alternatively, you could use an if/if-else/else chain to accomplish the same thing. Or a switch statement.
// Anyway you choose the idea is to not evaluate any expressions you don't need to. 
// Props on the '===', btw, most people opt for the less strict version (which can cause confusion/problems later).
// Cheers!
let ballThrow = (ball) => {
    let number = (Math.floor(Math.random() * 10) + 1);
    let returnArea = document.querySelector("#resultDiv");
    if (ball === "pokeball") {
        if (number > 6) {
            returnArea.innerHTML += "<p>Pokemon caught!</p>";
        } else {
            returnArea.innerHTML += "<p>Pokemon escaped.</p>";
        }
// return;
    }

    if (ball === "greatball") {
        if (number > 5) {
            returnArea.innerHTML += "<p>Pokemon caught!</p>";
        } else {
            returnArea.innerHTML += "<p>Pokemon escaped.</p>";
        }
// return;
    }

    if (ball === "ultraball") {
        if (number > 3) {
            returnArea.innerHTML += "<p>Pokemon caught!</p>";
        } else {
            returnArea.innerHTML += "<p>Pokemon escaped.</p>";
        }
// return;
    }

    if (ball === "masterball") {
        returnArea.innerHTML += "<p>Pokemon caught without a fight.</p>";
    }
};

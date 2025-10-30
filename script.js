let homescoreEl = document.getElementById("home-score");
let guestscoreEl = document.getElementById("guest-score");
let homescore = 0;
let guestscore = 0;

function add1pointsHome() {
    homescore += 1;
    homescoreEl.textContent = homescore;
}

function add2pointsHome() {
    homescore += 2;
    homescoreEl.textContent = homescore;
}

function add3pointsHome() {
    homescore += 3;
    homescoreEl.textContent = homescore;
}

function add1pointsGuest() {
    guestscore += 1;
    guestscoreEl.textContent = guestscore;
}

function add2pointsGuest() {
    guestscore += 2;
    guestscoreEl.textContent = guestscore;
}

function add3pointsGuest() {
    guestscore += 3;
    guestscoreEl.textContent = guestscore;
}
let homeScore = 0
let homeScoreCount = document.getElementById("home-score")
let guestScore = 0
let guestScoreCount = document.getElementById("guest-score")

function addOneHome() {
    homeScore += 1
    homeScoreCount.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeScoreCount.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreCount.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestScoreCount.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreCount.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreCount.textContent = guestScore
} 
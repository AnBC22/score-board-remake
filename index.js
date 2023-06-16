let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')
let newGameEl = document.getElementById('new-game')

let countHome = 0
let countGuest = 0

function changeScoreHome() {
    scoreHome.textContent = countHome
}

function changeScoreGuest() {
    scoreGuest.textContent = countGuest
}

function add1Home() {
    countHome += 1
    changeScoreHome()
}

function add2Home() {
    countHome += 2
    changeScoreHome()
    
}

function add3Home() {
    countHome += 3
    changeScoreHome()
}

function add1Guest() {
    countGuest += 1
    changeScoreGuest()
}

function add2Guest() {
    countGuest += 2
    changeScoreGuest()
    
}

function add3Guest() {
    countGuest += 3
    changeScoreGuest()
}

function newGame() {
    countHome = 0
    countGuest = 0
    scoreHome.textContent = countHome
    scoreGuest.textContent = countGuest
}
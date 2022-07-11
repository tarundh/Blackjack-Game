let num1 = 13
let num2 = 8
let cards = [num1, num2]
let sum = num1 + num2
let hasBlackJack = false
isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0] +" " + cards[1]
    if (sum < 21) {
        message = "Do you want to draw a new card."
    } else if (sum === 21) {
        message = "Wohoo! You have won a blackjack"
        hasBlackJack = true
    } else {
        message = "you are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

    function newCard() {
        console.log("Drawing a New Card From the deck")
        let card = 5
        sum += card
        cards.push(card)
        console.log(cards)
       renderGame()
    }
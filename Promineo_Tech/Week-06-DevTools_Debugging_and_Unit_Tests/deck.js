
const SUITS = ["♣", "♦", "♥", "♠"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Deck{
    constructor(cards) {
this.cards = cards
    }
    
    get numberOfCards() {
        return this.cards.length;
    }

    pop() {
        return this.cards.shift();
    }
    push(card){
        this.cards.push(card)
    }

    shuffle() {
for(let i = this.numberOfCards - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1))
    const oldValue = this.cards[newIndex]
    this.cards[newIndex] = this.cards[i]
    this.cards[i] = oldValue
}
    }
    
}
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    get color() {
        return this.suit === "♣" || this.suit === "♦" ? "black" : "red"
    }

    getHTML() {
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const PlayerDeckElement =  document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerDeck, computerDeck, inRound, stop

document.addEventListener("click", () => {
    if (stop) {
        startGame()
        return
    }

    if (inRound) {
        cleanBeforeRound()
    }else{
        flipCards
    }
    
})

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(decl.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    inRound = false
    stop = false
    cleanBeforeRound()


}

function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ""
    text.innerText = ""

    updateDeckCount()
}

function flipCards() {
    inRound = true


    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()


    updateDeckCount()

    if(isRoundWinner(playerCard, computerCard))
    text.innerText = "Win"
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
} else if (isRoundWinner(computerCard, playerCard)) {
text.innerText = "Lose"
computerDeck.push(playerCard)
computerDeck.push(computerCard)

} else {
    text.innerText = "Draw"
    playerDeck.push(playerCard)
    computerDeck.push(computerCard)


}

if (isGameOver(playerDeck)) {

}





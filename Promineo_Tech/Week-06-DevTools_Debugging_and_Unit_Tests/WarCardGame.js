console.log("this is my WarCardGame");

const suits = ["♣", "♦", "♥", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var playerOne = [];
var playerTwo = [];



 class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length;
    }

    pop() {
        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)

    }
 shuffleIt = () => {
             this.deck.sort(() => 0.5 - Math.random());
        }
      
       }
 
 //shuffle cards to be random using this for loop
shuffleIt();
      function shuffleIt() {
            for (let i = this.numberOfCards.length - 1; i > 0; i--) {
                const newIndex = Math.floor(Math.random () * (i + 1));
                 const oldValue = this.cards[newIndex]
                  this.cards[newIndex] = this.cards[i];
                        this.cards[i] = oldValue
        }
      
    }
       



function newDeck() {
    function newDeck() {
        return suits.flatMap(suit => {
                return values.map(value => {
                return new Card(suit, value)
    })
        })
            
    }

    }

    class Card {
        constructor(value, suit, rank) {
            this.value = value
            this.suit = suit
            this.rank = rank
              

            this.suit = ["♣", "♦", "♥", "♠"];
            this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            this.ranks =  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
            this.deck = [];
        }
        createDeck() {
            for(let suit of this.suits) {
                for(let value of values){
this.deck.push(newCard(value, suit));
                }
            }
        
        }
    }
     
    function newDeck(){
        return suits.flatMap(suit => {
            return values.map(value => {
return new Card(suit, value)
            })
        })
    }
    
    const freshDeck = new Deck();
    console.log("The deck has been shuffled and is ready to deal to play")
    console.log(freshDeck.deck);


class Player {
    constructor(playerOne, playerTwo, points) {
this.playerOne = playerOne
this.playerTwo = playerTwo
this.points = points;

var x = deal(playerOne, playerTwo);
expect(playerOne.length).to.equal(26);
expect(playerTwo.length).to.equal(26);
console.log("Both players should contain 26 elements");
    }

}
 let myNewDeck = new Deck ();
 console.log(myNewDeck);

 startGame
 function startGame() {
    const deck = new Deck()
    deck.shuffleCards()

    const split = (deck.numberOfCards / 2)
    playerOne = Deck(deck.cards.slice(0, split))
    playerTwo = Deck(deck.cards.slice(split, deck.numberOfCards))
    console.log(playerOne)
    console.log(playerTwo)
 }

  deck = Deck();


const dealCards = (arr) => {
    let half = Math.ceil(arr.length / 2);
    playerOne = arr.slice(0, half);
    playerTwo = arr.slice(half);

}
//let myNewDeck = new Deck ();
//console.log(myNewDeck);

startGame
function startGame() {
    const deck = new Deck()
    deck.shuffleCards()
    
    const split = (deck.numberOfCards / 2)
    playerOne = Deck(deck.cards.slice(0, split))
    playerTwo = Deck(deck.cards.slice(split, deck.numberOfCards))

    console.log(playerOne)
        console.log(playerTwo)
    }
    
    const deck = new Deck();
    console.log(deck.cards);
    let playerOneCardValue = playerOne.cards
    let playerTwoCardValue = playerTwo.cards

    playerOneScore = 0;
    playerTwoScore = 0;
    

startGame()
function startGame() {
    const deck = new Deck()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.lastIndexOf(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false
}
function updateDeckCount () {

    if (isRoundWinner(playerOne, playerTwo)) {
        Text.innerText = "Win"
        playerDeck.push(playerOne)
        playerDeck.push(playerTwo)
 }else if (isRoundWinner(playerTwo, playerOne))
    text.innerText = "Lose"
    computerDeck.push(playerOne)
    computerDeck.push(playerTwo)
} if (isRoundWinner(playerTwo, playerOne)) {
    text.innerText = "Lose"
    computerDeck.push(playerOne)
    computerDeck.push(playerTwo)

} else {
    text.inner.Text = "Draw"
    playerDeck.push(playerOne)
    computerDeck.push(playerTwo)
}
if (isGameOver(playerDeck)) {
    console.log("You Lose!!")
    stop = true
 } else if (isGameOver(computerDeck)) {
    console.log("You Win!!")
    stop = true
 }

 








  




    
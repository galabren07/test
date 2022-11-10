console.log("this is my WarCardGame");

const suits = ["♣", "♣", "♥", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var playerOne = "House";
var playerTwo = "player";



 class Deck {
    constructor(cards) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length;
    }
 
    pop() {
        return this.card.shift();
    }

    push() {
       this.deck.push;

       } 
    }
 


//shuffle cards to be random using this for loop
shuffleIt();
       for (let i = this.numberOfCards.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i +1));
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue
       }
    
const shuffleIt = () => {
        this.deck.sort(() => 0.5 - Math.random());
       }

 let newDeck = new Deck();
 console.log("The deck has been shuffled and is ready to deal to play");
 console.log(newDeck.deck);
        
    
        

    
class Card {
    constructor(value, suit, rank) {
this.value = value
this.suit = suit
this.rank = rank
    

  
        this.suits = ["♣", "♣", "♥", "♠"];
        this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        this.deck = [];
   }
        show() {
        return `${this.suit} with ${this.value} has ${this.rank}.`
    
    }
    createDeck() {
        for(let suit of this.suits) {
            for(let value of values) {
                this.deck.push(newCard(value, suit));
            }
        }
    }
    }

       
            
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
const dealCards = (arr) => {
    let half = Math.ceil(arr.length / 2);
    playerOneHand = arr.slice(0, half);
    playerTwoHand = arr.slice(half);
}

let myNewDeck = new Deck ();
myNewDeck.createDeck ();
console.log(myNewDeck);










    




    
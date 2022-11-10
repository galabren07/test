const expect =  chai.expect;

describe("Test Deal function", function () {
    it("Both arrays should contain 52 cards" , function () {
        let testDeck = newDeck();
        var x = deal(deck, playerOne, playerTwo);
        expect(playerOne.length).to.equal(26);
        expect(playerTwo.length).to.equal(26);
    });
});
;
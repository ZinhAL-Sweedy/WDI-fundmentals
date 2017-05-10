 console.log("Up and running!");
 /*var cardOne = "queen";
 var cardTwo = "king";
 var cardThree = "queen";
 var cardFour = "king";*/
/* console.log("User flipped "+ cardOne);
 console.log("User flipped " + cardFour);*/




//var cards=["queen", "queen", "king", "king"];
var cards = [
   {
       rank : "queen",
       suit: "hearts",
       cardImage :"images/queen-of-hearts.png"
   },
   {
      rank : "queen",
       suit: "diamonds",
       cardImage :"images/queen-of-diamonds.png"
   },
   {
   	rank : "king",
       suit: "hearts",
       cardImage :"images/king-of-hearts.png"
   },
   {
   	rank : "king",
       suit: "diamonds",
       cardImage :"images/queen-of-diamonds.png"
   }
];
var cardsInPlay=[];

var checkForMatch=function() {
  //console.log(cards[cardId].cardImage)
  if (cardsInPlay.length===2) {
    if (cardsInPlay[0]===cardsInPlay[1]) {
      alert("You have found a match");
    }
    else {
      alert("Sorry, try again");
    }
  }
};

var flipCard=function() {
  var cardId=this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped over "+ cards[cardId].rank);
	//cardsInPlay.push(cards[cardId]);
	console.log("User flipped over "+ cards[cardId].suit);
	console.log("User flipped over "+ cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
};


var createBoard = function() {
 for (i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click',flipCard);
document.getElementById('game-board').appendChild(cardElement);
};
};
createBoard();
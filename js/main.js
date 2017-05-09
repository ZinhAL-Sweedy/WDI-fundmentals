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

var checkForMatch=function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      alert("You found a match!");
  } 
  else {
      console.log("Sorry, try again.");
     alert("Sorry, try again.");
  }
}


var flipCard=function(cardId){

	console.log("User flipped over "+ cards[cardId].rank);
	// var cardOne = cards[0];
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped over "+ cards[cardId].suit);
	console.log("User flipped over "+ cards[cardId].cardImage);
	checkForMatch();

	//var cardTwo = cards[2];
	//cardsInPlay.push(cardTwo);
	
};


flipCard(0);
flipCard(2);

	/*console.log("User flipped "+cardsInPlay);
	if ((cardsInPlay.length) ===2)
	{
		if (cardsInPlay[0]===cardsInPlay[1])
		{
			 alert("You found a match!");
		}
		else
		{
			 alert("Sorry, try again.");
		}
}*/
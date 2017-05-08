 console.log("Up and running!");
 /*var cardOne = "queen";
 var cardTwo = "king";
 var cardThree = "queen";
 var cardFour = "king";*/
/* console.log("User flipped "+ cardOne);
 console.log("User flipped " + cardFour);*/




var cards=["queen", "queen", "king", "king"];
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

	console.log("User flipped over "+ cards[cardId]);
	// var cardOne = cards[0];
	cardsInPlay.push(cards[cardId]);
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
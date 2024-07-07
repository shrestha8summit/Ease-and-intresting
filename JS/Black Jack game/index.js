//calling for id and other:
let messageEl = document.getElementById("Message-el")
let cardEl = document.getElementById("Card-el")
let sumEl = document.getElementById("Sum-el")

//for termination
let isAlive = true
let hasBlackJack = false

//sum of the card to for control flow 
let sum = null;
//message from condition structure:
let message =""

//Array of cards 
let cards=[]

//for new game
//let newGame = document.getElementById("next_card");

// function start()
// {
//     play();
//     isAlive = true;
//     cards[0]=randomCard();
//     cards[1]=randomCard();
//     sum = cards[0]+cards[1];
// }

function play()
{
        
        sumEl.textContent = "SUM : "+ sum; 
        
        // for printing the card numbers:   very important way : 
        cardEl.textContent = "Your Cards: "
        for (let i = 0; i < cards.length; i++) {
            cardEl.textContent += cards[i] + " "
        }

        //condition for checking Black jack or not :
        if(sum<=20)
        {
             message = "Do you want to draw next card?"
        }
        else if(sum===21)
        {
            message = "Congratulations! You have won the Black Jack game.";
            isAlive = false
            hasBlackJack = true
        }
        else if(sum>21)
        {
            message = "Sorry you loose the Black Jack game." 
            isAlive = false
        }

        messageEl.innerHTML = message; // we can use innerText or innerHTMl aslo 

        // if(isAlive = false)
        // {
        //     newGame.textContent = " Restart";
        // }
    console.log(cards)
}
let count=0 ;
function next()
{
    console.log("working");
    console.log("isAlive=",isAlive)
    console.log("hasblackjack=",hasBlackJack)
    console.log(cards)
  if(isAlive=== true && hasBlackJack=== false)
  {
    console.log("working 2")
    let nextCard =randomCard();
    cards.push(nextCard);
    sum += nextCard;
    play();
    count++;
  }
}

function randomCard()
{
    let num1 = Math.floor(Math.random()*10+1)
    if(num1 == 1)
    {
        return 11;
    }
    else{ return num1};
}


if(isAlive==false && count<5)
{
    
}

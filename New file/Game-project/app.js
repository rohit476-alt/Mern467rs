var cards = document.querySelectorAll(".cell")


cards.forEach(card => card.addEventListener("click", flip))

var isFliped = false;
var score = 0;
var firstCard = null;
var secondCard = null;

function flip()
{
    if(firstCard && secondCard)
    {
        return;
    }
   this.classList.remove("unflip")
   this.classList.add("flip")
   if(isFliped==false)
   {
    isFliped = true;
    firstCard  = this;
   }
   else
   {
    secondCard = this;

    if(firstCard.dataset.index === secondCard.dataset.index)
    {
       success();
    }
    else
    {
        fail();
    }
    
   }
}

function success()
{
    score+=10;
    document.getElementById("score").innerText = score;

    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);

    resetValues();
}

function fail()
{
    setTimeout(() => {
        firstCard.classList.remove("flip")
        firstCard.classList.add("unflip")
     
        secondCard.classList.remove("flip")
        secondCard.classList.add("unflip")
        resetValues()
    },1000)

  


}

function resetValues()
{
    isFliped = false;
    firstCard = null;
    secondCard = null;
}




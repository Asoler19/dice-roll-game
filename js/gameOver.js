function gameOver(winner){
    const circlePosition = circle.getBoundingClientRect()
    console.log(circlePosition)

    winner.style.top = circlePosition.top + 'px'
    winner.style.left = circlePosition.left + 'px'
    winner.classList.add('winner')
    winner.classList.add('alter-ego')
                
 //here I created my timeout function containing my dialog box so when the player gets to the circle a prompt pops up recognizing the winner following that 1000 seconds will refresh the page.//
setTimeout(function() {
if (player1 === winner){
    alert('You finally beat Jerry! But you made Spike mad!')
    } else if(player2 === winner)
alert('You beat Tom! But you made Spike mad!')

    location.reload()

}, 1000)

}


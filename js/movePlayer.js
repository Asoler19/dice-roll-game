function movePlayer(player, position){
    if(position > 10){
        //game over
    
        gameOver(player)
        return false
    }
    
    let tilePosition = tiles[position - 1].getBoundingClientRect()
    // console.log(tilePosition)

    player.style.top = tilePosition.top + 'px'
    player.style.left = tilePosition.left + 'px'
    
}

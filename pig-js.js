var scores, activePlayer,roundScore ;
init();

/**************dice rolling********************/
document.querySelector('.btn-roll').addEventListener('click',function()
{   
    document.querySelector('.dice').style.display = 'block';
    var dic = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'https://raw.githubusercontent.com/blank-27/complete-javascript-course/master/4-DOM-pig-game/starter/dice-' + dic + '.png';
        
    if(dic!==1)
    {
        roundScore=roundScore + dic;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{  
        roundScore=0;

        document.getElementById('current-' + activePlayer).textContent = roundScore;
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         if(activePlayer===0)
        {
            activePlayer=1;
            //  document.querySelector('.player--panel').classList.add('active');
        }else{
            activePlayer=0;
        } 
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
    }
    
});


/*************************hold buttom***************************/
document.querySelector('.btn-hold').addEventListener('click', function () 
{
    score[activePlayer]+=roundScore;
    if(score[activePlayer]>=100)
    {   
        
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.dice').style.display = 'none';
        
    }else{
    // roundScore=0;
    document.getElementById('current-'+ activePlayer).textContent=0;
    document.querySelector('#score-'+ activePlayer).textContent=score[activePlayer];
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    if(activePlayer===0)
    {
        activePlayer=1;
    }else
    {
        activePlayer=0;
    }
    roundScore=0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}


/***************************NEW GAME BUTTON*********************/
});
document.querySelector('.btn-new').addEventListener('click',init);
function init() {
    activePlayer = 0; roundScore = 0;
    score = [0, 0];
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.add('active');
}




























// if (dic != 1) {
//     roundScore = roundScore + dic;
// } else {
//     activePlayer = 1;
// }

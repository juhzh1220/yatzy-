
function rollDice() {
    rollCount++;
    let diceArr=[1,2,3,4,5];
    let randomDice=[];
    for (let i=0;i<diceArr.length;i++) {
      randomDice.push(Math.floor(Math.random()*6)+1);
    }
    const playArea=document.getElementById("playArea");
    const diceContainer=document.getElementById("player1Container");
    let numDice=diceContainer.children.length;
    let counter=0;
    diceElements.forEach(function(diceElement,index){
      if(diceElement.classList.contains("active")|| rollCount==1){
        resetDicePositions();
        const x = transformValues[index][0];
        const y = transformValues[index][1];
  
        setTimeout(function(){
          counter++;
          changeDiePosition(diceElement,x,y);
          changeDiceFaces(randomDice);
        
          if(counter==1) {
            if (isPlayerOneTurn) writeTempValuesInScoreTable(player1Dice);
            else writeTempValuesInScoreTable(player2Dice);
         }
          if(rollCount==3){
            rollButton.disabled=true;
            rollButton.style.opacity=0.5;
          }
          rollSound.play();
        },500);
      }
    });
  
  }
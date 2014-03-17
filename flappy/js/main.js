var heroImage = new Image();
var pipeImage = new Image();

var pipeX = [];
var pipeY = [];
var avatarX = 0;
var heroY = 0;
var refreshIntervalId;
var start;
var dummyinterval;
function setUpGame() {
    var gameCanvas = document.getElementById("gameCanvas");
    
    heroImage.src = "img/hero.png";
    pipeImage.src = "img/pipe.png";
    heroY = 250;
    gameCanvas.addEventListener("mouseclick", jump);
start=false;

  dummyinterval=  setInterval(sets,25) ;
       
}

function sets(){
       var gameCanvas = document.getElementById("gameCanvas");

    var avatarImage = heroImage;
     gameCanvas.width = gameCanvas.width;
     
    gameCanvas.getContext("2d").drawImage(avatarImage, 50, heroY);
}

var jumpStart = heroY;
var jumping = false;
function jump() {

if(!start){
        clearInterval(dummyinterval);
    start=true;
    refreshIntervalId  =   setInterval(handleTick, 24);
}

    jumpStart = heroY - 50;
    // yVel= heroY-25;
    jumping = true;
    yVel = 4;
    //gravity=1.2
    // yVel=0;
}
var yVel = 0;
var gravity = 0.1;
var spawner = 0;
var score=0;
var scorer = -240 ;
function handleTick() {
    spawner++;
    scorer++;
    var gameCanvas = document.getElementById("gameCanvas");

    var enemyImage = pipeImage;
    var avatarImage = heroImage;

    gameCanvas.width = gameCanvas.width;

  if (scorer === 150){
       score++;
       scorer=0;
  }

    if (spawner === 150)
    {
        pipeX.push(gameCanvas.width);
        pipeY.push(Math.random() * 200);
        spawner = 0;
      
       
      
    }


    var currentEnemyNumber = 0;
    var numberOfEnemies = pipeX.length;

    while (currentEnemyNumber < numberOfEnemies) {
        pipeX[currentEnemyNumber] = (pipeX[currentEnemyNumber] - 1);
        currentEnemyNumber = currentEnemyNumber + 1;
    }
    
    currentEnemyNumber = 0;
    while (currentEnemyNumber < numberOfEnemies) {
        gameCanvas.getContext("2d").drawImage(enemyImage, pipeX[currentEnemyNumber], 0 - pipeY[currentEnemyNumber]);
        gameCanvas.getContext("2d").drawImage(enemyImage, pipeX[currentEnemyNumber], 0 - pipeY[currentEnemyNumber] + 430);
   
 
        if((((53<pipeX[currentEnemyNumber]&&
                pipeX[currentEnemyNumber]<95)||
                
                ((pipeX[currentEnemyNumber])<53&&
                53<(pipeX[currentEnemyNumber]+52)))&&(
                
                heroY< 0 - pipeY[currentEnemyNumber]&&
                pipeY[currentEnemyNumber]<heroY||
                pipeY[currentEnemyNumber]<heroY&&
                heroY< 0 - pipeY[currentEnemyNumber]+320)
                )||(((53<pipeX[currentEnemyNumber]&&
                pipeX[currentEnemyNumber]<95)||
                
                ((pipeX[currentEnemyNumber])<53&&
                53<(pipeX[currentEnemyNumber]+52)))&&(
                
                heroY-3< 0 - pipeY[currentEnemyNumber] + 430&&
                0 - pipeY[currentEnemyNumber] + 430<heroY+45||
                0 - pipeY[currentEnemyNumber] + 430<heroY-3&&
                heroY-3< 0 - pipeY[currentEnemyNumber] + 430+320)
                )){
            
          //  alert("dead!");
            clearInterval(refreshIntervalId);
        }

                currentEnemyNumber = currentEnemyNumber + 1;

        
    }


  gameCanvas.getContext("2d").font = "36px sans-serif";
  gameCanvas.getContext("2d").fillText(score, 10, 50);
    gameCanvas.getContext("2d").drawImage(avatarImage, 50, heroY);

    if (jumping) {

        if (heroY < (jumpStart)) {
            yVel = 0;
            jumping = false;
        } else {
            yVel -= gravity;
            heroY -= yVel;
        }

    } else {
        yVel += gravity;
        heroY += yVel;

    }


}
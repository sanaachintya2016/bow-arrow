class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = db.ref("gameState");
        gameStateRef.on("value" , function(data){gameState = data.val()});
    }

    updateState(state)
    {
        db.ref("/").update({gameState:state});
    }

    start()
    {
        if(gameState===0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        player1=createSprite(250,530);
        player1.addImage(player1Image);
        player1.scale = 0.3

        player2 = createSprite(750,530);
        player2.addImage(player2Image);
        player2.scale = 0.4

        players=[player1,player2];
    }

    play()
    {
        form.hideForm();
        text("Game Start",500,200);

        player.getPlayerInfo();
        this.spawnTargetsFromLeft();
        this.spawnTargetsFromRight();
        if(allPlayers !== undefined)
        {
            image(groundImg,0,0,1000,600);
            var index = 0; 
            var x;
            var y = 530;
            for(var plr in allPlayers) 
            {
                index = index + 1;
                x = allPlayers[plr].positionX; 
                
                players[index - 1].x = x; 
                players[index - 1].y = y; 
            }
        }
        if(keyIsDown(LEFT_ARROW))
        {
            player.positionX = player.positionX - 10;  
            player.updatePlayerInfo(); 
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            player.positionX = player.positionX + 10;
            player.updatePlayerInfo();    
        }
        if(keyDown("space")&&player.index===1)
        {
            this.releaseArrowForPlayer1();
        }

        if(keyDown("space")&&player.index===2)
        {
            this.releaseArrowForPlayer2();
        }
              if(target1Group.isTouching(arrow1Group))
        {
            target1Group.destroyEach();
            arrow1Group.destroyEach();
            score= score+20;
       
        }
        if(target2Group.isTouching(arrow1Group))
        {
            target2Group.destroyEach();
            arrow1Group.destroyEach();
            score= score+20;


        }
        if(target1Group.isTouching(arrow2Group))
        {
            target1Group.destroyEach();
            arrow2Group.destroyEach();
            score= score+20;
        }
        if(target2Group.isTouching(arrow2Group))
        {
            target2Group.destroyEach();
            arrow2Group.destroyEach();
            score= score+20;

        }
        fill("red");
        text("score : " + score,20,20);

        drawSprites();
    }

    spawnTargetsFromLeft()
    {
        if(frameCount%250===0)
        {
            target1=createSprite(random(-150,-10),random(30,90),20,20);
            target1.addImage(targetImage);
            target1.scale=0.3;
            target1.velocityX=5;
            target1Group.add(target1);
            
        }
  
    }

    spawnTargetsFromRight()
    {
        if(frameCount%250===0)
        {
            target2=createSprite(random(1010,1260),random(120,180),20,20);
            target2.addImage(targetImage);
            target2.scale=0.3;
            target2.velocityX=-5;
            target2Group.add(target2);
        }
     
    }
    releaseArrowForPlayer1()
    {
        arrow1=createSprite(player.positionX,515,10,40);
        arrow1.addImage(arrowImg);
        arrow1.scale = 0.05;
        arrow1.velocityY = -5;
        arrow1Group.add(arrow1);
    

    }

    releaseArrowForPlayer2()
    {
        arrow2=createSprite(player.positionX,515,10,40);
        arrow2.addImage(arrowImg);
        arrow2.scale = 0.05;
        arrow2.velocityY = -5;
        arrow2Group.add(arrow2);

    }
}
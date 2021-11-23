class Form 
{
    constructor()
    {
      this.title = createElement("h2");
      this.input = createInput("name");
      this.button = createButton("play");
      this.greeting = createElement('h3');
      this.reset = createButton("reset");

    }

    hideForm()
    {
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
    
    display()
    {
      this.title.html("Bow And Arrow");
      this.title.position(800,50);
      this.input.position(800,200);
      this.button.position(1000,200);
      this.reset.position(100,50)

    
      this.button.mousePressed(() => 
      {
        this.input.hide();
        this.button.hide();
        player.name  = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name);
        this.greeting.position(800, 200);
      }); 
      this.reset.mousePressed(()=>{
        game.updateState(0);
        player.updateCount(0);
        
        
        })
    }
}
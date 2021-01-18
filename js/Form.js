class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()

  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 -50, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    this.input.position(displayWidth/2-30,displayHeight/2 -80); //input.position(130, 160);
    this.button.position(displayWidth/2+30,displayHeight/2 ); //button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(displayWidth/2 - 70, displayHeight/4)
    });

  }
}

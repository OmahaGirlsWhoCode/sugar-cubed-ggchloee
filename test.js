var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});
var toybox;
var settings = {
    gravity: 980,
    demoMode: true,
    plugins: ["alien", "button", "fireball", "slime", "jelly", "backdrop"]
};

function preload() {
    toybox = new Toybox(game, settings);
    toybox.preload();
}
var counter = 0;

function spawnJelly() {
    toybox.add.jelly({
      startingX: 700
    });
    counter+=1;
}
var playerOptions

function create() {
    toybox.create();
    playerOptions = {
        startingX : 50,
        startingY: 100,
        color: "green",
        jumpForce: 400,
        speed: 100,
        scale: 1
    };
    mainPlayer = toybox.add.alien(playerOptions);
    spawnJelly();
  toybox.add.button({
     startingX: 100,
     startingY: 70,
     onPress: spawnAFireball

  });
  toybox.add.button({
     startingX: 500,
     startingY:10,
     onPress: spawnASlime
  });
  
  toybox.add.backdrop()
}

    var missShot;

function spawnAFireball() {
        var random = Phaser.Math.between(0,1);
    if (random == 1){
    toybox.add.fireball({
       startingX: 100
    });   
    }
    else{
   missShot = game.add.text(50, 100, "You missed.", { fill : "#ffffff"});
    toybox.add.slime({
        startingX: game.world.centerX, 
    });
    counter+=1;
    }
}

   var nothing;

function spawnASlime() {
        var randNumber = Phaser.Math.between(0,1);
    if (randNumber == 1){
        var newSlime = toybox.add.slime({
            startingX: game.world.centerX,
        });
        newSlime.events.onKilled.add(function(){
            counter--;
        });
        counter++;
    }
    else{
   nothing = game.add.text(100, 50, "Nothing happened.", { fill : "#ffffff"});
    }
    
    }
   
function end() {
   if (counter == 0){
   alert("You won! Take your pomegranates and get out of here!");
   }
   else (counter == 1);
    game.add.text(500, 60, "Kill the enemy.");  
}

function update(){
    toybox.update();
    end = 0;
}

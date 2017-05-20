var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});
var toybox;
var settings = {
    gravity: 980,
    demoMode:true,
    plugins: ["alien", "platform", "coin", "bullet", "backdrop", "button", "spikes"]
};
var player;

function preload() {
    toybox = new Toybox(game, settings);
    toybox.preload();
    game.load.spritesheet("spacebackdrop", "space.jpg", 256, 128);
}


function create() {
  toybox.create();
 
toybox.add.spikes({
    startingX: 445,
    startingY: 475,
    color: "blue"
})

 
toybox.add.spikes({
    startingX: 275,
    startingY: 475,
    color: "blue"
})
 
toybox.add.spikes({
    startingX: 100,
    startingY: 475,
    color: "blue"
}) 

toybox.add.spikes({
    startingX: 445,
    startingY: 450,
    color: "blue"
}) 
 
toybox.add.bullet({
    startingX: game.world.width,
    speedVector: new Phaser.Point( -25,25)
    
}) ;

backdrop = toybox.add.backdrop({
    spriteName: 'spacebackdrop'
})

function wingame(){
    alert("YOU WIN!")
}


toybox.add.button({
    startingX: 585,
    startingY: 420,
    onPress: wingame,
    color: "blue"
})

 toybox.add.coin({
      startingX: 45,
      startingY: 400,
      allowGravity: false,
     killAge: false
      
  })  
  

  
  toybox.add.coin({
      startingX: 65,
      startingY: 400,
      allowGravity: false,
     killAge: false
      
  })
  
  //  toybox.add.coin({
 //     startingX: 85,
  //    startingY: 380,
    //  allowGravity: false,
  //   killAge: false
      
 // })
  
    toybox.add.coin({
      startingX: 105,
      startingY: 360,
      allowGravity: false,
     killAge: false
      
  })
  
  toybox.add.coin({
      startingX: 125,
      startingY: 360,
      allowGravity: false,
     killAge: false
      
  })
  
  toybox.add.coin({
      startingX: 145,
      startingY: 360,
      allowGravity: false,
     killAge: false
      
  })
  
//toybox.add.coin({
 //    startingX: 165,
 //     startingY: 340,
 //    allowGravity: false,
//    killAge: false
      
// })
    
toybox.add.coin({
      startingX: 145,
      startingY: 360,
      allowGravity: false,
     killAge: false
      
  })  
  
 toybox.add.coin({
      startingX: 165,
      startingY: 340,
      allowGravity: false,
     killAge: false
      
  }) 
  
  addCoin(
      185,340);
  
  toybox.add.coin({
      startingX: 205,
      startingY: 340,
      allowGravity: false,
     killAge: false
      
  })
  
  function addCoin( coinX, coinY){
         toybox.add.coin({
          startingX: coinX,
          startingY: coinY,
         allowGravity: false,
         killAge: false
         })
  }
  
  addCoin(
      225, 310)
  
  addCoin(
      245, 310)
      
      addCoin(
          265, 310)
      
  addCoin(
     455, 425)
     
     addCoin(480, 425)
     
     addCoin(355,395)
     addCoin(390, 395)
  
  toybox.add.platform({
      startingX: 50,
      startingY: 475,
      width: 50,
      height: 35,
      type: 6
  });
  
  
  toybox.add.platform({
      startingX: 125,
      startingY: 435,
      width: 50,
      height: 35,
      type: 6
  });
 
  toybox.add.platform({
      startingX:  200,
      startingY: 395,
      width: 50,
      height: 35,
      type: 6
  });
  
   toybox.add.platform({
      startingX:  275,
      startingY: 355,
      width: 50,
      height: 35,
      type: 6
  });
 
 toybox.add.platform({
      startingX: 375,
      startingY: 435,
      width: 50,
      height: 35,
      type: 6
  });
 toybox.add.platform({
      startingX: 475,
      startingY: 475,
      width: 50,
      height: 35,
      type: 6
  });
 
  player = toybox.add.alien({
      controls: {
          left: 37,
                right: 39,
                jump: 38,
                fire: 17
      },
      color: "blue"
  });
  player.events.onUpdate.add(shoot, player);
}
var canshoot= true;
function shoot(){
   if(player.controls.fire.isDown && canshoot){
       toybox.add.bullet({
        startingX: this.x+20,
        startingY: this.y,
        speedVector: new Phaser.Point( 50,0)
        
       })
       canshoot= false;
       game.time.events.add(
           500, function(){
              canshoot= true; 
              
           });
}
    
    
}









function update() {
    toybox.update();
}




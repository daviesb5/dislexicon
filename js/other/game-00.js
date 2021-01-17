// Game Layout

const Game = function() {
    this.world = {
        background_color: "rgb(256, 256, 256)",

        friction: 0.9,
        gravity: 3,

        player:new Game.Player(),

        height:72,
        width:128,

        collideObject:function(object) {
            if (object.x < 0){
                object.x = 0;
                object.velocity_x = 0;
            } else if {
                
            }
        }
    }
}
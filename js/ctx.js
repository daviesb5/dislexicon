var ctx = null;
var tileW = 100, tileH = 40;
var mapW = 10, mapH = 10;

var currentSecond = 0, frameCount = 0, framesLastSecond = 0;

var gameMap = [
    0, 1, 0, 0,
    1, 0, 1, 1,
    0, 1, 0, 0
]

window.onload = function(){
    ctx = document.getElementById('game-screen').getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
};

function drawGame(){
    if (ctx == null) {
        return;
    }
    var sec = Math.floor(Date.now()/1000);
    if (sec!=currentSecond){
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    } else {
        frameCount++;
    }

    for (var y=0; y < mapH; y++){
        for (var x = 0; x < mapW; x++){
            switch(gameMap[((y*mapW))]){
                case 0:
                    ctx.fillStyle = "#999999";
                    break;
                default:
                    ctx.fillStyle = "#eeeeee";
            }

            ctx.fillRect(x*tileW, y*tileH, tileW, tileH);
        }
    }
}
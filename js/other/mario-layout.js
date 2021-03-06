function loadImage(url){
    return new Promise (resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

const canvas = document.getElementById('game-screen');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50, 50);

loadImage('/img/tiles/platforms/png/platform-1.png').then(image => {
    context.drawImage(image, 0, 0);
});
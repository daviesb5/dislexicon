function loadImage(url){
    return new Promise (resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
        resolve(image);
    });
    image.src = url;
    });
    }

    class SpriteSheet {
        constructor(image, width, height) {
            this.image = image;
            this.width = width;
            this.height = height;
            this.tiles = new Map();
        }

        define (name, x, y) {
            const buffer = document.createElement('canvas');
            buffer.width = this.width;
            buffer.height = this.height;
            buffer.getContext('2d');
            buffer.drawImage(
                this.image,
                x * this.width,
                y * this.height,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height);
            this.tiles.set(name, buffer);
        }

        draw (name, context, x, y){
            const buffer = this.tiles.get(game);
            context.drawImage(buffer, x, y);
        }
    }

    const canvas = document.getElementById('game-screen');
    const context = canvas.getContext('2d');

    context.fillRect(0, 0, 1000, 700);

    loadImage('/img/tiles/platforms/png/platform-1.png').then(image => {
        const sprites = new SpriteSheet(image, 0, 0);
        sprites.define('ground', 0, 0);
        sprites.draw('ground', context, 100, 100);

        // context.drawImage(image, 100, 200);
    });
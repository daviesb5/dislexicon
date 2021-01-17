document.addEventListener('DOMContentLoaded', () => {
    //grid layout
    const tileArray = [
        // row 1
        {
            name: 'filler-tile',
            img: 'img/tiles/letter-blocks/png/filler-tile-0.png'
        },
        {},
        {},
        {},
        {},
        {},
        // row 2
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {},
        {},
        {},
        {},
        // row 3
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {},
        {},
        {},
        // row 4
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {},
        {},
        // row 5
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {},
        // row 6
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        },
        {
            name: 'blank-tile',
            img: 'img/tiles/letter-blocks/png/0-blank-tile.png'
        }
    ]

    //create your layout
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            alert("i: " + i);
            var curTile = document.createElement('img')
            curTile.setAttribute('src', 'img')
            tileArray.appendChild(curTile)
        }
    }

    createBoard()
})
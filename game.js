class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this._width = width;
        this._height = height;
        this._ctx = canvas.getContext('2d'); // store context to draw something
        this._player = new Player(this._ctx, this._width / 10, this._height / 10); // create a simple player
    }

    play() {
        this._clear(); // clear the whole canvas to draw something new
        this._drawBorder(); // draw a game area border
        this._player.draw(); // update player on each tick

        if (this._checkState()) { // check game status : run other tick if player doesn't lose =)
            requestAnimationFrame(this.play.bind(this)); // run play again ~60 times per sec
        } else {
            this._playLose();
        }
    }

    _checkState() {
        let borders = this._player.getBorders();
        return (borders.xMin >= 0 &&
            borders.xMax <= this._width &&
            borders.yMin >= 0 &&
            borders.yMax <= this._height);
    }

    _playLose() {
        this._ctx.beginPath();
        this._ctx.font = '48px serif';
        this._ctx.fillStyle = 'red';
        this._ctx.fillText("You lose!", this._width / 2, this._height / 2);
    }

    _drawBorder() {
        this._ctx.beginPath();
        this._ctx.rect(0, 0, this._width, this._height);
        this._ctx.stroke();
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
    }
}

var game = new Game(document.getElementsByTagName('canvas')[0], 400, 400); // create an instance of the game
game.play(); // start it
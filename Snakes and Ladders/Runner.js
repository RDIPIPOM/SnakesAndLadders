export default class Runner {
    constructor(name = '', stringPictureRight, stringPictureLeft, table, extraMoves = new Array()) {
        this._name = name;
        this._picture = document.createElement('img');
        this._stringPictureRight = stringPictureRight;
        this._stringPictureLeft = stringPictureLeft;
        this._table = table;
        this._extraMoves = extraMoves;
        this._position = 76;
        this._winner = false;

        this._picture.setAttribute('src', this._stringPictureRight);
    }

    get name() {
        return this._name;
    }

    get position() {
        return this._position;
    }

    get winner() {
        return this._winner;
    }

    set name(name) {
        this._name = name;
    }

    set winner(isWinner) {
        this._winner = isWinner;
    }

    set extraMoves(extraMoves) {
        this._extraMoves = extraMoves;
    }

    run(steps) {
        if (steps != 0) {
            if (this._position < 100) {
                this._position++;
                setTimeout(() => {
                    this.run(steps - 1);
                }, 200);
            } else {
                this._winner = true;
                return;
            }
            this._movePicture();
        } else {
            if (this._extraMoves[this._position - 1] != 0) {
                this._position += this._extraMoves[this._position - 1];
                this._movePicture();
            }
        }
    }

    _movePicture() {
        let xAndY = this._getCurrentXAndY(this._position);
        this._table.rows[xAndY[1]].cells[xAndY[0]].appendChild(this._picture);
    }

    _getCurrentXAndY(position) {
        let tens, units, x, y;
        tens = Math.trunc(position / 10);
        units = position - tens * 10;

        if (position % 10 === 0)
            y = 9 - (tens - 1);
        else
            y = 9 - tens;

        if (position % 10 != 0) {//is not it a ten?
            if ((tens + 1) % 2 === 0) {//Does it move to left                
                this._picture.setAttribute('src', this._stringPictureLeft);
                x = 10 - units;
            }
            else {
                this._picture.setAttribute('src', this._stringPictureRight);
                x = units - 1;
            }
        } else {
            if ((tens + 1) % 2 === 0) {//Does it move to left
                this._picture.setAttribute('src', this._stringPictureLeft);
                x = 9;
            } else {
                this._picture.setAttribute('src', this._stringPictureRight);
                x = 0;
            }
        }
        return new Array(x, y);
    }
}
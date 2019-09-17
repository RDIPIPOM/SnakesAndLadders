export default class Dice {
    constructor(sides = 0) {
        this._sides = sides;
    }

    set sides(sides) {
        this._sides = sides;
    }

    roll() {
        return Math.trunc(Math.random() * this._sides) + 1;
    }
}
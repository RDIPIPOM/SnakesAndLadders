import Dice from './Dice.js';

export default class BoardGame {
    constructor(table, dice = new Dice(1), players = new Array()) {
        this._table = table;
        this._dice = dice;
        this._players = players;
        this._winners = new Array();
        this._turn = 0;
        this._moveExtra = new Array(100);
    }

    set table(table) {
        this._table = table;
    }

    set dice(dice) {
        this._dice = dice;
    }

    set players(players) {
        this._players = players;
    }

    start() {
        if (!this._isSomeoneWinner()) {
            this._turn++;
            console.log('/////////Turn ' + this._turn + '/////////');
            let number;
            for (let i = 0; i < this._players.length; i++) {
                number = this._dice.roll();
                console.log('*' + this._players[i].name + '*');
                console.log('Current position: ' + this._players[i].position + '(+' + number + ' dice)');
                this._players[i].run(number);
            }
            setTimeout(() => {
                this.start();
            }, 2000);
        } else if (this._winners.length === 1) {
            console.log('/////////The winner is: ' + this._winners[0].name + '/////////');
        } else {
            console.log('/////////It was a draw between///////// ');
            for (let i = 0; i < this._players.length; i++) {
                console.log('*' + this._winners[i].name + '*');
            }
        }
    }

    _isSomeoneWinner() {
        for (let i = 0; i < this._players.length; i++) {
            if (this._players[i].winner === true) {
                this._winners.push(this._players[i]);
            }
        }

        if (this._winners.length === 0)
            return false;
        else
            return true;
    }

    _createBoard() {
        let cell, row, counter = 100, aux = -1;
        for (let i = 0; i <= 9; i++) {
            row = this._table.insertRow(i);
            for (let j = 0; j <= 9; j++) {
                cell = row.insertCell(j);
                cell.innerHTML = counter;
                counter += aux;
            }
            if ((i + 1) % 2 != 0) {
                counter -= 9;
            } else {
                counter -= 11;
            }
            aux *= -1;
        }

        //Add snakes and ladders
        this._putSnakesAndLadders();
        for (let i = 0; i < this._players.length; i++) {
            this._players[i].extraMoves = this._moveExtra;
        }
    }

    _putSnakesAndLadders() {
        //Set incrments and decrements
        for (let i = 0; i < this._moveExtra.length; i++) {
            this._moveExtra[i] = 0;
        }
        //Snakes
        this._moveExtra[91] = -10;
        this._moveExtra[97] = -33;
        this._moveExtra[76] = -10;
        this._moveExtra[70] = -18;
        this._moveExtra[43] = -8;
        this._moveExtra[49] = -11;
        this._moveExtra[34] = -5;
        this._moveExtra[20] = -5;
        this._moveExtra[11] = -10;
        //Ladders6691
        this._moveExtra[6] = 30;
        this._moveExtra[10] = 37;
        this._moveExtra[15] = 11;
        this._moveExtra[28] = 16;
        this._moveExtra[33] = 13;
        this._moveExtra[39] = 20;
        this._moveExtra[57] = 17;
        this._moveExtra[65] = 25;
        this._moveExtra[78] = 9;

        ////Pictures///
        let img;
        //Snake 1 (92, 82)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(000negro).png');
        this._table.rows[0].cells[8].innerHTML = '';
        this._table.rows[0].cells[8].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(000negro).png');
        this._table.rows[1].cells[1].innerHTML = '';
        this._table.rows[1].cells[1].appendChild(img);
        //Snake 2 (98, 65)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(0000FFazul).png');
        this._table.rows[0].cells[2].innerHTML = '';
        this._table.rows[0].cells[2].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(0000FFazul).png');
        this._table.rows[3].cells[4].innerHTML = '';
        this._table.rows[3].cells[4].appendChild(img);
        //Snake 3 (77, 67)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(00FA9AverdePrimaveraMedio).png');
        this._table.rows[2].cells[3].innerHTML = '';
        this._table.rows[2].cells[3].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(00FA9AverdePrimaveraMedio).png');
        this._table.rows[3].cells[6].innerHTML = '';
        this._table.rows[3].cells[6].appendChild(img);
        //Snake 4 (71, 53)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(00FFFFagua).png');
        this._table.rows[2].cells[9].innerHTML = '';
        this._table.rows[2].cells[9].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(00FFFFagua).png');
        this._table.rows[4].cells[7].innerHTML = '';
        this._table.rows[4].cells[7].appendChild(img);
        //Snake 5 (44, 36)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(8B0000rojoOscuro).png');
        this._table.rows[5].cells[3].innerHTML = '';
        this._table.rows[5].cells[3].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(8B0000rojoOscuro).png');
        this._table.rows[6].cells[4].innerHTML = '';
        this._table.rows[6].cells[4].appendChild(img);
        //Snake 6 (50, 39)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(4B0082morado).png');
        this._table.rows[5].cells[9].innerHTML = '';
        this._table.rows[5].cells[9].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(4B0082morado).png');
        this._table.rows[6].cells[1].innerHTML = '';
        this._table.rows[6].cells[1].appendChild(img);
        //Snake 7 (35, 30)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(006400verde).png');
        this._table.rows[6].cells[5].innerHTML = '';
        this._table.rows[6].cells[5].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(006400verde).png');
        this._table.rows[7].cells[9].innerHTML = '';
        this._table.rows[7].cells[9].appendChild(img);
        //Snake 8 (21, 16)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(9400D3violeta).png');
        this._table.rows[7].cells[0].innerHTML = '';
        this._table.rows[7].cells[0].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(9400D3violeta).png');
        this._table.rows[8].cells[2].innerHTML = '';
        this._table.rows[8].cells[2].appendChild(img);
        //Snake 9 (12, 2)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(B8860Bdorado).png');
        this._table.rows[8].cells[8].innerHTML = '';
        this._table.rows[8].cells[8].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Snake50px(B8860Bdorado).png');
        this._table.rows[9].cells[1].innerHTML = '';
        this._table.rows[9].cells[1].appendChild(img);
        //////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        //Ladder 1 (7, 37)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(000negro).png');
        this._table.rows[9].cells[6].innerHTML = '';
        this._table.rows[9].cells[6].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(000negro).png');
        this._table.rows[6].cells[3].innerHTML = '';
        this._table.rows[6].cells[3].appendChild(img);
        //Ladder 2 (11, 48)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(0000FFazul).png');
        this._table.rows[8].cells[9].innerHTML = '';
        this._table.rows[8].cells[9].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(0000FFazul).png');
        this._table.rows[5].cells[7].innerHTML = '';
        this._table.rows[5].cells[7].appendChild(img);
        //Ladder 3 (16, 27)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(00FA9AverdePrimaveraMedio).png');
        this._table.rows[8].cells[4].innerHTML = '';
        this._table.rows[8].cells[4].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(00FA9AverdePrimaveraMedio).png');
        this._table.rows[7].cells[6].innerHTML = '';
        this._table.rows[7].cells[6].appendChild(img);
        //Ladder 4 (29, 45)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(00FFFFagua).png');
        this._table.rows[7].cells[8].innerHTML = '';
        this._table.rows[7].cells[8].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(00FFFFagua).png');
        this._table.rows[5].cells[4].innerHTML = '';
        this._table.rows[5].cells[4].appendChild(img);
        //Ladder 5 (34, 47)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(8B0000rojoOscuro).png');
        this._table.rows[6].cells[6].innerHTML = '';
        this._table.rows[6].cells[6].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(8B0000rojoOscuro).png');
        this._table.rows[5].cells[6].innerHTML = '';
        this._table.rows[5].cells[6].appendChild(img);
        //Ladder 6 (40, 60)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(4B0082morado).png');
        this._table.rows[6].cells[0].innerHTML = '';
        this._table.rows[6].cells[0].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(4B0082morado).png');
        this._table.rows[4].cells[0].innerHTML = '';
        this._table.rows[4].cells[0].appendChild(img);
        //Ladder 7 (58, 75)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(006400verde).png');
        this._table.rows[4].cells[2].innerHTML = '';
        this._table.rows[4].cells[2].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(006400verde).png');
        this._table.rows[2].cells[5].innerHTML = '';
        this._table.rows[2].cells[5].appendChild(img);
        //Ladder 8 (66, 91)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(9400D3violeta).png');
        this._table.rows[3].cells[5].innerHTML = '';
        this._table.rows[3].cells[5].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(9400D3violeta).png');
        this._table.rows[0].cells[9].innerHTML = '';
        this._table.rows[0].cells[9].appendChild(img);
        //Ladder 9 (79, 88)
        //Start
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(B8860Bdorado).png');
        this._table.rows[2].cells[1].innerHTML = '';
        this._table.rows[2].cells[1].appendChild(img);
        //End
        img = document.createElement('img');
        img.setAttribute('src', './Icons/Ladder50px(B8860Bdorado).png');
        this._table.rows[1].cells[7].innerHTML = '';
        this._table.rows[1].cells[7].appendChild(img);
    }
}
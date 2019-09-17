import Boardgame from './BoardGame.js';
import Dice from './Dice.js';
import Runner from './Runner.js';

var boardgame = new Boardgame();

window.onload = () => {
    //Get table
    let table = document.querySelector('table');
    //Create players
    let players = new Array();
    players.push(new Runner('Edgar', './Icons/PlayerRight50px(fffblanco).png', './Icons/PlayerLeft50px(fffblanco).png', table));
    players.push(new Runner('Marcelino', './Icons/PlayerRight50px(000negro).png', './Icons/PlayerLeft50px(000negro).png', table));

    //Create boardgame 
    boardgame.table = table;
    boardgame.dice = new Dice(6);
    boardgame.players = players;
    boardgame._createBoard();
}

document.querySelector('#btnStart').addEventListener('click', () => {
    //Start!
    boardgame.start();
});
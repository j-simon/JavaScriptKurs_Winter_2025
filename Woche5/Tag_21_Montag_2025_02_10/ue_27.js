'use strict';

const board2string = (board) => board.map((row) => row.join('')).join('\n');

const execMove = (board, move) => {
    const originX = fieldToXPosition(originField(move));
    const originY = fieldToYPosition(originField(move));
    const targetX = fieldToXPosition(targetField(move));
    const targetY = fieldToYPosition(targetField(move));

    board[targetY][targetX] = board[originY][originX];
    board[originY][originX] = emptyBoard()[originY][originX];
    return board;
};

const boardInStartPosition = () => [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

const emptyBoard = () => [
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
];

const originField = (move) => move.substr(0, 2);
const targetField = (move) => move.substr(2);

const fieldToXPosition = (field) => letterToChessIndex(field.charAt(0));
const fieldToYPosition = (field) => numberToChessIndex(field.charAt(1));
const letterToChessIndex = (letter) => 'abcdefgh'.indexOf(letter);
const numberToChessIndex = (num) => 8 - num;

console.log(board2string(boardInStartPosition()));

console.log('\n');

// Dieser Einzelschritt muss deaktiviert werden
//console.log(board2string(execMove(boardInStartPosition(), 'e2e4')));

// Lösung mit forEach()
const execMoves = (moves) => {
    let board=boardInStartPosition()
    moves.forEach( move => execMove(board,move))

    return board
}

// Musterlösung mit reduce()
// const execMoves = (moves) => moves.reduce(execMove, boardInStartPosition());

console.log(board2string(execMoves(['e2e4', 'e7e5', 'f2f4'])));
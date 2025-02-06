'use strict';
const array3D=[];

const board2string = (board) => board.map((row) => row.join('')).join('\n');

const execMove = (board, move) => {
    const originX = fieldToXPosition(originField(move));
    const originY = fieldToYPosition(originField(move));
    const targetX = fieldToXPosition(targetField(move));
    const targetY = fieldToYPosition(targetField(move));

    board[targetY][targetX] = board[originY][originX]; // Zug zum Zielfeld
    board[originY][originX] = emptyBoard()[originY][originX]; // Rekinstruktion des jetzt leeren Spielfeld
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

// Start
// console.log(board2string(board2string(boardInStartPosition())));
array3D.push(boardInStartPosition());

// console.log('\n');

let neuePositionBoard = execMove(boardInStartPosition(), 'e2e4');
// console.log(board2string(neuePositionBoard));
// console.log('\n');
array3D.push(neuePositionBoard);

neuePositionBoard = execMove(neuePositionBoard, 'e4e5');
// console.log(board2string(neuePositionBoard));
// console.log('\n');
array3D.push(neuePositionBoard);

neuePositionBoard = execMove(neuePositionBoard, 'e5e6');
// console.log(board2string(neuePositionBoard));
// console.log('\n');
array3D.push(neuePositionBoard);

console.log(array3D);
array3D.forEach((boardZug ) => console.log("\n",board2string(boardZug)))
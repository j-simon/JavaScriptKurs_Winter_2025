const firstRow = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
// console.log(firstRow);

const boardInStartPosition = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

// console.log(boardInStartPosition);

const zeigeSchachBrett = (board) => {
    board.map((zeile) => {
        console.log(zeile.join(""));
        /*zeile.map((spalte) => { 
            console.log(spalte)
        })*/
    
    });
}

const zeigeEin2DArrayAn = (array) =>  array.map((zeile) =>  console.log(zeile.join(" ")) )


zeigeSchachBrett(boardInStartPosition);


'use strict';




let boardgames = [
  'Caverna',
  'Puerto Rico',
  'Agricola',
  'Black Friday',
  'Funny Friends',
  'Fauna',
  'Eclipse',
  'Codenames',
  'Dominion',
  'Fairy Tale',
  'Fast Flowing Forest Fellers',
  'Fearsome Floors'
];

let isFerdinandsBoardgame =  (game) =>{
        //console.log(game)
        //console.log(game.split(" ").every(wort=> wort.startsWith("F") && game.split(" ").length > 1 ))

        return game
            .split(" ")
            // .every(wort=> wort.startsWith("F") && game.split(" ").length > 1 )
            .every(wort=> wort.startsWith("F") && game.includes(" ") )
    
                    //.filter( g => g.charAt(0) === 'F'  ) ; // ['Fairy' ,'Tale']
} 

let ferdinandsBoardgames = boardgames.filter(isFerdinandsBoardgame);

console.log(ferdinandsBoardgames); // => [ 'Funny Friends', 'Fast Flowing Forest Fellers', 'Fearsome Floors' ]

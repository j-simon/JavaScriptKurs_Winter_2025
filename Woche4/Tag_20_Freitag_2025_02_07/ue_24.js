'use strict';

const winnerNames = [
    'Heribert',
    'Friedlinde',
    'Tusnelda',
    'Oswine',
    'Ladislaus',
];


const withPlace_orginal = (winners) =>
    winners.map((winner, i) => (i < 3 ? `Winner ${i + 1}: ${winner}` : winner));


const withPlace = (winners) =>
    winners.map((winner, i) =>
        i < 3
            ? `${i + 1}${i === 0 ? 'st' : ''}${i === 1 ? 'nd' : ''}${i === 2 ? 'rd' : ''
            } place: ${winner}`
            : winner,
    );

console.log(withPlace(winnerNames));
/*[
    'Winner 1: Heribert',
    'Winner 2: Friedlinde',
    'Winner 3: Tusnelda',
    'Oswine',
    'Ladislaus'
  ]

[
    '1st place: Heribert',
    '2nd place: Friedlinde',
    '3rd place: Tusnelda',
    'Oswine',
    'Ladislaus',
]
    */
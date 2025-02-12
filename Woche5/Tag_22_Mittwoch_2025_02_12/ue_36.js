'use strict';

let logTransformedName = ({vorname:firstName, nachname:lastName}) =>
    console.log(`${lastName}, ${firstName.charAt(0)}.`);

logTransformedName(
    {
        vorname: 'Ladislaus',
        nachname: "Jones",
    }
);

// default parameter
// Parameteranzahl und die Argumentenanzahl sind unterschiedlich

// Parameter
// 1. Defintion
const gibTexteAus = (text = "du hast da was vergessen") => {
    console.log(text)
}

// Argumente
// 2. Aufruf
gibTexteAus();
gibTexteAus(1123);

const cylindricalVolume = (radius, height = 100) => Math.PI * radius * radius * height;

cylindricalVolume(10,100);
cylindricalVolume(10);
// Funktion zur Berechnung der ISBN-Prüfziffer
const berechnePruefziffer = (isbn) => {
    // Entferne Bindestriche und konvertiere in ein Array von Ziffern
    const ziffern = isbn.replace(/-/g, '').split('').map(Number);
  
    // Berechne die gewichtete Summe
    const summe = ziffern
      .slice(0, -1) // Prüfziffer ausschließen, falls vorhanden
      .map((ziffer, index) => (index % 2 === 0 ? ziffer : ziffer * 3))
      .reduce((acc, wert) => acc + wert, 0);
  
    // Berechne die Prüfziffer
    const pruefziffer = (10 - (summe % 10)) % 10;
  
    return pruefziffer;
  };
  
  // Funktion zur Validierung einer vollständigen ISBN-13
  const istGueltigeISBN = (isbn) => {
    const ziffern = isbn.replace(/-/g, '').split('').map(Number);
    if (ziffern.length !== 13) return false;
    return berechnePruefziffer(isbn) === ziffern[12]; // 13.
  };
  
  // Testfälle
  
  console.log(berechnePruefziffer('978-3-86680-192-9')); // Erwartet: 9
  console.log(istGueltigeISBN('978-3-86680-192-9')); // Erwartet: true
  console.log(istGueltigeISBN('978-3-86680-192-8')); // Erwartet: false
  